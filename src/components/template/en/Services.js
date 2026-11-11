import Image from "next/image";
import Link from "next/link";
import styles from "./Services.module.css";

function Services() {
     const services = [
{
  title: "Engineering Services",
  desc: "Specialized studies, design, and supervision based on the latest global knowledge and technologies",
  icon: "/images/engineer.jpg",
  link: "/en/services/engineerS",
},
{
  title: "Wastewater Treatment",
  desc: "Design and implementation of modern wastewater treatment systems for municipal and industrial applications",
  icon: "/images/sewage.jpg",
  link: "/en/services/wastewatertreatment",
},
{
  title: "Water Treatment",
  desc: "Advanced water treatment systems for drinking water, industrial, and agricultural applications",
  icon: "/images/waterr.jpg",
  link: "/en/services/waterpurification",
},
{
  title: "Pumping Stations",
  desc: "Design and construction of high-efficiency pumping stations with optimized energy consumption",
  icon: "/images/pumping.jpg",
  link: "/en/services/pstation",
},
{
  title: "Operation and Maintenance",
  desc: "Specialized operation, maintenance, and repair services for water and wastewater treatment equipment",
  icon: "/images/operation.jpg",
  link: "/en/services/operation",
},
{
  title: "After-Sales Services",
  desc: "Specialized technical support and after-sales services for equipment",
  icon: "/images/afterSalee.png",
  link: "/en/services/afterSale",
},
{
  title: "International Equipment Sourcing",
  desc: "Supply of specialized parts and equipment from reputable international manufacturers",
  icon: "/images/supplyer.jpg",
  link: "/supplier",
},
];
  return (
    <div className={styles.backService}>

      {/* Header */}
      <div className={styles.ServiceHeader}>
        <h3>Our Services</h3>
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
  )
}

export default Services