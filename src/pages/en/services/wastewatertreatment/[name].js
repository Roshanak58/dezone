import { useRouter } from "next/router";

import styles from "@/pages/en/services/treatment.module.css";
import PdfViewer from "@/components/PdfViewer/PdfViewer";

function Index() {
  const router = useRouter();
  const type = router.query.name;
  // if (type === "urbanWasteWater") {
  //   nameType = "تصفیه فاضلاب شهری";
  // }
  //  if (type === "IndustrialWastewater") {
  //   nameType = "تصفیه فاضلاب صنعتی";
  // }
  return (
    <>
      <div className={styles.infoHeader}>
        <h3>{type} </h3>
      </div>
      {type === "MunicipalWastewater" && (
        <div className={styles.pdfContainer}>
          <PdfViewer pdfUrl="/api/pdf/MunicipalWastewater.pdf" />
        </div>
      )}
      {type === "IndustrialWastewater" && (
        <div className={styles.pdfContainer}>
          <PdfViewer pdfUrl="/api/pdf/IndustrialWwT.pdf" />
        </div>
      )}
    </>
  );
}

export default Index;
