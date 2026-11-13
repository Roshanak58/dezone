import { useEffect, useRef } from "react";
import styles from "./PdfViewer.module.css";

export default function PdfViewer({ pdfUrl }) {
  const pdfContainerRef = useRef(null);

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

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          canvas.style.width = "100%";
          canvas.style.height = "auto";

          canvas.className = styles.pdfPage;

          container.appendChild(canvas);

          await page.render({
            canvasContext: context,
            viewport: viewport,
          }).promise;
        }
      } catch (error) {
        console.error("PDF loading error:", error);
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