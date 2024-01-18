"use client"
import React, { createContext, useContext, useEffect, useState, useRef } from 'react'
export const UserContext = createContext()
export default function ContextApi({ children }) {
    const [loading, setLoading] = useState(true);
    const CreateUserContext = UserContext.Provider
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 5000);
    }, [loading]);
    // header context//
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setIsSidebarOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    const handleSidebarClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
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
    // header context//
    const value = {
        loading,
        setLoading,
        toggleMobileMenu,
        isMobile,
        isTablet,
        isDesktop,
        isMobileMenuOpen,
        setMobileMenuOpen,
        isSidebarOpen,
        setIsSidebarOpen,
        handleSidebarClick,
        sidebarRef
    }
    return (
        <>
            <CreateUserContext value={value}>
                {children}
            </CreateUserContext>
        </>
    )
}
export const useUserContext = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("this context is not inside usecontext")
    }
    return context
}