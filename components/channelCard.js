import Image from 'next/image'
import Link from 'next/link'

import styles from './channelCard.module.css'

export default function ChannelCard({ item: stream }) {
  return (
    <div className={styles.card}>
      <Link href={`/channel/${stream.user_login}`}>
        <a>
          <div className={styles.image_container}>
            <Image
              alt="thumbnail"
              src={stream.thumbnail_url.replace('{width}x{height}', '256x144')}
              layout="fill"
            />
          </div>
          <div className={styles.metadata}>
            <div className={styles.profile}>
              <figure className={styles.avatar}>
                <Image
                  src={stream.thumbnail_url.replace(
                    '{width}x{height}',
                    '30x30',
                  )}
                  alt={`${stream.user_name} avatar`}
                  layout="fill"
                />
              </figure>

              <div className={styles.profile_description}>
                <p>{stream.title}</p>

                <p className={styles.title}>{stream.user_name}</p>
                <p className={styles.game}>{stream.game_name}</p>
              </div>
            </div>
          </div>{' '}
        </a>
      </Link>
    </div>
  )
}
