"use client";

import { useCallback, useEffect, useState } from "react";

import { PictureData as images } from "../../constants/PicData";
import styles from "./ProjectsSlider.module.css"; 


function ProjectsSlider() {
  

 
 const [index, setIndex] = useState(0);
  const [fadeOutIndex, setFadeOutIndex] = useState(null);
  const [fadeInIndex, setFadeInIndex] = useState(null);

  const total = images.length;

  const getVisibleImages = () => {
    return [
      images[index % total],
      images[(index + 1) % total],
      images[(index + 2) % total],
    ];
  };

  useEffect(() => {
    const interval = setInterval(() => {
      // عکس اول → باید fadeOut شود
      setFadeOutIndex(0);

      setTimeout(() => {
        setIndex((prev) => prev + 1);

        // عکس جدید (سمت راست) → fadeIn
        setFadeInIndex(2);

        setTimeout(() => {
          // پاک کردن حالت‌ها
          setFadeOutIndex(null);
          setFadeInIndex(null);
        }, 500);
      }, 500);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const visible = getVisibleImages();

  return (
    <div className={styles.container}>
      {visible.map((img, i) => (
        <div
          key={img.id}
          className={`${styles.item}
             ${fadeOutIndex === i ? styles.fadeOut : ""}
             ${fadeInIndex === i ? styles.fadeIn : ""}
           `}
        >
         
          <img src={img.pic} alt={img.name} />
          <p>{img.name}</p>
        </div>
      ))}
    </div>
  );
}
export default ProjectsSlider;