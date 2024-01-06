"use client";
import classes from "./header.module.css";
import Image from "next/image";
import logo from "../../../assets/images/logo.webp";
import { useState, useEffect } from "react";
import open from "../../../assets/images/icon-menu.svg";
import close from "../../../assets/images/icon-close-menu.svg";
import Link from "next/link";
import { NavContent } from "@/utils/Nav";
import Sidebar from "@/components/sideBar/SideBar";
import { Button, HeaderButton } from "@/utils/Button";
import Hamburger from "@/utils/Hamburger";
import Icon from "@/utils/Hamburger";
export default function Header() {
  const [visible,setVisble]=useState(true)
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const toggleSideBar = () => {
    setSideBar(!sideBar);
    console.log(sideBar);
  };
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [windowWidth]);
  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1024;
  const isDesktop = windowWidth > 1024;
  return (
    <>
      {(isMobile || isTablet || isDesktop) && (
        <header  className={classes.main}>
          <div className={classes.header}>
            <div className={classes.logo}>
            <Link href="/">
            <Image alt="logo" width={80} src={logo} />
            </Link>
            </div>
            <nav
              className={` ${isMobileMenuOpen ? classes.open : null} && ${
                classes.navMenu
              }`}
            >
              <ul>
                {NavContent.map((nav, index) => (
                  <li onClick={toggleMobileMenu} key={index}>
                    <Link href={nav.path}>
                    {nav.content}
                    </Link>
                  </li>
                ))}
              </ul>
              {isDesktop && (
                <div className={classes.navBtn}>
                  <Link href="/login">
                    <button style={HeaderButton} className={classes.btn}>Login</button>
                  </Link>
                  <Icon onClick={toggleSideBar}/>
                </div>
              )}
            </nav>
            {sideBar && isDesktop && (
              <div
                className={`${sideBar ? classes.translate : ""} && ${
                  classes.sidebar
                }`}
              >
                <Sidebar toggleSideBar={toggleSideBar} SideBar={sideBar} />
              </div>
            )}
            <div className={classes.mobileMenuBtn} onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <Image className={classes.imgBtn} src={close} alt="null" />
              ) : (
                <Image className={classes.imgBtn} src={open} alt="null" />
              )}
            </div>
          </div>
        </header>
      )}
    </>
  );
}
