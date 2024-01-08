"use client"
import React, { useEffect } from 'react'
import "@/styles/global.css";
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';
import { useRouter } from 'next/router';
import ContextApi from '@/context/ContextApi';
import DataContext from '@/context/DataContext';

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const isHomePage = router.pathname
    const HomePage = isHomePage === '/' ||
        isHomePage === "/real-estate" ||
        isHomePage === '/auto-mobile'
    const Layout = Component.Layout || EmptyLayout
    const { pathname } = useRouter()
    useEffect(() => {
        window.scrollTo({ top: 0, behaviour: "smooth" })
    }, [pathname])
    console.log(pathname)
    return (
        <>
            <DataContext>
                <ContextApi>
                    {HomePage ? <Header /> : null}
                    <Layout>
                        <div>
                            <Component {...pageProps} />
                        </div>
                    </Layout>
                    {HomePage ? <Footer /> : null}
                </ContextApi>
            </DataContext>
        </>
    )
}
const EmptyLayout = ({ children }) => <>{children}</>