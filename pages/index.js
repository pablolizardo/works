import WorkLink from '../components/WorkLink';
import styles from './projects.module.scss';

export default function Home(props) {
  if (!props.data.items) return 'Error';
  return (
    <div>
      <h1>Projects 👨‍💻</h1>
      <ul className={styles.list}>
        {/* <img src="/open.png" width={120} className={styles.open} /> */}
        {props.data.items.map((project, index) => (
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
export const getServerSideProps = async (ctx) => {
  const works = await client.getEntries({
    content_type: 'coding',
  });
  return {
    props: {
      data: works,
    },
  };
};
