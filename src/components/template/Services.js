import Link from "next/link";
import Image from "next/image";
import styles from "./Services.module.css";

function Services() {
  const services = [
    {
      title: "خدمات مهندسی",
      desc: "مطالعات، طراحی و نظارت تخصصی با بهره گیری از دانش روز دنیا",
      icon: "/images/engineer.jpg",
      link: "/services/engineerS",
    },
    {
      title: "تصفیه فاضلاب",
      desc: "طراحی و اجرای سیستم های نوین تصفیه فاضلاب شهری و صنعتی",
      icon: "/images/sewage.jpg",
      link: "/services/wastewatertreatment",
    },
    {
      title: "تصفیه آب",
      desc: "ارائه سیستم های پیشرفته تصفیه آب برای مصارف شرب، صنعتی و کشاورزی",
      icon: "/images/waterr.jpg",
      link: "/services/waterpurification",
    },
    {
      title: "ایستگاه پمپاژ",
      desc: "طراحی و ساخت ایستگاه های پمپاژ با راندمان بالا و مصرف انرژی بهینه",
      icon: "/images/pumping.jpg",
      link: "/services/pstation",
    },
    {
      title: "بهره برداری و نگهداری",
      desc: "ارائه خدمات تخصصی بهره برداری، نگهداری و تعمیرات تجهیزات",
      icon: "/images/operation.jpg",
      link: "/services/operation",
    },
    {
      title: "خدمات پس از فروش",
      desc: "پشتیبانی تخصصی و ارائه خدمات پس از فروش تجهیزات",
      icon: "/images/afterSales.png",
      link: "/services/afterSale",
    },
    {
      title: "تأمین قطعات از سازندگان خارجی",
      desc: "تأمین قطعات و تجهیزات تخصصی از سازندگان معتبر خارجی",
      icon: "/images/supplyer.jpg",
      link: "/supplier",
    },
  ];

  return (
    <div className={styles.backService}>

      {/* Header */}
      <div className={styles.ServiceHeader}>
        <h3>خدمات ما</h3>
      </div>

      {/* Services */}
      <div className={styles.servicesGrid}>

        {services.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className={styles.servicesItem}
          >
            <div className={styles.iconBox}>
              <Image
                src={item.icon}
                alt={item.title}
                width={120}
                height={120}
              />
            </div>

            <div className={styles.serviceContent}>
              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              <span className={styles.serviceLine}></span>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}

export default Services;