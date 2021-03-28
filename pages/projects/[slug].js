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
  const tags = work.fields.hashtags ? work.fields.hashtags.map(tag => `#${tag} `) : ' #dev #coding'
  return (
    <div>
      <Head>
        <title key="title">{work.fields.title} | Pablo Lizardo 👨‍💻</title>
        <meta name="description" content={work.fields.subtitle} key="description" />
        <meta name="title" content={work.fields.title + ' Pablo Lizardo'} />
        <meta name="description" content={work.fields.subtitle + ' ' + tags} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://pablolizardo.com/projects/${work.fields.slug}`} />
        <meta property="og:title" content={work.fields.title + ' | Pablo Lizardo'} />
        <meta property="og:description" content={work.fields.subtitle + ' ' + tags} />
        <meta property="og:image" content={'https:' + work.fields.image.fields.file.url} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://pablolizardo.com/projects/${work.fields.slug}`} />
        <meta property="twitter:title" content={work.fields.title + ' | Pablo Lizardo'} />
        <meta property="twitter:description" content={work.fields.subtitle + ' ' + tags} />
        <meta property="twitter:image" content={'https:' + work.fields.image.fields.file.url}></meta>
      </Head>
      <h1 className={styles.title}>{work.fields.title}</h1>
      <h3 className={styles.subtitle}>{work.fields.subtitle}</h3>
      <div className={styles.header}>
        <Link href="/">
          <a className={styles.backButton}>←</a>
        </Link>
        <div className={styles.badges}>{work.fields.hashtags && <BadgesList tags={work.fields.hashtags} />}</div>

        <SocialShare
          title={work.fields.title}
          subtitle={work.fields.subtitle || ''}
          description={work.fields.description}
          url={`https://www.pablolizardo.com/projects/${work.fields.slug}`}
          img={'https:' + work.fields.image.fields.file.url}
          tags={work.fields.hashtags ? work.fields.hashtags.map((tag) => tag + ',') : 'dev,coding'}
        />
      </div>
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
              <Image alt={image.fields.title} src={`https:${image.fields.file.url}`} key={image.sys.id} width={200} height={120} objectFit="cover" layout="responsive" />
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
