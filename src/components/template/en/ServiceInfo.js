import Image from "next/image";
import styles from "./ServiceInfo.module.css";
// import PdfViewerCut from "@/components/PdfViewer/PdfViewerCut";
import PdfViewer from "@/components/PdfViewer/PdfViewer";
function ServiceInfo({ type }) {
  //   let nameType = "";
  let urlType = `/api/pdf/${type}.pdf`;
  let nameType = "";
  if (type === "pstation") {
    nameType = "Pumping Stations";
  }
  if (type === "engineerS") {
    nameType = "Engineering Services";
  }
  if (type === "Operation") {
    nameType = "Operation and Maintenance";
  }
  if (type === "afterSale") {
    nameType = "After-Sales Services";
  }

  return (
    <>
      <div className={styles.serviceHeader}>
        <h3>{nameType} </h3>
      </div>
      <div>
        <PdfViewer pdfUrl={urlType} />
      </div>
    </>
  );
}

export default ServiceInfo;
