import Layout from '../components/Layout/Layout'
import '../styles/styles.scss'

export default function Application({ Component, pageProps }) {
    return (
        <Layout>
        <Component {...pageProps} />
        </Layout>
    )
  }