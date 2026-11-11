import Link from "next/link";
import styles from "./Aboutus.module.css";
import Image from "next/image";
import Certification from "../module/Certification";
import { useState } from "react";
function EnAboutus() {
  const [qualification, setQualification] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [activity, setActivity] = useState(0);
  const RankingClick = () => {
    // setInfo(0);
    // setQc(0);
    // setQualification(0);
    setActivity(0);
    setRanking(1);
    // setActive(4);
  };
  const activityClick = () => {
    // setInfo(0);
    // setQc(0);
    // setQualification(0);
    setRanking(0);
    setActivity(1);
    // setActive(5);
  };
  return (
    <div>
      {/* <div className={styles.balanceHeight}> */}
        <div className={styles.balanceDiv}>
            <Link href="/en/aboutus/info" className={styles.service}>
            <Image
              src="/images/info1.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <p className={styles.serviceP}> Company Information</p>
            <span className={styles.overlayText}>
              General Company Information
            </span>
          </Link>
             <Link href="/en/aboutus/QC" className={styles.service}>
            <Image src="/images/QC.png" alt="Logo" width={80} height={100} />
            <p className={styles.serviceP}>Quality Assurance</p>
            <span className={styles.overlayText}>Quality Assurance</span>
          </Link>
           <Link href="/en/aboutus/Qualification" className={styles.service}>
            <Image
              src="/images/Qualification1.png"
              alt="Logo"
              width={100}
              height={100}
            />
            <p className={styles.serviceP}>Certificate</p>
            <span className={styles.overlayText}>
              Certificate
            </span>
          </Link>
          <Link href="/en/aboutus/ranking" className={styles.service}>
            <Image
              src="/images/Ranking3.png"
              alt="Logo"
              width={80}
              height={100}
              onClick={() => RankingClick()}
            />
            <p className={styles.serviceP}>Ranking</p>
            <span className={styles.overlayText}>Ranking</span>
          </Link>
          <Link href="/en/aboutus/activity" className={styles.service}>
            <Image
              src="/images/activity.png"
              alt="Logo"
              width={80}
              height={100}
              onClick={() => activityClick()}
            />
            <p className={styles.serviceP}>Activity </p>
            <span className={styles.overlayText}>Activity </span>
          </Link>
          
          

         
       

          
        </div>
      {/* </div> */}
      {qualification === 1 && (
        <Certification
          qualification={qualification}
          setQualification={setQualification}
        />
      )}
    </div>
  );
}

export default EnAboutus;
