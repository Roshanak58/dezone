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
title: "About Us",

desc: "Experience, engineering expertise, and the latest technologies driving the development of sustainable water and wastewater solutions",

icon: "/images/aboutus.png",

link: "/en/aboutus",
},

{
title: "Our Services",

desc: "Design, construction, and supply of equipment for municipal and industrial water and wastewater treatment plants",

icon: "/images/ourservices1.png",

link: "/en/services",
},

{
title: "Projects",

desc: "An overview of our completed projects and engineering solutions in the water and wastewater sector",

icon: "/images/projectt.png",

link: "/en/projects",
},

{
title: "Contact Us",

desc: "Contact us for consultation, inquiries, and evaluation of suitable solutions for your project",

icon: "/images/callus.png",

link: "/en/contactus",
},

  ];
  return (
    <>
      
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

            <h2 className="corner-coverH2">Engineering Solutions </h2>
            <h2 className="corner-coverH2">To ensure clean and sustainable water</h2>
            <div className="corner-coverH3radius">
              <h3 className="corner-coverH3">
               Design and Construction of Municipal and Industrial Water and Wastewater Treatment Plants
              </h3>
              <h3 className="corner-coverH3">In Accordance with the Latest Global Technologies</h3>
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
