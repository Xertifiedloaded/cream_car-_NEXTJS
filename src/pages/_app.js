"use client"
import React, { useEffect } from 'react'
import "@/styles/global.css";
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';
import { useRouter } from 'next/router';
import ContextApi from '@/context/ContextApi';
import DataContext from '@/context/DataContext';
import { AuthProvider } from '@/context/AuthContext';

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const isHomePage = router.pathname

    const ShowHeader = () => {
        if (
            isHomePage === '/' ||
            isHomePage === '/real-estate' ||
            isHomePage === '/auto-mobile'
        ) {
            return <Header />;
        } else {
            return null;
        }
    };
    const ShowFooter = () => {
        if (
            isHomePage === '/' ||
            isHomePage === '/real-estate' ||
            isHomePage === '/auto-mobile'
        ) {
            return <Footer />;
        } else {
            return null;
        }
    };
    const Layout = Component.Layout || EmptyLayout
    const { pathname } = useRouter()
    useEffect(() => {
        window.scrollTo({ top: 0, behaviour: "smooth" })
    }, [pathname])
    return (
        <>
            <DataContext>
                <AuthProvider>
                    <ContextApi>
                        <ShowHeader />
                        <Layout>
                            <div>
                                <Component {...pageProps} />
                            </div>
                        </Layout>
                        <ShowFooter />
                    </ContextApi>
                </AuthProvider>
            </DataContext>
        </>
    )
}
const EmptyLayout = ({ children }) => <>{children}</>