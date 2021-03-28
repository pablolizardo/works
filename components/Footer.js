import React from 'react'
import Link from 'next/link'
import styles from './Footes.module.scss';
function Footer() {
    return (
      <footer className={styles.container}>
        created with ♥ by pablo <strong>lizardo</strong>
        <br />
        <small className="text-muted">
          and powered by <a href="https://www.nextjs.org">@nextjs</a>
        </small>
      </footer>
    );
}

export default Footer

