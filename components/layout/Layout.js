import Image from "next/image";
import Link from "next/link";
import React from "react";

import { TiHomeOutline } from "react-icons/ti";
import { MdWaterDrop } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import MiddlePart from "../template/MiddlePart";
import Navbar from "../module/Navbar";
import Header from "../module/Header";
import Breadcrumb from "../module/Breadcrumb";

function Layout({ children }) {
  return (
    <div className="container">
      <Header />

      {/* {status === "authenticated" ? (
          <button onClick={logOutHandler}>
            Logout
            <FiLogOut />
          </button>
        ) : null} */}

     <div className="rightHead-section">
  <Breadcrumb />
  <div className="leftHead-section">
    <div className="lang">
      <Link href="/">En</Link>/<Link href="/">fa</Link>
    </div>
    <div>
      <Link href="/">
        <h4>ورود</h4>
      </Link>
    </div>
  </div>
</div>

      <div className="container--main">
        {/* <aside>
          <ul>
            <li>
              <Link href="/">خانه</Link>
              <TiHomeOutline />
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/services">خدمات ما</Link>
              <MdWaterDrop />
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/projects">پروژه ها</Link>
              <MdConstruction />
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/aboutus">درباره ما</Link>
              <FaPeopleRoof />
            </li>
          </ul>
          <ul>
            <li>
              <Link href="/contactus">تماس با ما</Link>
              <IoCallOutline />
            </li>
          </ul>
        </aside> */}
        <section>{children}</section>
      </div>
      <footer>
        <p>Developed by R.Ahmadpour</p>
      </footer>
    </div>
  );
}

export default Layout;
