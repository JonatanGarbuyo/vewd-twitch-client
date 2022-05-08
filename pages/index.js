import Head from 'next/head'

import ChannelCard from '../components/channelCard'
import Nav from '../components/nav'
import Xmb from '../components/xmb'
import useTwitch from '../hooks/useTwitch'

import styles from '../styles/Home.module.css'

export default function Home() {
  const { streams } = useTwitch()

  return (
    <>
      <Head>
        <title>Vewd Twitch client</title>
        <meta
          name="Vewd Twitch client"
          content="A Twitch client for smart TVs with Vewd systems"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="maximum-scale=1"></meta>
      </Head>

      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.recomended}>
            <div>
              <p>Live channels we think you’ll like</p>
            </div>
          </div>
          <Xmb data={streams} Card={ChannelCard} />
        </div>
      </main>
    </>
  )
}
