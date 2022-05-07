import Head from 'next/head'
import Nav from '../components/nav'
import Xmb from '../components/xmb'

import styles from '../styles/Home.module.css'

export default function Home({ streams }) {
  return (
    <>
      <Head>
        <title>Vewd Twitch client</title>
        <meta
          name="Vewd Twitch client"
          content="A Twitch client for smart TVs with Vewd systems"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <Xmb />
      </main>
    </>
  )
}
