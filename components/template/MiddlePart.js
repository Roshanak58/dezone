import Image from "next/image";
import Link from "next/link";
import NewsSlider from "../elements/NewSlider";

function MiddlePart() {
  const news = [
    "پیشرفت پروژه تهران: 37/68%",
    "پیشرفت پروژه ساری: 37%",
    "پیشرفت پروژه تبریز: 57%",
    "پیشرفت پروژه واوان:%",
    
  ];

  return (
    <div className="balanceMiddle">
      <div>
        <Image src="/images/Picture1.jpg" alt="Logo" width={250} height={150} />
      </div>
      <div className="middle">
        <p>خدمات ما:</p>
        <p>
          شرکت مهندسی دزون در سال 1370 آغاز به کار نموده و در حال حاضر به عنوان
          یکی از شرکت های شناخته شده در زمینه طراحی فرآیند، تهیه تجهیزات، ساخت و
          بهره برداری از پروژه های آب و فاضلاب مشغول به فعالیت می باشد.
        </p>

        <Link className="linkColor" href="/services">
          بیشتر...
        </Link>
      </div>

      <div style={{ padding: 20 }}>
        
        {/* <p>تازه های دزون:</p>
        <div className="middleDiv">
          <Link href="/"> پروژه تبریز</Link>
        </div>

        <div className="middleDiv">
          <Link href="/">پروژه تهران</Link>
        </div> */}
        {/* <main style={{ padding: 20 }}> */}
          <NewsSlider items={news} />
        {/* </main> */}
      </div>
    </div>
  );
}

export default MiddlePart;
