import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Aside from './Aside'
import Footer from './Footer'
import Header from './Header'
import HeaderFixed from './HeaderFixed'

function Layout({ children }) {
  const [showHeaderFixed, setShowHeaderFixed] = useState(false);
  const onScroll = () => {
    let el = document.getElementById('header-fixed');
    if (window.pageYOffset > 150) {
      setShowHeaderFixed(true);
    } else {
      if (el) {
        el.classList.remove('slideIn');
        el.classList.add('slideOut');
        setTimeout(() => {
          setShowHeaderFixed(false);
        }, 300);
      }
    }
  };
    useEffect(() => {
        window.addEventListener('scroll', onScroll)
        return () => { window.removeEventListener('scroll', onScroll) }
    }, [])
    
    return (
      <section id="root">
        <Head>
          <title>Pablo Lizardo 👨‍💻</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {showHeaderFixed && <HeaderFixed />}
        <Header />
        <Aside />
        <main>{children}</main>
        <Footer />
      </section>
    );
}

export default Layout
