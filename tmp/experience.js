import React from 'react'
const fs = require('fs')
const { Converter } = require('showdown');
const path = require('path');

function experience({html}) {
    return (
        <div>
            <h1>experience</h1>
            <main dangerouslySetInnerHTML={{ __html : html }} />
        </div>
    )
}

export default experience


export async function getStaticProps() {

    const converter = new Converter();
  
    function parseREADME() {
      return new Promise((res) => {
        fs.readFile(path.join(process.cwd(), '/content/experience.md'), (err, data) => {
          const readme = data.toString();
          const html = converter.makeHtml(readme);
          res(html);
        });
      });
    }
  
    const html = await parseREADME();
  
    return {
      props: { html },
    };
  }