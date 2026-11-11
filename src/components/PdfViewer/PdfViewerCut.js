import { useEffect, useRef } from "react";
import styles from "./PdfViewerCut.module.css";

export default function PdfViewerCut({ pdfUrl }) {
  const pdfContainerRef = useRef(null);
console.log("pdfUrl::",pdfUrl)
  useEffect(() => {
    let cancelled = false;
    let pdf = null;

    const renderPDF = async () => {
      try {
        const pdfjsLib = await import(
          "pdfjs-dist/legacy/build/pdf.mjs"
        );

        pdfjsLib.GlobalWorkerOptions.workerSrc =
          "/pdf.worker.min.mjs";

        if (cancelled) return;

        const loadingTask = pdfjsLib.getDocument({
          url: pdfUrl,
          disableFontFace: true,
        });

        pdf = await loadingTask.promise;

        if (cancelled) return;

        const container = pdfContainerRef.current;

        if (!container) return;

        container.innerHTML = "";

        for (
          let pageNumber = 1;
          pageNumber <= pdf.numPages;
          pageNumber++
        ) {
          if (cancelled) return;

          const page = await pdf.getPage(pageNumber);

          const viewport = page.getViewport({
            scale: 1.5,
          });

          // Canvas اصلی برای رندر PDF
          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.width = Math.floor(viewport.width);
          canvas.height = Math.floor(viewport.height);

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;

          if (cancelled) return;

          // پیدا کردن آخرین ردیفی که محتوای واقعی دارد
          const imageData = context.getImageData(
            0,
            0,
            canvas.width,
            canvas.height
          );

          const pixels = imageData.data;

          let bottom = canvas.height;

          // از پایین به بالا جستجو می‌کنیم
          for (let y = canvas.height - 1; y >= 0; y--) {
            let hasContent = false;

            for (let x = 0; x < canvas.width; x++) {
              const index =
                (y * canvas.width + x) * 4;

              const r = pixels[index];
              const g = pixels[index + 1];
              const b = pixels[index + 2];
              const a = pixels[index + 3];

              // اگر پیکسل سفید نباشد، محتوا داریم
              if (
                a > 0 &&
                (r < 245 || g < 245 || b < 245)
              ) {
                hasContent = true;
                break;
              }
            }

            if (hasContent) {
              // کمی فاصله برای اینکه حروف پایین بریده نشوند
              bottom = Math.min(
                y + 10,
                canvas.height
              );
              break;
            }
          }

          // Canvas جدید با ارتفاع Crop شده
          const croppedCanvas = document.createElement("canvas");

croppedCanvas.width = canvas.width;
croppedCanvas.height = bottom;

const croppedContext =
  croppedCanvas.getContext("2d");

croppedContext.drawImage(
  canvas,
  0,
  0,
  canvas.width,
  bottom,
  0,
  0,
  canvas.width,
  bottom
);

croppedCanvas.className = styles.pdfPage;

// عرض اصلی حفظ شود
croppedCanvas.style.width = `${canvas.width}px`;
croppedCanvas.style.height = `${bottom}px`;

container.appendChild(croppedCanvas);
          container.appendChild(croppedCanvas);
        }
      } catch (error) {
        console.error(
          "PDF loading error:",
          error
        );
      }
    };

    renderPDF();

    return () => {
      cancelled = true;

      if (pdf) {
        pdf.destroy();
      }
    };
  }, [pdfUrl]);

  return (
    <div className={styles.pdfContainer}>
      <div
        ref={pdfContainerRef}
        className={styles.pdfPages}
      />
    </div>
  );
}