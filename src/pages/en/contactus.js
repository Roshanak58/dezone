import Contactus from "@/components/template/en/Contactus";
import styles from "./contactus.module.css"
function contactus() {
  return (
    <>
      <div className={styles.ContactHeader}></div>
      <div style={{ height: "600px" }}>
        <Contactus />
      </div>
    </>
  );
}

export default contactus;
