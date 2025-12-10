 import dynamic from "next/dynamic";

// Map import  from "../elements/Map";
const Map = dynamic(() => import("../elements/Map"), {
  ssr: false, // ⬅ جلوی اجرای سروری را می‌گیرد
});


function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactFont">
        <div className="callUs">
          <p>آدرس:</p>
          <p className="pBlue">
            تهران، انتهای همت غرب شهرک گلستان، خیابان بنفشه، پلاک 53{" "}
          </p>
        </div>
        <div className="callUs">
          <p>تلفن:</p>
          <p className="pBlue">021-44700011 </p>
        </div>
        <div className="callUs">
          <p>فکس: </p>
          <p className="pBlue">021-44763634</p>
        </div>
        <div className="callUs">
            <p>پست الکترونیک:</p>
          <p className="pBlue"> info@dezoneco.com</p>
        </div>
      </div>
      <div className=" mapStyle">
        {/* <h1>لوکیشن شرکت</h1> */}
      <Map />
      </div>
    </div>
  );
}

export default ContactUs;
