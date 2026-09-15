import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") router.replace("/dashboard");
  }, [status]);
  const services = [
    // {
    //   title: "تامین تجهیزات",
    //   desc: "تامین تجهیزات با کیفیت از برندهای معتبر جهانی",
    //   icon: "/images/supplyer.png",
    //   link: "/supplier",
    // },
    // {
    //   title: "تصفیه آب",
    //   desc: "راهکارهای نوین برای تصفیه آب شرب و صنعتی",
    //   icon: "/images/waterTr.png",
    //   link: "/services/waterpurification",
    // },
    // {
    //   title: "تصفیه فاضلاب",
    //   desc: "طراحی و اجرای سیستم‌های تصفیه فاضلاب شهری و صنعتی",
    //   icon: "/images/wasteWT.png",
    //   link: "/services/wastewatertreatment",
    // },
    // {
    //   title: "خدمات و پشتیبانی",
    //   desc: "ارائه خدمات مهندسی و پشتیبانی در تمامی مراحل پروژه",
    //   icon: "/images/afterSales.png",
    //   link: "/services/afterSale",
    // },
    {
      title: "درباره ما",
      desc: "تجربه، دانش مهندسی و فناوری روز در مسیر توسعه راهکارهای پایدار آب و فاضلاب",
      icon: "/images/aboutus.png",
      link: "/aboutus",
    },
    {
      title: "خدمات ما",
      desc: "طراحی، ساخت و تأمین تجهیزات تصفیه‌خانه‌های آب و فاضلاب شهری و صنعتی",
      icon: "/images/ourservices1.png",
      link: "/services",
    },
    {
      title: "پروژه ها",
      desc: "مروری بر پروژه‌های اجراشده و راهکارهای مهندسی ما در حوزه آب و فاضلاب",
      icon: "/images/projectt.png",
      link: "/projects",
    },
    {
      title: "تماس با ما",
      desc: "برای دریافت مشاوره، استعلام و بررسی راهکارهای مناسب پروژه خود با ما در تماس باشید",
      icon: "/images/callus.png",
      link: "/contactus",
    },
  ];
  return (
    <>
      <Head>
        <title>شرکت مهندسی دزون | تصفیه آب و فاضلاب</title>

        <meta
          name="description"
          content="طراحی، ساخت و تامین تجهیزات تصفیه آب و فاضلاب"
        />

        <meta name="keywords" content="تصفیه آب، تصفیه فاضلاب، تجهیزات تصفیه" />
      </Head>
      <div className="image-wrapper">
        <Image
          src="/images/watertraeat1.PNG"
          alt="Wastewater treatment"
          width={1145}
          height={400}
          className="borderPic"
          loading="eager"
        />

        <div className="corner-cover">
          {/* <span className="eng-title">Dezone Engineering Company</span> */}
          <div>
            {/* <p className="eng-subtitle">
            Municipal Utilities, Water & Wastewater Treatment
          </p> */}

            <h2 className="corner-coverH2">راهکارهای مهندسی </h2>
            <h2 className="corner-coverH2">بـرای تأمین آب پـاک و پایـدار</h2>
            <div className="corner-coverH3radius">
              <h3 className="corner-coverH3">
                طراحی و ساخت تصفیه خانه های آب و فاضلاب شهری و صنعتی{" "}
              </h3>
              <h3 className="corner-coverH3">مطابق با فناوری روز دنیا</h3>
            </div>
          </div>
          {/* <div className="LinkSection">
            <Link href="/projects" className="LinkStyle">
              پروژه ها
            </Link>
            <Link href="/services" className="LinkStyle">
              {" "}
              خدمات ما
            </Link>
          </div> */}
        </div>
        {/* <div className="overlay"></div> */}

        <div className="services-grid">
          {services.map((item, index) => (
            <Link href={item.link} key={index} className="service-item">
              <Image src={item.icon} alt={item.title} width={60} height={60} />

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
