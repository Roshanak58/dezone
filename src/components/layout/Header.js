import Image from "next/image";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import Breadcrumb from "../elements/Breadcrumb";
import Navbar from "@/components/elements/Navbar";
import styles from "./Header.module.css";
import { signOut, useSession } from "next-auth/react";
function Header() {
  const { status } = useSession();
  const logoutHandler = () => {
    signOut();
  };
  return (
    // <header className={styles.header}>
    //   <div className={styles.alignHeader}>
    //     <div className={styles.centerSection}>
    //       <Navbar />
    //     </div>
    //     <div className={styles.leftSection}>
    //       <Image src="/images/dezone2.png" width="70" height="50" alt="Logo" />

    //     </div>

    //     <div className={styles.mobileHeader}>
    //       <div className={styles.mobileLeft}>
    //         <Navbar />
    //       </div>
    //     </div>
    //   </div>
    //   <div className={styles.Breadcrumb}>
    //     <Breadcrumb />
    //   </div>
    // </header>
    <header className={styles.header}>
      <div className={styles.headerUp}>
        <div class={styles.rightSection}>
          <div>
            <Image src="/images/dezon.jpg" width="40" height="40" alt="Logo" />
          </div>

          <div>
            <h3 className={styles.rh3}>شرکت مهندسی دزون</h3>
          </div>
        </div>
        <div className={styles.centerSection}>
          <Navbar />
        </div>
        <div className={styles.leftSection}>
          <div className="lang">
            <Link href="/">En</Link>/<Link href="/">fa</Link>
          </div>

          <div>
            {status === "authenticated" ? (
              <div>
                <button className="buttonClass" onClick={logoutHandler}>
                  <FiLogOut />
                  <span className="overlayText">خروج</span>{" "}
                </button>
              </div>
            ) : (
              <Link href="/signin">
                <h4>ورود</h4>
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className={styles.Breadcrumb}>
        <Breadcrumb />
      </div>
    </header>
  );
}

export default Header;
