import Head from 'next/head'
import About from '../components/homepage/About/About'
import Books from '../components/homepage/Books/Books'
import Experience from '../components/homepage/Experience/Experience'
import Hero from '../components/homepage/Hero/Hero'
import Process from '../components/homepage/Process/Process'
import Work from '../components/homepage/Work/Work'

function Home() {
    return (
    <> 
        <Head>
            <title>Samantha Albrecht | Web Designer + Developer</title>
            <meta name="robots" content="noindex" />
            <meta name="description" content="Hi, I'm Samantha a designer, developer, creative problem solver. I design and build web experiences that convert." />
            <link rel="alternate" hrefLang="en" href="https://www.samanthaalbrecht.com" />
            <link rel="canonical" href="https://www.samanthaalbrecht.com" />
        </Head>

        <Hero/>
        <Work/>
        <Process/>
        <Experience/>
        <Books/>
        <About/>
    </>
    )
}

export default Home
