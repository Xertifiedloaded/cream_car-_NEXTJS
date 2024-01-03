import ContextApi from "@/context/ContextApi";
import { Head, Html, NextScript, Main } from "next/document";
export default function RootLayout() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <ContextApi>
                    <Main />
                    <NextScript />
                </ContextApi>
            </body>
        </Html>
    )
}