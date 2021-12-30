import Head from 'next/head'
import Link from 'next/link'
import About from '../components/homepage/About/About'
import Experience from '../components/homepage/Experience/Experience'
import Hero from '../components/homepage/Hero/Hero'
import Process from '../components/homepage/Process/Process'
import Work from '../components/homepage/Work/Work'

function Home () {
    return (
    <> 
        <Head>
            <title>Samantha Albrecht | Web Designer + Developer</title>
        </Head>

        <Hero/>
        <Work/>
        <Process/>
        <Experience/>
        <About/>
    </>
    )
}

export default Home
