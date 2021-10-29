import Layout from '../components/Layout/Layout'
import '../styles.css'

export default function Application({ Component, pageProps }) {
    return (
        <Layout>
        <Component {...pageProps} />
        </Layout>
    )
  }