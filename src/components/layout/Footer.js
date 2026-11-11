import { IoCallOutline } from "react-icons/io5";

import styles from "./Footer.module.css";
import Image from "next/image";

function Footer({ locale }) {
  // const isEnglish = locale === "en";
  return (
    <>
      {locale === "fa" ? (
        <footer className={styles.footer}>
          <div className={styles.desc}>
            <h3>شرکت مهندسی دزون</h3>
            <p>تهران، انتهای همت غرب شهرک گلستان، خیابان بنفشه، پلاک 53</p>
            {/* <IoCallOutline /> */}
            <p>📞 021-44700011</p>
          </div>
          <div className={styles.leftSec}>
            <p>Developed by R.Ahmadpour</p>
            <p>برای طراحی وب‌سایت یا اپلیکیشن اختصاصی خود با ما تماس بگیرید</p>
          </div>
          <div>
            {/* <p>📞</p> */}
            <Image
              src="/images/teleg.png"
              width={200}
              height={100}
              alt="Logo"
            />
          </div>
        </footer>
      ) : (
        <footer className={styles.footer}>
          <div>
            {/* <p>📞</p> */}
            <Image src="/images/teleg.png" width={200} height={120} alt="Logo" />
          </div>
          <div className={styles.ENdesc}>
            <p>Developed by R.Ahmadpour</p>
            <p>
              Get in touch with us to design your custom website or application
            </p>
          </div>

          <div className={styles.ENleftSec}>
            <div>
              <h3>Dezone Engineering Company</h3>
              <p> No53. Banafsheh st. Shahrak Golestan. Tehran, Iran</p>
              <p>📞 021-44700011</p>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}

export default Footer;
