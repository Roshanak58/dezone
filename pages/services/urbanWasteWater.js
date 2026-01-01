import Link from "next/link";
import React from "react";

function urbanWasteWater() {
  return (
    <div className="picbackg">
      <div className="textServices">
        <div className="alignBack">
          <h2>تصفیه فاضلاب شهری:</h2>
          
        </div>
        <p>
          شرکت مهندسی دزون با بهره مندی از به روزترین فن آوری های دنیا قادر می
          باشد، راهکارهای مناسب و اقتصادی را برای پروژه های تصفیه فاضلاب شهری
          ارائه نماید.
        </p>
        <h3>فرآیندهای تصفیه فاضلاب :</h3>
        <div className="balance-div">
          <div>
            <ul>
              <li className="boldLi"> تصفیه فیزیکی :</li>
              <li className="otherLi">واحد آشغالگیری </li>
              <li className="otherLi">واحد دانه گیری و حذف روغن و چربی</li>
              <li className="otherLi">ته نشینی مقدماتی </li>
            </ul>
            <ul>
              <li className="boldLi">تصفیه شیمیایی:</li>
              <li className="otherLi"> انعقاد </li>
              <li className="otherLi"> ته نشینی </li>
              <li className="otherLi"> خنثی سازی </li>
              <li className="otherLi"> تثبیت </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="boldLi"> تصفیه بیولوژیکی :</li>
              <li className="otherLi">تصفیه به روش رشد معلق</li>
              <li className="otherLi">تصفیه به روش رشد چسبیده</li>
              <li className="otherLi">اکسیداسیون بیولوژیک</li>
              <li className="otherLi">
                {" "}
                نیتریفیکاسیون و دنیتریفیکاسیون بیولوژیکی
              </li>
              <li className="otherLi">حذف بیولوژیکی فسفر</li>
              <li className="otherLi">تخمیر و اکسیداسیون بیهوازی</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="boldLi">تصفیه پیشرفته:</li>
              <li className="otherLi"> فیلتراسیون </li>
              <li className="otherLi"> جذب سطحی </li>
              <li className="otherLi"> عریان سازی </li>
              <li className="otherLi"> تقطیر </li>
            </ul>
            <ul>
              <li className="boldLi"> گند زدایی:</li>
              <li className="otherLi"> گند زدایی با کلر </li>
              <li className="otherLi"> گند زدایی با ازن </li>
              <li className="otherLi"> گند زدایی با سایر مواد شیمیایی </li>
              <li className="otherLi"> گند زدایی با UV </li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="boldLi"> تصفیه لجن بیولوژیکی :</li>
              <li className="otherLi">تغلیظ</li>
              <li className="otherLi">تثبیت</li>
              <li className="otherLi">هضم بی هوازی </li>
              <li className="otherLi"> هضم هوازی </li>
              <li className="otherLi">کمپوست</li>
              <li className="otherLi">تزریق مواد شیمیایی</li>
              <li className="otherLi">آبگیری</li>
              <li className="otherLi">خشک کردن با حرارت</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default urbanWasteWater;
