import Layout from '../components/Layout'
import '../styles/main.scss'
import '../styles/mediaquery.scss'

function MyApp({ Component, pageProps }) {
  return <Layout>
            <Component {...pageProps} />
          </Layout>
}

export default MyApp

