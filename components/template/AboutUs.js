import Image from "next/image";
import React, { useState } from "react";
import Certification from "../module/Certification";

function AboutUs() {
  const [info, setInfo] = useState(0);
  const [qc, setQc] = useState(0);
  const [qualification, setQualification] = useState(0);
  const [ranking, setRanking] = useState(0);
  const [activity, setActivity] = useState(0);
  const [active, setActive] = useState(null); // نگهداری index دکمه فعال

  const infoClick = () => {
    setInfo(1);
    setQc(0);
    setQualification(0);
    setRanking(0);
    setActivity(0);
    setActive(1);
  };
  const QcClick = () => {
    setInfo(0);
    setQc(1);
    setQualification(0);
    setRanking(0);
    setActivity(0);
    setActive(2);
  };
  const QualificationClick = () => {
    setInfo(0);
    setQc(0);
    setQualification(1);
    setRanking(0);
    setActivity(0);
    setActive(3);
  };
  const RankingClick = () => {
    setInfo(0);
    setQc(0);
    setQualification(0);
    setActivity(0);
    setRanking(1);
    setActive(4);
  };
  const activityClick = () => {
    setInfo(0);
    setQc(0);
    setQualification(0);
    setRanking(0);
    setActivity(1);
    setActive(5);
  };
  return (
    <div>
      <div>
        <div className="balance-div">
          <div className={`service ${active === 1 ? "active" : "inactive"}`}>
            <Image src="/images/info.png" alt="Logo" width={150} height={150}  onClick={() => infoClick()}/>
            <button onClick={() => infoClick()}>اطلاعات کلی شرکت </button>
          </div>

          <div className={`service ${active === 2 ? "active" : "inactive"}`}>
            <Image src="/images/QC.jpg" alt="Logo" width={150} height={150} onClick={() => QcClick()}/>
            <button onClick={() => QcClick()}>خط و مشی کیفی</button>
          </div>
          <div className={`service ${active === 3 ? "active" : "inactive"}`}>
            <Image
              src="/images/Qualification.png"
              alt="Logo"
              width={150}
              height={150}
              onClick={() => QualificationClick()}
            />
            <button onClick={() => QualificationClick()}>
              گواهی صلاحیت پیمانکاری
            </button>
          </div>
          <div className={`service ${active === 4 ? "active" : "inactive"}`}>
            <Image
              src="/images/Ranking.png"
              alt="Logo"
              width={150}
              height={150}
              onClick={()=>RankingClick()}
            />
            <button onClick={() => RankingClick()}> رتبه بندی صلاحیت ها</button>
          </div>
          <div className={`service ${active === 5 ? "active" : "inactive"}`}>
            <Image
              src="/images/activity.jpg"
              alt="Logo"
              width={150}
              height={150}
              onClick={() => activityClick()}
            />
            <button onClick={() => activityClick()}>موضوع فعالیت </button>
          </div>
        </div>
        <div className="about">
          {info === 1 && (
            <div>
              <h3>اطلاعات کلی و حقوقی شرکت مهندسی دزون </h3>
              <div className="gridLi">
                <ul>
                  <li>محل ثبت: تهران</li>
                  <li>کد اقتصادی شرکت: 411335193199</li>
                  <li>کدپستی: 1494885961</li>
                  <li>نوع شرکت: خصوصی</li>
                  <li>شماره ثبت: 89320</li>
                </ul>
                <ul>
                  <li>تاریخ ثبت: 27/12/1370</li>
                  <li>شناسه ملی شرکت: 10101337068</li>
                  <li>سرمایه ثبت شده: 000 000 000 428 ريال</li>
                  <li>سرمایه پرداخت شده: 000 000 000 428 ريال</li>
                </ul>
              </div>
            </div>
          )}
          {qc === 1 && (
            <div>
              <h3>خط مشی کیفی: </h3>
              <p></p>
              <p>
                شرکت مهندسی دزون متعهد به اصل کیفیت و پیشرفت مستمر در این راه
                است.شرکت دزون با برنامه کنترل کیفی خود، ضامن خدمات ارائه شده جهت
                پاسخگویی به نیازهای مشتریان خواهد بود. هدف ما، ارائه به موقع،
                دقیق و کامل خدمات مورد نیاز براساس نیازهای واقعی مشتریان است.
              </p>
            </div>
          )}
          {ranking === 1 && (
            <div>
              <h2>رتبه بندی صلاحیت های شرکت مهندسی دزون </h2>
              <p></p>
              <div className="gridLi">
                <ul>
                  <li>پایه یک رشته آب </li>
                  <li> پایه دو رشته تاسیسات و تجهیزات </li>
                </ul>
              </div>
            </div>
          )}
          {activity === 1 && (
            <div>
              <h2>موضوع فعالیت شرکت (طبق اساسنامه): </h2>
              <p></p>
              <p>
                ارائه خدمات مهندسی اعم از طرح و اجرا در زمینه پروژه های ساختمان
                سازی، ارائه طرح و مشاوره و اجرا در زمینه نصب و راه اندازی
                تاسیسات و تجهیزات شامل تصفیه، انتقال و توزیع آب، جمع آوری، تصفیه
                و دفع فاضلاب، اخذ نمایندگی از داخل و خارج کشور و صادرات و واردات
                کلیه کالاهای مجاز بازرگانی{" "}
              </p>
            </div>
          )}
        </div>
      </div>
      {qualification === 1 && (
        <Certification
          qualification={qualification}
          setQualification={setQualification}
        />
      )}
    </div>
  );
}

export default AboutUs;
