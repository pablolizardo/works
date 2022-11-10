import React from 'react'
const fs = require('fs')
const { Converter } = require('showdown');
const path = require('path');
import Head from 'next/head'

function me({ html, lichess }) {
  return (
    <div>
      <Head>
        <title key='title'>About me 👨‍💻</title>
      </Head>
      <h1>About me 👋</h1>
      <main dangerouslySetInnerHTML={{ __html: html }} />
      <dl>
        <dt>♟ Lichess Blitz Rating</dt>
        <dd><a href='https://lichess.org/@/pablolizardo' target="_blank">{lichess.perfs.blitz.rating}</a></dd>
      </dl>
    </div>
  )
}

export default me


export async function getStaticProps() {
  const lichessURL = 'https://lichess.org/api/user/pablolizardo'
  const lichessAPI = await fetch(lichessURL);
  const lichesJSON = await lichessAPI.json();
  console.log(lichesJSON)


  const converter = new Converter();
  function parseREADME() {
    return new Promise((res) => {
      fs.readFile(path.join(process.cwd(), '/content/me.md'), (err, data) => {
        const readme = data.toString();
        const html = converter.makeHtml(readme);
        res(html);
      });
    });
  }

  const html = await parseREADME();

  return {
    props: { html, lichess: lichesJSON },
  };
}