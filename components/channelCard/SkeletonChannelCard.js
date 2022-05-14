import styles from './channelCard.module.css'

export default function SkeletonChannelCard() {
  return (
    <div className={styles.card}>
      <div>
        <div className={styles.image_container}>
          <div className={styles.image_placeholder} />
        </div>
      </div>

      <div className={styles.metadata}>
        <div className={styles.profile}>
          <figure className={styles.avatar}>
            <div className={styles.image_placeholder} />
          </figure>

          <div className={styles.profile_description}>
            <div className={styles.title_placeholder} />

            <div className={styles.name_placeholder} />
            <div className={styles.name_placeholder} />
          </div>
        </div>
      </div>
    </div>
  )
}
