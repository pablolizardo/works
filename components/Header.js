import React from 'react';
import Link from 'next/link';
import links from '../content/links';
import styles from './Header.module.scss';
function Header() {
  return (
    <header className={styles.container}>
      {links.map((link, index) => (
        <Link key={index} href={link.path}>
          {link.title}
        </Link>
      ))}
    </header>
  );
}

export default Header;
