import HomePage from '@/components/home/HomePage'

import Head from 'next/head'
import React from 'react'

export default function Home() {
    return (
        <>
            <Head>
                <title>Creos</title>
                <meta name="description" content="The Future Workforce" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/" />
            </Head>
            <HomePage />
            
        </>
    )
}
