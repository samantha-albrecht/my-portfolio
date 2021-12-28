import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/homepage/Hero/Hero'

function Home () {
    return (
    <> 
        <Head>
            <title>Samantha Albrecht | Web Designer + Developer</title>
        </Head>

        <Hero/>

        <Link href="/about">
            <a>About</a>
        </Link>

    </>
    )
}

export default Home
