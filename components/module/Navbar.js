import Link from "next/link";

import { TiHomeOutline } from "react-icons/ti";
import { MdWaterDrop } from "react-icons/md";
import { MdConstruction } from "react-icons/md";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="menu">
        <li>
          <TiHomeOutline />
          <Link href="/">خانه</Link>
        </li>
      
        <li>
          <MdWaterDrop />
          <Link href="/services">خدمات ما  </Link>
        </li>
      
        <li>
          <MdConstruction />
          <Link href="/projects">پروژه ها  </Link>
        </li>
     
        <li>
          <FaPeopleRoof />
          <Link href="/aboutus">درباره ما  </Link>
        </li>
     
        <li>
          <IoCallOutline />
          <Link href="/contactus">تماس با ما  </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
