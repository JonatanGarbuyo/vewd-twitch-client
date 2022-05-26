import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { randomColor } from '../../helper'

import styles from './channelCard.module.css'
import SkeletonChannelCard from './SkeletonChannelCard'

export default function ChannelCard({ item: stream }) {
  const [color, setColor] = useState('')
  const [streamer, setStreamer] = useState(null)

  useEffect(() => {
    setColor(randomColor())
  }, [])

  return (
    <>
      {!stream.thumbnail_url ? (
        <SkeletonChannelCard />
      ) : (
        <div className={styles.card}>
          <Link href={`/channel/${stream.user_login}`}>
            <a className={styles.image_wrapper}>
              <div
                className={styles.left_border_top}
                style={{
                  borderRight: `0.5rem solid var(--color-brand-accent-${color})`,
                }}
              />
              <div
                className={styles.left_border}
                style={{
                  backgroundColor: `var(--color-brand-accent-${color})`,
                }}
              />
              <div className={styles.image_container}>
                <Image
                  alt="thumbnail"
                  src={stream.thumbnail_url.replace(
                    '{width}x{height}',
                    '256x144',
                  )}
                  layout="fill"
                />
              </div>
              <div
                className={styles.bottom_border}
                style={{
                  backgroundColor: `var(--color-brand-accent-${color})`,
                }}
              />
              <div
                className={styles.bottom_border_right}
                style={{
                  width: '0',
                  position: 'absolute',
                  borderTop: `0.5rem solid var(--color-brand-accent-${color})`,
                }}
              />
            </a>
          </Link>

          <div className={styles.metadata}>
            <div className={styles.profile}>
              <figure className={styles.avatar}>
                <Image
                  src={stream.thumbnail_url.replace(
                    '{width}x{height}',
                    '50x50',
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
          </div>
        </div>
      )}
    </>
  )
}
