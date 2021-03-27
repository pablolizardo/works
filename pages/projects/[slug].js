import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import BadgesList from '../../components/BadgesList';
import SocialShare from '../../components/SocialShare';
import styles from './work.module.scss';
const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
});
const Project = (work) => {
  return (
    <div>
      <Head>
        <title key="title">{work.fields.title} 👨‍💻</title>
      </Head>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.backButton}>←</a>
        </Link>
        <div className={styles.badges}>
          {work.fields.hashtags && <BadgesList tags={work.fields.hashtags} />}
        </div>

        <SocialShare
          title={work.fields.title}
          subtitle={work.fields.subtitle || ''}
          description={work.fields.description}
          url={`https://www.pablolizardo.com.ar/works/${work.fields.slug}`}
          img={'https:' + work.fields.image.fields.file.url}
        />
      </div>
      <h1 className="p-0 m-0">{work.fields.title}</h1>
      <h3 className="text-muted p-0 m-0">{work.fields.subtitle}</h3>
      <p className="p-0" dangerouslySetInnerHTML={{ __html: documentToHtmlString(work.fields.description) }} />

      <div className={styles.featuredImage}>
        {work.fields.image && <Image alt={work.fields.title} src={`https:${work.fields.image.fields.file.url}`} width={600} height={330} layout="responsive" objectFit="contain"></Image>}
      </div>

      <p>
        <a href={work.fields.github_repo}>{work.fields.github_repo}</a>
      </p>
      <div className={styles.images}>
        {work.fields.images &&
          work.fields.images.map((image) => (
            <div className={styles.image}>
              <Image alt={image.fields.title} src={`https:${image.fields.file.url}`} key={image.sys.id} width={200} height={160} objectFit="contain" layout='responsive'/>
            </div>
          ))}
      </div>
    </div>
  );
};

export const getStaticPaths = async (ctx) => {

  const works = await client.getEntries({
    content_type: 'coding',
  });
  return {
    paths: works.items.map((project) => {
      return {
        params: {
          slug: project.fields.slug,
        },
      };
    }),
    fallback: false,
  };
};

export async function getStaticProps({ params }) {
  const works = await client.getEntries({
    content_type: 'coding',
  });
  return {
    props: works.items.find((work) => work.fields.slug === params.slug),
  };
}

export default Project;
