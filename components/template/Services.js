import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import UrbanWastewater from "../module/UrbanWastewater ";
import { useRouter } from "next/router";

function Services() {
  const [supply, setSupply] = useState(0);
  const [wwtreatment, setWwtreatment] = useState(0);
  const [wtreatment, setWtreatment] = useState(0);
  const [pstation, setPstation] = useState(0);
  const [transferW, setTransferW] = useState(0);
  const [collectT, setColletcT] = useState(0);
  const [enginerS, setEnginerS] = useState(0);
  const [operation, setOperation] = useState(0);
  const [afterSale, setAfterSale] = useState(false);
  // const [urban, setUrban] = useState(0);
  const [active, setActive] = useState(null); // نگهداری index دکمه فعال

  const router = useRouter();
  const wwtreatmentClick = () => {
    setSupply(0);
    setWwtreatment(1);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(1);
  };
  const wtreatmentClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(1);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(2);
  };
  const pStationClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(1);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(3);
  };
  const transferWClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(1);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(4);
  };
  const collectTClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(1);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(5);
  };
  const enginerSClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(1);
    setAfterSale(0);
    setOperation(0);
    setActive(6);
  };
  const afterSaleClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(1);
    setOperation(0);
    setActive(7);
  };
  const oprationClick = () => {
    setSupply(0);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(1);
    setActive(8);
  };
  const urbanClick = () => {
    router.push("./services/urbanWasteWater");
  };
  const industryClick = () => {
    router.push("./services/IndustrialWastewater");
  };
  const industrywClick = () => {
    router.push("./services/IndustrialWaterTreatment");
  };
  const drinkwClick = () => {
    router.push("./services/DrinkingWaterPurification");
  };
   const supplyerClick = () => {
     setSupply(1);
    setWwtreatment(0);
    setWtreatment(0);
    setPstation(0);
    setTransferW(0);
    setColletcT(0);
    setEnginerS(0);
    setAfterSale(0);
    setOperation(0);
    setActive(9);
    router.push("./supplier");
  };
  return (
    <>
      <h2 className="classH2">خدمات شرکت مهندسی دزون: </h2>
      <div className="balance-div">
        <div className={`service ${active === 9 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/supplyer.jfif"
            alt="Logo"
            width={130}
            height={130}
          />
          <button onClick={() =>supplyerClick()}>تأمین قطعات از سازندگان خارجی</button>
        </div>
        <div className={`service ${active === 1 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/sewage.jpg"
            alt="Logo"
            width={130}
            height={130}
          />
          <button onClick={() => wwtreatmentClick()}>تصفیه فاضلاب</button>
        </div>

        <div className={`service ${active === 2 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/water.jpg"
            alt="Logo"
            width={130}
            height={130}
          />
          <button onClick={() => wtreatmentClick()}>تصفیه آب</button>
        </div>
        <div className={`service ${active === 3 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/pumping.jpg"
            alt="Logo"
            width={130}
            height={130}
          />
          <button onClick={() => pStationClick()}>ایستگاه پمپاژ</button>
        </div>
        <div className={`service ${active === 4 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/pipes.png"
            alt="Logo"
            width={130}
            height={130}
          />
          <button onClick={() => transferWClick()}>خطوط انتقال آب</button>
        </div>
        <div className={`service ${active === 5 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/collectSweage.png"
            alt="Logo"
            width={130}
            height={130}
          />
          <button onClick={() => collectTClick()}>شبکه جمع آوری فاضلاب</button>
        </div>
        <div className={`service ${active === 6 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/engineer.jpg"
            alt="Logo"
            width={120}
            height={130}
          />
          <button onClick={() => enginerSClick()}>خدمات مهندسی</button>
        </div>
        <div className={`service ${active === 8 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/operation.jfif"
            alt="Logo"
            width={120}
            height={130}
          />
          <button onClick={() => oprationClick()}>بهره برداری و نگهداری</button>
        </div>
        <div className={`service ${active === 7 ? "active" : "inactive"}`}>
          <Image
            className="img-border"
            src="/images/afterSale.png"
            alt="Logo"
            width={130}
            height={130}
          />
          <button onClick={() => afterSaleClick()}>خدمات پس از فروش </button>
        </div>
      </div>

      <div className="textServices">
        {wwtreatment === 1 && (
          <div className="infoLi">
            <p>
              در طول سال های گذشته، شرکت مهندسی دزون پروژه های متعدد کلید در دست
              در زمینه تصفیه فاضلاب انجام داده است. این پروژه ها در ابعاد مختلف
              تصفیه خانه های کوچک و بزرگ، صنعتی و شهری دسته بندی می شود.{" "}
            </p>
            <div className="balanceItem">
              <div>
                <Image
                  className="img-border"
                  src="/images/urbanwastewater.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <button onClick={() => urbanClick()}>تصفیه فاضلاب شهری </button>
              </div>
              <div>
                <Image
                  className="img-border"
                  src="/images/industry.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <button onClick={() => industryClick()}>
                  تصفیه فاضلاب صنعتی{" "}
                </button>
              </div>
            </div>
          </div>
        )}
        {wtreatment === 1 && (
          <div className="infoLi">
            <p>
              همچنین، شرکت مهندسی دزون تعداد قابل ملاحظه ای پروژه کلید در دست در
              زمینه تصفیه آب انجام داده است. این پروژه ها در طیف وسیعی از پروژه
              های کوچک مانند سختی گیری آب، فیلتر یا واحدهای تزریق مواد شیمیایی
              تا پروژه های بزرگ در مقیاس شهری و صنعتی را شامل می شوند.
            </p>
            <div className="balanceItem">
              <div>
                <Image
                  className="img-border"
                  src="/images/water.png"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <button onClick={() => drinkwClick()}>
                  تصفیه آب آشامیدنی{" "}
                </button>
              </div>
              <div>
                <Image
                  className="img-border"
                  src="/images/Industrial.jfif"
                  alt="Logo"
                  width={100}
                  height={100}
                />
                <button onClick={() => industrywClick()}>
                  تصفیه آب های صنعتی{" "}
                </button>
              </div>
            </div>
          </div>
        )}
        {pstation === 1 && (
          <div className="infoLi">
            <p>
              پروژه های کلید در دست اجرا شده توسط شرکت دزون در زمینه ایستگاههای
              پمپاژ آب و فاضلاب از تلمبه خانه های کوچک تا تلمبه خانه های بزرگ
              شهری را شامل می شوند. شرکت مهندسی دزون قادر است آخرین فن آوری ها
              در زمینه های ذیل را عرضه نماید
            </p>
            <p></p>
            <div className="gridLi">
              <ul>
                <li>ایستگاه های پمپاژ آب خام</li>
                <li> ایستگاه های بوستر پمپ</li>
                <li>ایستگاه های بالابر پساب</li>
                <li>ایستگاه های پمپاژ آتش نشانی </li>
                <li>ایستگاه های پمپاژ چرخش آب </li>
              </ul>
              <ul>
                <li>ایستگاههای پمپاژ چاههای عمیق </li>
                <li>ایستگاههای پمپاژ آبیاری </li>
                <li>ایستگاههای پمپاژ زهاب</li>
                <li>ایستگاههای پمپاژ لجن </li>
              </ul>
            </div>
          </div>
        )}
        {enginerS === 1 && (
          <div className="infoLi">
            <p>
              شرکت مهندسی دزون به عنوان پیمانکار متخصص EPC در صنعت آب و فاضلاب،
              خدمات مهندسی مختلفی را ارائه می دهد. که شامل:
            </p>
            <p></p>
            <div className="gridLi">
              <ul>
                <li>انجام مطالعات امکان سنجی و تشریح فرآیند</li>
                <li> طراحی مهندسی پایه فرآیند </li>
                <li>
                  طراحی مهندسی تفصیلی با بهره گیری از نرم افزارهای مهندسی{" "}
                </li>
                <li>بهینه سازی فرآیند </li>
                <li>کنترل پیشرفته فرآیند </li>
              </ul>
              <ul>
                <li>مدیریت کامل پروژه </li>
                <li>ارتقاء پروژه های موجود </li>
                <li>رفع معایب فنی پروژه ها</li>
                <li>خدمات مهندسی خرید تجهیزات </li>
                <li>مطالعات پایلوت</li>
              </ul>
            </div>
          </div>
        )}
        {operation === 1 && (
          <div className="infoLi">
            <p>
              شرکت دزون آماده انعقاد قراردادهای تعمیر و نگهداری برای تضمین از
              عملکرد بهینه تصفیه خانه و تلمبه خانه مشتریان خود، می باشد.
            </p>
            <p>خدمات قابل ارائه شامل موارد ذیل می باشد: </p>
            <p></p>
            <div className="gridLi">
              <ul>
                <li>
                  بهره برداری از پروژه و بهینه سازی فرآیند برای دستیابی به محصول
                  با بالاترین کیفیت و کاهش مصرف انرژی{" "}
                </li>
                <li> مواد شیمیایی و مواد مصرفی </li>
                <li>تأمین لوازم یدکی و تعمیر و تعویض تجهیزات </li>
                <li>نگهداری پیشگیرانه و برنامه ریزی شده </li>
                <li>بازرسی و رفع عیب </li>
                <li>
                  تهیه دستورالعمل های تعمیر و نگهداری و برگه های گزارش های دوره
                  ای{" "}
                </li>
                <li>پیروی از استانداردها و دستورالعمل های ایمنی </li>
              </ul>
            </div>
          </div>
        )}
        {afterSale === 1 && (
          <div className="infoLi">
            <p>
              مشتریان ما می توانند از طریق برنامه های ما از خدمات پس از فروش،
              مشاوره و حل فنی مشکلاتشان بهره مند شوند.
            </p>
            <p>خدمات قابل ارائه شامل موارد ذیل می باشد: </p>
            <p></p>
            <div className="gridLi">
              <ul>
                <li>
                  {" "}
                  بهره برداری از پروژه و بهینه سازی فرآیند برای دست یابی به
                  محصول با بالاترین کیفیت
                </li>
                <li>
                  تهیه برنامه های نگهداری پیشگیرانه و کاهش در مصرف انرژی، مواد
                  شیمیایی و مواد مصرفی{" "}
                </li>
                <li>برگزاری دوره های اختصاصی آموزشی بسته به نیاز مشتریان </li>
                <li>تأمین لوازم یدکی و تعمیر و تعویض تجهیزات </li>
                <li>مساعدت فنی در جهت رفع معایب موجود </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Services;
