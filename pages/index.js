import Head from 'next/head'
import CategoryCard from '../components/categoryCard'

import ChannelCard from '../components/channelCard'
import DirectoryCard from '../components/directoryCard'
import Nav from '../components/nav'
import Xmb from '../components/xmb'
import useTwitch from '../hooks/useTwitch'

import getTopGames from '../lib/api/getTopGames'

import styles from '../styles/Home.module.css'

export default function Home({ topGames }) {
  const { streams, directories } = useTwitch()

  return (
    <>
      <Head>
        <title>Vewd Twitch client</title>
        <meta name="viewport" content="maximum-scale=5 width=1280"></meta>
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

          <Xmb data={directories} Card={DirectoryCard} />

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
