import PdfViewerCut from "@/components/PdfViewer/PdfViewerCut";
import styles from "./aboutus.module.css";
import EnAboutus from "@/components/template/EnAbout";

function AboutUs() {
  return (
    <div className={styles.aboutus}>
      <div className={styles.aboutTitle}>
        <h3>About us</h3>
      </div>
      <h2 className={styles.aboutusH2}>About Dezone Co</h2>
      <div className={styles.pdfContainer}>
        <PdfViewerCut pdfUrl="/api/pdf/AboutUs.pdf" />
      </div>
      <EnAboutus />
    </div>
  );
}

export default AboutUs;
