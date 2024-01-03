import React from 'react'
import "@/styles/global.css";
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    )
}
