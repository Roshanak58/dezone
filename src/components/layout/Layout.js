import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

import Breadcrumb from "@/components/elements/Breadcrumb";
import Header from "./Header";
import Footer from "./Footer";
import Image from "next/image";
import { useRouter } from "next/router";

function Layout({ children }) {
  const router = useRouter();
   const [locale, setLocale] = useState(router.asPath.startsWith("/en") ? "en" : "fa");
  const changeLanguage = (lang) => {
    setLocale(lang);

    if (lang === "en") {
      router.push("/en" + router.asPath);
    } else {
      router.push(router.asPath.replace(/^\/en/, "") || "/");
    }
  };
  const { status } = useSession();
  const logoutHandler = () => {
    signOut();
  };
  return (
    <div className="container">
      

        <Header
        locale={locale}
        changeLanguage={changeLanguage}
      />
        
      
      <div className="container--main">
        <main className="content">{children}</main>
      </div>

      <Footer  locale={locale} />
    </div>
  );
}

export default Layout;
