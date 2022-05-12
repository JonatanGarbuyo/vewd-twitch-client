import { useRouter } from 'next/router'
import Nav from '../../components/nav'

import TwitchEmbed from '../../components/twitchEmbed'
import styles from './channels.module.css'

export default function ChannelEmbed({ parent }) {
  console.log('PARENT', parent)
  const router = useRouter()
  const { cid } = router.query
  console.log('CID: ', cid)

  return (
    <div className={styles.channel}>
      <Nav />
      <div className={styles.player}>
        {cid ? <TwitchEmbed channel={cid} parent={parent} /> : null}
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {
      parent: process.env.APP_CLIENT_DOMAIN,
    },
  }
}
