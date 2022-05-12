import Head from 'next/head'
import { useRouter } from 'next/router'
import Nav from '../../components/nav'

import TwitchEmbed from '../../components/twitchEmbed'
import styles from './channels.module.css'

export default function ChannelEmbed({ parent }) {
  const router = useRouter()
  const { cid } = router.query

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
      <div className={styles.channel}>
        <Nav />
        <div className={styles.player}>
          {cid ? <TwitchEmbed channel={cid} parent={parent} /> : null}
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      parent: process.env.APP_CLIENT_DOMAIN,
    },
  }
}
