import '../styles/globals.css'
import Layouts from '../components/Layout'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>)
}
