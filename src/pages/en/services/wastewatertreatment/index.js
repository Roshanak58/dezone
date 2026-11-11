import Image from "next/image";
import Link from "next/link";
import styles from "@/pages/en/services/treatment.module.css";
import PdfViewerCut from "@/components/PdfViewer/PdfViewerCut";

function Wastewatertreatment() {
  return (
    <>
      <div className={styles.infoHeader}>
        <h3>Waste Water Treatment</h3>
      </div>
      <div className={styles.infoLi}>
        <div className={styles.pdfContainer}>
          <PdfViewerCut pdfUrl="/api/pdf/WastewaterTreatment.pdf" />
        </div>
        <div className={styles.balanceItem}>
          <div>
            <Link href="/en/services/wastewatertreatment/MunicipalWastewater">
              <Image
                className={styles.imgBorder}
                src="/images/urbanwastewater.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <p> MunicipalWastewater </p>
            </Link>
          </div>
          <div>
            <Link href="/en/services/wastewatertreatment/IndustrialWastewater">
              <Image
                className={styles.imgBorder}
                src="/images/industry.png"
                alt="Logo"
                width={100}
                height={100}
              />

              <p> IndustrialWastewater</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Wastewatertreatment;
