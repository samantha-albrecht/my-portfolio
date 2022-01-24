import Head from 'next/head'
import Link from 'next/link'

function About () {
    return (
    <> 
        <Head>
            <title>Samantha Albrecht | About</title>
        </Head>

         <h1>About page</h1>

        <Link href="/">
            <a>Home</a>
        </Link>

    </>
    )
}

export default About