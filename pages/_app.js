import '../styles/globals.css'
import Layout from '../components/Layout.js';

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>)
}
