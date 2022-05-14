import Head from 'next/head'
import CategoryCard from '../components/categoryCard'

import ChannelCard from '../components/channelCard'
import DirectoryNav from '../components/directoryNav'
import Nav from '../components/nav'
import Xmb from '../components/xmb'
import useTwitch from '../hooks/useTwitch'

import getTopGames from '../lib/api/getTopGames'

import styles from '../styles/Home.module.css'

export default function Home({ topGames }) {
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

          <div className={styles.recomended}>
            <div>
              <p>
                <span>Categories</span> we think you’ll like
              </p>
            </div>
          </div>

          <Xmb data={topGames} Card={CategoryCard} />

          <DirectoryNav />

          <div className={styles.recomended}>
            <div>
              <p>
                Recommended <span>Just Chatting</span> channels
              </p>
            </div>
          </div>
          <Xmb data={streams} Card={ChannelCard} />
        </div>
      </main>
    </>
  )
}

export async function getStaticProps(context) {
  const { data } = await getTopGames()
  return {
    props: { topGames: data },
  }
}
