import Image from "next/image";
import Link from "next/link";

import { IoCallOutline } from "react-icons/io5";
import { LiaFaxSolid } from "react-icons/lia";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

function MiddlePart3() {
  return (
    <div className="thirdMid">
      <div class="right-section">
        <div>
          <h3>لینکهای مفید</h3>
          <div className="middle">
            <Image
              src="/images/logoSyndicate2.png"
              alt="Logo"
              width={70}
              height={50}
            />
          </div>
          <Link href="https://wwcs.ir/fa/">
            {" "}
            انجمن صنفي شرکت‌های صنعت آب و فاضلاب
          </Link>
        </div>
      </div>

      {/* منو وسط */}
      <div className="center-section"></div>

      {/* بخش چپ */}
      <div className="left-section">
        <div className="callUs">
          <IoCallOutline />
          <h3>تماس با ما</h3>
        </div>
        <div>
          <p> تلفن :44700011-021 </p>
          <div className="callUs">
            <LiaFaxSolid />
          <p>فکس: 44763634-021 </p>
          </div>
          <div className="callUs">
            <HiOutlineMail/>
            <p>Email: info@dezoneco.com</p>
          </div>
          <div className="callUs">
            <MdOutlineLocationOn/>
            <h4>آدرس: </h4>
            <p>  تهران، انتهای همت غرب شهرک گلستان، خیابان بنفشه، پلاک 53 </p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MiddlePart3;
