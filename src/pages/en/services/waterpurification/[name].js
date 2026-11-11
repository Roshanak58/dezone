import PdfViewer from "@/components/PdfViewer/PdfViewer";
import { useRouter } from "next/router";
import styles from "@/pages/services/treatment.module.css";

function Index() {
  const router = useRouter();
  const type = router.query.name;
  return (
    <div>
      <div className={styles.infoHeader}>
        <h3>{type} </h3>
      </div>
      {type === "MunicipalWastewater" && (
        <div className={styles.pdfContainer}>
          <PdfViewer pdfUrl="/api/pdf/DrinkingWT.pdf" />
        </div>
      )}
      {type === "IndustrialWastewater" && (
        <div className={styles.pdfContainer}>
          <PdfViewer pdfUrl="/api/pdf/IndustrialWT.pdf" />
        </div>
      )}
    </div>
  );
}

export default Index;
