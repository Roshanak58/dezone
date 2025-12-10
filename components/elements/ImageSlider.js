import Slider from "react-slick";
import Image from "next/image";

export default function ImageSlider() {
  const settings = {
    dots: true, // نقاط پایین اسلایدر
    infinite: true, // چرخش بی‌نهایت
    speed: 500, // سرعت انیمیشن
    slidesToShow: 1, // نمایش یک اسلاید
    slidesToScroll: 1, // حرکت یک اسلاید در هر بار
    autoplay: true, // پخش خودکار
    autoplaySpeed: 3000, // هر ۳ ثانیه یکبار
  };

  const images = [
    "/images/ProjectsPic/dezon1.jpg",
    "/images/ProjectsPic/dezon2.jpg",
    "/images/ProjectsPic/dezon3.jpg",
    "/images/ProjectsPic/dezon4.jpg",
    "/images/ProjectsPic/dezon5.jpg",
    "/images/ProjectsPic/dezon6.jpg",
  ];

  return (
    <div className="slider-container">
      <div style={{ maxWidth: "1600px", margin: "0 auto" }} className="slider">
        <Slider {...settings}>
          {images.map((src, i) => (
            <div key={i}>
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                width={1600}
                height={400}
                style={{ borderRadius: "10px", objectFit: "cover" }}
              />
            </div>
          ))}
        </Slider>
        <div className="wave">
          <Image
            src="/images/ProjectsPic/wave11.png"
            alt="wave"
            width={1200}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
