import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import styles from './illustrations.module.scss';

function illustration(props) {
  const [showModal, setShowModal] = useState();
  const handleOpenModal = (filename) => {
    setShowModal(filename);
  };
  const handleCloseModal = () => {
    setShowModal();
  };
  const collections = [...new Set(props.data.items.map((image) => image.fields.collection[0]))];
  return (
    <div>
      <Head>
        <title key="title">Illustrations 👨‍💻</title>
      </Head>
      <h1>Illustrations</h1>
      {showModal && (
        <div id="backdrop" onClick={handleCloseModal}>
          <img src={showModal} className="backdrop__image" />
        </div>
      )}
      {collections.map((collection) => (
        <>
          <h2>{collection}</h2>
          <div className={styles.container}>
            {props.data.items
              .filter((image) => image.fields.collection.includes(collection))
              .map((image, index) => (
                <Image
                  onClick={() => handleOpenModal('https:' + image.fields.image.fields.file.url)}
                  className="illustration"
                  key={image.fields.title}
                  src={'https:' + image.fields.image.fields.file.url}
                  width="128"
                  height="128"
                  layout="intrinsic"
                  objectFit="cover"
                  objectPosition="50% 25%"
                />
              ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default illustration;

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});
export const getStaticProps = async (ctx) => {
  const illustrations = await client.getEntries({
    content_type: 'illustration',
  });
  return {
    props: {
      data: illustrations,
    },
  };
};
