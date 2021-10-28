import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'

export default function Home() {
    return (
        <> 
            <Link href="https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/" >
                <a><h1>👩‍💻 portfolio coming soon...</h1></a>
            </Link>

            <Link href="/about">
                <a>About</a>
            </Link>
        </>
    )
}