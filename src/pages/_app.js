import React from 'react'
import "@/styles/global.css";
import Header from '@/components/ui/header/Header';
import Footer from '@/components/ui/footer/Footer';
import { useRouter } from 'next/router';
import ContextApi from '@/context/ContextApi';

export default function App({ Component, pageProps }) {
    const router = useRouter()
    const isHomePage = router.pathname
    const HomePage = isHomePage === '/' ||
        isHomePage === "/real-estate" ||
        isHomePage === '/auto-mobile'
    const Layout = Component.Layout || EmptyLayout

    return (
        <>
            <ContextApi>
                {HomePage ? <Header /> : null}
                <Layout>
                    <div>
                        <Component {...pageProps} />
                    </div>
                </Layout>
                {HomePage ? <Footer /> : null}
            </ContextApi>
        </>
    )
}
const EmptyLayout = ({ children }) => <>{children}</>