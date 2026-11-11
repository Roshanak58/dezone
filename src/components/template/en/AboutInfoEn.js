import Image from "next/image";
import styles from "./AboutInfoEn.module.css";
import { useState } from "react";
import PdfViewer from "@/components/PdfViewer/PdfViewer";

function AboutInfoEn({ type }) {
  let nameType = "";
  if (type === "info") {
    nameType = "Dezone Company Information";
  }
  if (type === "QC") {
    nameType = "Quality Assurance";
  }
  if (type === "ranking") {
    nameType = " ranking";
  }
  if (type === "activity") {
    nameType = " activity";
  }
  if (type === "Qualification") {
    nameType = " گواهی صلاحیت پیمانکاری";
  }
  return (
    <>
      <div className={styles.about}>
        {type === "info" && <div></div>}
        {type === "QC" && (
          <div>
            <div className={styles.aboutTitleEn}>
              <h3>{nameType} </h3>
            </div>
            <div className={styles.pdfContainer}>
              <PdfViewer pdfUrl="/api/pdf/QualityAssurance.pdf" />
            </div>
          </div>
        )}
        {type === "ranking" && <div></div>}
        {type === "activity" && <div></div>}
        {type === "Qualification" && (
          <div>
            <hr className={styles.hr} />
            <Image
              src="/images/ContractorQualification.jpg"
              alt="Logo"
              width={400}
              height={600}
              className={styles.clsImage}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default AboutInfoEn;
