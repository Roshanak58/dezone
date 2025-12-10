"use client";

import { useState, useEffect } from "react";

export default function NewsSlider({ items }) {
  const itemHeight = 50;     // ارتفاع هر خبر
  const visibleCount = 2;     // تعداد قابل‌نمایش
  const intervalTime = 3000;  // زمان اسکرول خودکار (۳ ثانیه)

  const [index, setIndex] = useState(0);

  // --- Auto Scroll ---
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        if (prev < items.length - visibleCount) {
          return prev + 1;
        }
        return 0; // برگشت به اول
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [items.length]);

  return (
    <div
      style={{
        width: "300px",
        height: `${itemHeight * visibleCount}px`,
        overflow: "hidden",
        border: "1px",
        position: "relative",
      }}
    >
      <div
        style={{
          transition: "0.6s ease",
          transform: `translateY(-${index * itemHeight}px)`,
        }}
      >
        {items.map((news, i) => (
          <div
            key={i}
            style={{
              height: `${itemHeight}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderBottom: "1px solid #ccc",
            //   background: "#fafafa",
            }}
          >
            {news}
          </div>
        ))}
      </div>
    </div>
  );
}
