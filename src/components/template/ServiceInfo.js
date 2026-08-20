import Image from "next/image";
import styles from "./ServiceInfo.module.css";
function ServiceInfo({ type, content }) {
  let nameType = "";
  if (type === "pstation") {
    nameType = "ایستگاه پمپاژ";
  }
  if (type === "engineerS") {
    nameType = "خدمات مهندسی";
  }
  if (type === "operation") {
    nameType = "بهره برداری و نگهداری";
  }
  if (type === "afterSale") {
    nameType = "خدمات پس از فروش";
  }
  return (
    <>
      <div className={styles.infoHeader}>
        <h3>{nameType} </h3>
      </div>
      <div className={styles.backwordSection}>
        <div
          className={styles.wordContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </>
  );
}

export default ServiceInfo;
