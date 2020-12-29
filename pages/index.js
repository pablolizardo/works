import Head from 'next/head'
import Header from '../components/Header';
import styles from '../styles/Home.module.css'
const path = require('path');
const fs = require('fs');
const pageExcludes = [ '_app.js', 'api', 'index.js']
export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pablo Lizardo 👨‍💻</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pages={props.pages}/>
      <p>pablo<strong>lizardo</strong></p>
      <main dangerouslySetInnerHTML={{ __html: props.html }} />


    </div>
  )
}

export async function getStaticProps() {

  const { Converter } = require('showdown');
  const converter = new Converter();

  function parseREADME() {
    return new Promise((res) => {
      fs.readFile(path.join(process.cwd(), 'README.md'), (err, data) => {
        const readme = data.toString();
        const html = converter.makeHtml(readme);
        res(html);
      });
    });
  }
  function getPages() {
    return new Promise((res) => {
      fs.readdir(path.join(process.cwd(), 'pages'), (err, data) => {
        const pageFiles = data.filter((f) => {
          return !pageExcludes.filter((ex) => f === ex).pop();
        });

        res(pageFiles.map((p) => p.replace('.js', '')));
      });
    });
  }
  const pages = await getPages();
  const html = await parseREADME();

  return {
    props: { html, pages },
  };
}