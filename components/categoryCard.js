import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { randomColor } from '../helper'

import styles from './categoryCard.module.css'

export default function CategoryCard({ item: category }) {
  const [color, setColor] = useState('')

  useEffect(() => {
    setColor(randomColor())
  }, [])

  return (
    <div className={styles.card}>
      <Link href={`/category/${category.id}`}>
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
              src={category.box_art_url.replace('{width}x{height}', '144x192')}
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
          <p>{category.name}</p>
          <p className={styles.game}>{category.game_name}</p>
        </div>
      </div>
    </div>
  )
}
