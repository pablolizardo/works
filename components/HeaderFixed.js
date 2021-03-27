import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import links from '../content/links';
import styles from './HeaderFixed.module.scss';

function HeaderFixed() {
  const headerRef = useRef();
  useEffect(() => {
    headerRef.current.className = styles.container + ' slideIn';
  }, []);
  return (
    <div ref={headerRef} id="header-fixed">
      <Link href="/" passHref>
        <a className={styles.name}>
          <img src="/me.png" alt="Picture of Pablo Lizardo" className={styles.profile} width={32} height={32} />
          <span>Pablo Lizardo</span>
        </a>
      </Link>

      {links.map((link, index) => (
        <Link key={index} href={link.path} passHref>
          <a>{link.title}</a>
        </Link>
      ))}
    </div>
  );
}

export default HeaderFixed;
