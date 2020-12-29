import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
    return (
        <section id='root' >
            <Head>
                <title>Pablo Lizardo 👨‍💻</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </section>
    )
}

export default Layout
