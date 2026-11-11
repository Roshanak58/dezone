import Image from "next/image";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import Breadcrumb from "../elements/Breadcrumb";
import Navbar from "@/components/elements/Navbar";
import styles from "./Header.module.css";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

function Header({ locale, changeLanguage }) {
  const { status } = useSession();
  

  const isEnglish = locale === "en";

  const name = isEnglish
    ? "Dezone Engineering Company"
    : "شرکت مهندسی دزون";

  const logi = isEnglish ? "Login" : "ورود";

  const logoutText = isEnglish ? "Logout" : "خروج";

  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerUp}>
        <div className={styles.rightSection}>
          <div>
            <Image
              src="/images/dezon.jpg"
              width={40}
              height={40}
              alt="Logo"
            />
          </div>

          <div>
            <h3 className={styles.rh3}>{name}</h3>
          </div>
        </div>

        <div className={styles.centerSection}>
          <Navbar locale={locale} />
        </div>

        <div className={styles.leftSection}>
          <div className={styles.languageSwitcher}>
            <div className={styles.flagContainer}>
              <button onClick={() => changeLanguage("fa")}>
                <Image
                  src="/images/ir.png"
                  alt="فارسی"
                  width={35}
                  height={35}
                />
              </button>
              <span className={styles.flagTooltip}>فارسی</span>
            </div>

            <div className={styles.flagContainer}>
              <button onClick={() => changeLanguage("en")}>
                <Image
                  src="/images/en.png"
                  alt="English"
                  width={35}
                  height={35}
                />
              </button>
              <span className={styles.flagTooltip}>English</span>
            </div>
          </div>

          <div>
            {status === "authenticated" ? (
              <div>
                <button
                  className="buttonClass"
                  onClick={logoutHandler}
                >
                  <FiLogOut />
                  <span className="overlayText">
                    {logoutText}
                  </span>
                </button>
              </div>
            ) : (
              <Link href={isEnglish ? "/en/signin" : "/signin"}>
                <h4>{logi}</h4>
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