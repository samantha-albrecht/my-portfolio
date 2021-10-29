import Head from 'next/head'
import Link from 'next/link'

function Home () {
    return (
    <> 
        <Head>
            <title>Samantha Albrecht | Web Developer</title>
        </Head>

        <a href="https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/" >
            <h1>👩‍💻 portfolio coming soon...</h1>
        </a>

        <Link href="/about">
            <a>About</a>
        </Link>

    </>
    )
}

export default Home
