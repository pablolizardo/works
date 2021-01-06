import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import HeaderFixed from './HeaderFixed'

function Layout({ children }) {
    const [scrolled, setScrolled] = useState(false)

    const onScroll = () => setScrolled(window.pageYOffset > 150)
    
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => { window.removeEventListener('scroll', onScroll) }
    }, [])
    
    return (
        <section id='root'>
            <Head>
                <title>Pablo Lizardo 👨‍💻</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            { scrolled && <HeaderFixed /> }
            <Header />
            <Aside />
            <main>{children}</main>
            <Footer />
        </section>
    )
}

export default Layout
