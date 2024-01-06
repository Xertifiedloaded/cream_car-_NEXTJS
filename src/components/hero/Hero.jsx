"use client";
import classes from "./hero.module.css";
import image1 from "../../assets/images/pic1.jpeg";
import image2 from "../../assets/images/pic2.jpeg";
import image3 from "../../assets/images/pic3.jpg";
import image4 from "../../assets/images/pic5.jpeg";
import image5 from "../../assets/images/pic9.jpg";
import image6 from "../../assets/images/pic8.jpg";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import HomeHero from "./home-hero/HomeHero";
import EstateHero from "./estate-hero/EstateHero";
import AutoMobileHero from "./auto-hero/AutoMobile";
import { UserUseData } from "@/context/DataContext";
export default function Hero() {
  const location = useRouter();
  const { pathname } = location;
  const { current, heroImage } = UserUseData();
  let componentToShow;
  switch (pathname) {
    case "/":
      componentToShow = <HomeHero />;
      break;
    case "/real-estate":
      componentToShow = <EstateHero />;
      break;
    case "/auto-mobile":
      componentToShow = <AutoMobileHero />;
      break;
    default:
      componentToShow = "Not found";
  }

  return (
    <>
      <div className={classes.heroContainer}>
        <Image
          className={classes.heroImage}
          src={heroImage[current]}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <div className={classes.heroContent}>{componentToShow}</div>
      </div>
    </>
  );
}
