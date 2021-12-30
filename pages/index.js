import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/homepage/Hero/Hero'
import Work from '../components/homepage/Work/Work'

function Home () {
    return (
    <> 
        <Head>
            <title>Samantha Albrecht | Web Designer + Developer</title>
        </Head>

        <Hero/>
        <Work/>

        <Link href="/about">
            <a>About</a>
        </Link>

    </>
    )
}

export default Home
