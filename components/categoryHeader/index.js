import Image from 'next/image'

import styles from './categoryHeader.module.css'

export default function CategoryHeader({ category }) {
  return (
    <>
      <div className={styles.category_header_banner}>
        <div className={styles.container}>
          <div className={styles.image_wrapper}>
            <Image
              alt="category art"
              src={category?.box_art_url.replace('52x72', '144x192')}
              layout="fill"
            />
          </div>
          <div>
            <h1>{category?.name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
