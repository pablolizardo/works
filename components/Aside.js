import React from 'react';
import Image from 'next/image';
import SocialMediaLinks from './SocialMediaLinks';
import styles from './Aside.module.scss';
import BadgesList from './BadgesList';
function Aside() {
  return (
    <aside className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src="/me.png" alt="Picture of Pablo Lizardo" width={180} height={180} className={styles.foto} />
        </div>
        <h2 className={styles.title}>
          {/* <img src="/arrow.png" height={120} className={styles.arrow} /> */}
          Pablo Lizardo
        </h2>
        <div className={styles.social}>
          <SocialMediaLinks />
        </div>
        <p className={styles.paragraph}>
          I&apos;m Pablo from 🇦🇷 Argentina, and I do content on Design and Development. I really enjoy learning languages and frameworks like React and React Native, as well as work in Laravel. I also
          enjoy wireframing, <abbr title="User Interface">UI</abbr>, <abbr title="User Experience">UX</abbr>, and design in general.
        </p>
      </div>
      <div className={styles.badges}>

        <BadgesList tags={['Game', 'Backend', '3D', 'CSS Arch', 'FrontEnd']} />
      </div>
    </aside>
  );
}

export default Aside;
