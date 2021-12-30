import Head from 'next/head'
import Link from 'next/link'
import About from '../components/homepage/About/About'
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
        <About/>
    </>
    )
}

export default Home
