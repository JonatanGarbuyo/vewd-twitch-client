import Link from 'next/link'
import Image from 'next/image'

import styles from './directoryCard.module.css'

export default function DirectoryCard({ item }) {
  const { alt, img, name, url } = item
  return (
    <div className={styles.container}>
      <Link href={url}>
        <a>
          <div className={styles.category}>
            <div>
              <p>{name}</p>
            </div>
            <div>
              <Image alt={alt} width={65} height={65} src={img} />
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}
