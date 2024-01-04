import React from 'react'
import "@/styles/global.css";
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';
import { useRouter } from 'next/router';
import ContextApi from '@/context/ContextApi';

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const isHomePage = router.pathname === '/' || 'real-estate'

    return (
        <>
            <ContextApi>
                {isHomePage ? <Header /> : null}
                <Component {...pageProps} />
                {isHomePage ? <Footer /> : null}
            </ContextApi>
        </>
    )
}
