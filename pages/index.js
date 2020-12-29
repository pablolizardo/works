const path = require('path');
const fs = require('fs');
export default function Home(props) {
  return (
    <div>
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

  const html = await parseREADME();

  return {
    props: { html },
  };
}