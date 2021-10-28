import Head from 'next/head'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

export default function Layout({ children }) {
    return (
      <>
        <Head>
            <title>Samantha Albrecht | Web Developer</title>
            <link rel="icon" href=""/>
        </Head>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
}