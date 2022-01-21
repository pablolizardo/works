import Head from 'next/head';
import WorkLink from '../components/WorkLink';
import styles from './projects.module.scss';

export default function Home({ works }) {
  // if (!works.items) return 'Error';
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Senior Dev at Aerolab.co | Former Senior Dev && Graphic Designer at Tvfuego.com  | #Nextjs #ReactNative #Laravel #b3d #reactjs #inkscape #tailwindcss #vuejs #godotengine"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.pablolizardo.com/" />
        <meta property="og:title" content="Pablo Lizardo 👨‍💻" />
        <meta
          property="og:description"
          content="Senior Dev at Aerolab.co | Former Senior Dev && Graphic Designer at Tvfuego.com  | #Nextjs #ReactNative #Laravel #b3d #reactjs #inkscape #tailwindcss #vuejs #godotengine"
        />
        <meta property="og:image" content="https://www.pablolizardo.com/images/illustrations/viajero/0000.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.pablolizardo.com/" />
        <meta property="twitter:title" content="Pablo Lizardo 👨‍💻" />
        <meta
          property="twitter:description"
          content="Senior Dev at Aerolab.co | Former Senior Dev && Graphic Designer at Tvfuego.com  | #Nextjs #ReactNative #Laravel #b3d #reactjs #inkscape #tailwindcss #vuejs #godotengine"
        />
        <meta property="twitter:image" content="https://www.pablolizardo.com/images/illustrations/viajero/0000.png"></meta>
      </Head>
      <h1 className={styles.title}>Projects 👨‍💻</h1>
      <ul className={styles.list}>
        {works.map((project, index) => (
          <WorkLink project={project} key={index} />
        ))}
      </ul>
    </div>
  );
}
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});

export const getStaticProps = async (ctx) => {
  const works = await client.getEntries({
    content_type: 'coding',
  });
  const randomWorks = await works.items.sort(() => Math.random() - 0.5);
  return {
    props: {
      works: randomWorks,
    },
  };
};
