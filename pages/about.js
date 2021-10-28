import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'


function About () {
    return (
    <> 
        <Head>
            <title>Samantha Albrecht | About</title>
        </Head>

        <Navbar />

         <h1>About page</h1>

        <Link href="/">
            <a>Home</a>
        </Link>

        <Footer />
    </>
    )
}

export default About