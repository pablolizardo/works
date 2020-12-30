import Head from 'next/head'
import React from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'

function Layout({ children }) {
    return (
        <section id='root'>
            <Head>
                <title>Pablo Lizardo 👨‍💻</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Aside />
            <main>{children}</main>
            <Footer />
        </section>
    )
}

export default Layout
