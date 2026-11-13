import PdfViewerCut from "@/components/PdfViewer/PdfViewerCut";
import Image from "next/image";
import Link from "next/link";
import styles from "@/pages/en/services/treatment.module.css";
function Waterpurification() {
   return (
    <>
      <div className={styles.infoHeader}>
        <h3>Water Treatment</h3>
      </div>
      <div className={styles.infoLi}>
        <div className={styles.pdfContainer}>
          <PdfViewerCut pdfUrl="/api/pdf/waterpurification.pdf" />
        </div>
        <div className={styles.balanceItem}>
          <div>
            <Link href="/en/services/waterpurification/DrinkingWaterTreatment">
              <Image
                 className={styles.imgBorder}
                src="/images/waterr.jpg"
                alt="Logo"
                width={100}
                height={100}
              />

              <p> Drinking water treatment </p>
            </Link>
          </div>
          <div>
            <Link href="/en/services/waterpurification/IndustrialWaterTreatment">
              <Image
                className={styles.imgBorder}
                src="/images/Industrial.jpg"
                alt="Logo"
                width={100}
                height={100}
              />

              <p> Industrial water treatment</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Waterpurification