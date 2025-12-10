import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

function Header() {
  {
    /*<div class="site-info">
          <h3>نام سایت</h3>
          <p class="line1">Dddddd Eeeeeeeee Cccccc</p>
          <p class="line2">Mmmmmmm Sssssss, Waaaa & Tttttttt waaaaaaaa</p>
        
        </div>
    
    <p>Dezone Engineering Company </p>
     <h3>شرکت مهندسی دزون</h3>
    </div>
     <p>Municipal Utilities, Water & Wastewater Treatment</p> */
  }
  return (
    <header class="header">
      <div class="right-section">
        <div>
          <Image src="/images/dezon.jpg" width="60" height="60" alt="Logo" />
        </div>

        <div class="site-info">
          <h3>شرکت مهندسی دزون</h3>
          <p class="line1">Dezone Engineering Company</p>
          <p class="line2">Municipal Utilities, Water & Wastewater Treatment</p>
        </div>
      </div>

      <div className="vertical-lines">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* منو وسط */}
      <div className="center-section">
        <Navbar />
      </div>

      {/* بخش چپ */}
      <div className="left-section">
        <div className="search-area">
          <button className="search-btn">🔍</button>
          <input type="text" placeholder="جستجو..." className="search-input" />
        </div>
      </div>
      <div>
        <div className="right-section">
          <p>انتخاب زبان:</p>
          <Link href="/">fa</Link>
          <p>/</p>
          <Link href="/">En</Link>
        </div>
        <div >
          <hr/>
          <Link href="/">
            <h4>ورود</h4>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
