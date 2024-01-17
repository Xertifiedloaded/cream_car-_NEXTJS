"use client";
import classes from "./header.module.css";
import Image from "next/image";
import logo from "../../../assets/images/logo.webp";
import open from "../../../assets/images/icon-menu.svg";
import close from "../../../assets/images/icon-close-menu.svg";
import Link from "next/link";
import { NavContent } from "@/utils/Nav";
import Sidebar from "@/components/sideBar/SideBar";
import { HeaderButton } from "@/utils/Button";
import Icon from "@/utils/Hamburger";
import { useUserContext } from "@/context/ContextApi";
import Overlay from "@/components/modal/Modal";
export default function Header() {
  const {
    toggleSideBar,
    toggleMobileMenu,
    isMobile,
    isTablet,
    isDesktop,
    sideBar,
    isMobileMenuOpen,
    setSideBar
  } = useUserContext();
  return (
    <>
      {(isMobile || isTablet || isDesktop) && (
        <header className={classes.main}>
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
                    <Link href={nav.path}>{nav.content}</Link>
                  </li>
                ))}
              </ul>
              {isDesktop && (
                <div className={classes.navBtn}>
                  <Link href="/login">
                    <button style={HeaderButton} className={classes.btn}>
                      Login
                    </button>
                  </Link>
                  <Icon   onClick={() => setSideBar(true)}/>
                </div>
              )}
            </nav>
            {sideBar && isDesktop && (
              <div
                // className={`${sideBar ? classes.translate : ""} && ${
                //   classes.sidebar
                // }`}
                // onClick={toggleSideBar}
                className={`${classes.overlay} ${sideBar ? classes.open : ""}`}
              >
                {<Overlay sideBar={sideBar} setSideBar={setSideBar} toggleSideBar={toggleSideBar} />}

                {/* <Sidebar toggleSideBar={toggleSideBar} SideBar={sideBar} /> */}
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
