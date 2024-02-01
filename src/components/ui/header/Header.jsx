
"use client";
import classes from "./header.module.css";
import React, { useState, useEffect, useRef } from "react";
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
import { useAuth } from "@/context/AuthContext";

export default function Header({ children }) {
  const {
    toggleMobileMenu,
    isMobile,
    isTablet,
    isDesktop,
    isMobileMenuOpen,
    isSidebarOpen,
    handleSidebarClick,
    sidebarRef,
  } = useUserContext();

  const { logout, user, isLoggedIn } = useAuth();

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
              <div className={classes.navBtn}>
                {isDesktop && isLoggedIn && (
                  <Link href="/login">
                    <button onClick={logout} style={HeaderButton} className={classes.btn}>
                      Logout
                    </button>
                  </Link>
                )}
                {isDesktop && !isLoggedIn && (
                  <Link href="/login">
                    <button style={HeaderButton} className={classes.btn}>
                      Login
                    </button>
                  </Link>
                )}
                {isMobile && (
                  <Link href="/signup">
                    <button style={HeaderButton} className={classes.btn}>
                      Signup
                    </button>
                  </Link>
                )}
                {isDesktop && (
                  <Icon onClick={handleSidebarClick} />
                )}
              </div>
            </nav>

            {isSidebarOpen && (
              <div
                ref={sidebarRef}
                style={{
                  transform: isSidebarOpen
                    ? "translateX(0)"
                    : "translateX(-100%)",
                }}
                className={classes.sidebar}
              >
                <Sidebar handleSidebarClick={handleSidebarClick} />
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
