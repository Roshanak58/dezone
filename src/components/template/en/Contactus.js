import styles from "./Contactus.module.css";
import dynamic from "next/dynamic";
import Image from "next/image";

const Map = dynamic(() => import("@/components/elements/Map"), {
  ssr: false,
});

function Contactus() {
  return (
    <div className={styles.contactUs}>
      <div className={styles.mapStyle}>
        <Map />
      </div>
      <div className={styles.contactFont}>
        <div className={styles.callUs}>
          <div className={styles.bigCicle}>
            <div className={styles.smallCircle}>
              {/* marker-icon.png */}
              <Image
                src="/marker-icon.png"
                alt="Logo"
                width={30}
                height={50}
                className={styles.smallImageLoc}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap:"10px"}}>
                <p>Address: </p>
                <p className={styles.pBlue}>
                  No53. Banafsheh st. Shahrak Golestan. Tehran, Iran
                </p>
              </div>
        </div>
        <div className={styles.callUs}>
          <div className={styles.bigCicle}>
            <div className={styles.smallCircle}>
              {/* marker-icon.png */}
              <Image
                src="/call.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.smallImageCa}
              />
            </div>
          </div>
          <div style={{ display: "flex" , gap:"10px"}}>
            <p>Phone: </p>
            <p className={styles.pBlue}> 021-44700011 </p>
          </div>
          <div style={{ display: "flex" , gap:"10px"}}>
            <p>Fax: </p>
            <p className={styles.pBlue}> 021-44763634</p>
          </div>
        </div>
        <div className={styles.callUs}>
          <div className={styles.bigCicle}>
            <div className={styles.smallCircle}>
              <Image
                src="/mail.png"
                alt="Logo"
                width={50}
                height={50}
                className={styles.smallImageMai}
              />
            </div>
          </div>
          <div style={{ display: "flex", gap:"10px"}}>
            <p>Email: </p>
            <p className={styles.pBlue}> info@dezoneco.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contactus;
