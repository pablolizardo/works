import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './design.module.scss';

function Design({ designs }) {
  const [showModal, setShowModal] = useState();
  const handleOpenModal = (filename) => {
    setShowModal(filename);
  };
  const handleCloseModal = () => {
    setShowModal();
  };
  return (
    <div>
      <Head>
        <title key="title">Design 👨‍💻</title>
      </Head>
      <h1>Design</h1>
      {showModal && (
        <div id="backdrop" onClick={handleCloseModal}>
          <img src={showModal} className="backdrop__image" />
        </div>
      )}
      <div className={styles.container}>
        {designs.items.map((image, index) => (
          <Image
            onClick={() => handleOpenModal('https:' + image.fields.featured.fields.file.url)}
            className="illustration"
            key={image.fields.title}
            src={'https:' + image.fields.featured.fields.file.url}
            width="256"
            height="128"
            objectFit="cover"
          />
        ))}
      </div>
    </div>
  );
}

export default Design;

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});
export const getStaticProps = async (ctx) => {
  const designs = await client.getEntries({
    content_type: 'design',
  });
  return {
    props: {
      designs,
    },
  };
};
