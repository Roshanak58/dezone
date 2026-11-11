import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { TiHomeOutline } from "react-icons/ti";
import { MdWaterDrop } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
// import { signOut, useSession } from "next-auth/react";

function Navbar({ locale }) {

  const [open, setOpen] = useState(false);
  return (
    <div className="navbarWrapper">
      <nav className={`navbar ${open ? "open" : ""}`}>
        <ul className={`menu ${open ? "open" : ""}`}>
          {/* خانه */}
          <li>
            <TiHomeOutline />
            <Link
              className="fontLink"
              href={locale === "fa" ? "/" : "/en"}
              // href={locale === "fa" ? "/fa" : "/en"}
              onClick={() => setOpen(false)}
            >
              {locale === "fa" ? "خانه" : "Home"}
            </Link>
          </li>

          {/* درباره ما */}
          <li>
            <FaPeopleRoof />
            <Link
              className="fontLink"
              href={locale === "fa" ? "/aboutus" : "/en/aboutus"}
              // href={locale === "fa" ? "/fa/aboutus" : "/en/aboutus"}
              onClick={() => setOpen(false)}
            >
              {locale === "fa" ? "درباره ما" : "About Us"}
            </Link>
          </li>

          {/* خدمات */}
          <li>
            <MdWaterDrop />
            <Link
              className="fontLink"
              href={locale === "fa" ? "/services" : "/en/services"}
              // href={locale === "fa" ? "/fa/services" : "/en/services"}
              onClick={() => setOpen(false)}
            >
              {locale === "fa" ? "خدمات ما" : "Our Services"}
            </Link>
          </li>

          {/* پروژه ها */}
          <li>
            <MdConstruction />
            <Link
              className="fontLink"
              href={locale === "fa" ? "/projects" : "/en/projects"}
              // href={locale === "fa" ? "/fa/projects" : "/en/projects"}
              onClick={() => setOpen(false)}
            >
              {locale === "fa" ? "پروژه ها" : "Projects"}
            </Link>
          </li>

          {/* تماس با ما */}
          <li>
            <IoCallOutline />
            <Link
              className="fontLink"
              href={locale === "fa" ? "/contactus" : "/en/contactus"}
              // href={locale === "fa" ? "/fa/contactus" : "/en/contactus"}
              onClick={() => setOpen(false)}
            >
              {locale === "fa" ? "تماس با ما" : "Contact Us"}
            </Link>
          </li>
        </ul>
      </nav>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
        <a>منو</a>
      </div>
    </div>
  );
}

export default Navbar;
