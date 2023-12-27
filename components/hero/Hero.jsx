"use client"
import classes from './hero.module.css'
import image1 from "../../public/images/pic1.jpeg";
import image2 from "../../public/images/pic2.jpeg";
import image3 from "../../public/images/pic3.jpg";
import image4 from "../../public/images/pic5.jpeg";
import image5 from "../../public/images/pic9.jpg";
import image6 from "../../public/images/pic8.jpg";
import { useState, useEffect } from "react";

export default function Hero() {
  const images = [image6, image1, image2, image3, image4, image5, image6];
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      
      setCurrent((prevImage) => (prevImage + 1) % images.length);
    }, 7000);
    return () => {
      clearInterval(interval);
    };
  }, [images.length]);
  const transitionStyles = {
    transition: "0.4s ease-in",
  };
  return (
    <>

        <section
          className={classes.main}
          style={{
            ...transitionStyles,
            backgroundImage: `url(${images[current].src})`,
          }}
        >
          <div className={classes.content}>
            <div className={classes.heroContent}>
              <h1>CREAM</h1>
              <div className={classes.span}></div>
            </div>
            <p>The intelligent Market space</p>
            <div className={classes.btn}>
              <button>Explore</button>
              <button>Download App</button>
            </div>
          </div>
        </section>

    </>
  );
}
