import Link from 'next/link'
import Image from 'next/image'

import styles from './directoryNav.module.css'

import gaming from '../public/images/gaming.svg'
import irl from '../public/images/irl.svg'
import music from '../public/images/music.svg'
import esports from '../public/images/esports.svg'
import creative from '../public/images/creative.svg'

const categories = [
  {
    alt: 'Games Icon',
    img: gaming,
    name: 'Games',
    url: '/directory/games',
  },
  {
    alt: 'IRL Icon',
    img: irl,
    name: 'IRL',
    url: '/directory/irl',
  },
  {
    alt: 'Music Icon',
    img: music,
    name: 'Music',
    url: '/directory/music',
  },
  {
    alt: 'Esports Icon',
    img: esports,
    name: 'Esports',
    url: '/directory/esports',
  },
  {
    alt: 'Creative Icon',
    img: creative,
    name: 'Creative',
    url: '/directory/creative',
  },
]

export default function DirectoryNav() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {categories.map(({ alt, img, name, url }) => (
          <div key={name}>
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
        ))}
      </div>
    </div>
  )
}
