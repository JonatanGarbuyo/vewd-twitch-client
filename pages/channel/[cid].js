import { useRouter } from 'next/router'
import Nav from '../../components/nav'

import TwitchEmbed from '../../components/twitchEmbed'
import styles from './channels.module.css'

export default function ChannelEmbed() {
  const parent = process.env.APP_CLIENT_DOMAIN

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
