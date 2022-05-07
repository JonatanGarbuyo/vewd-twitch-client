import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './nav.module.css'

import logo from '../public/images/TwitchGlitchPurple.svg'
import magnifyingGlass from '../public/icons/magnifyingGlass.svg'
import userIcon from '../public/icons/user.svg'
import Link from 'next/link'

export default function Nav() {
  const router = useRouter()

  return (
    <nav className={styles.nav}>
      <div>
        <figure>
          <Link href={'/'}>
            <a>
              <Image src={logo} alt="twitch logo" width={24} height={28} />
            </a>
          </Link>
        </figure>
        <p>Explorar</p>
      </div>

      <div>
        <input placeholder="Buscar"></input>
        <button className={styles.search}>
          <Image src={magnifyingGlass} alt="magnifiying glass icon" />
        </button>
      </div>

      <div className={styles.session}>
        <button className={styles.login}>Login</button>
        <button className={styles.register}>Register</button>
        <button className={styles.user}>
          <Image src={userIcon} alt="user icon" />
        </button>
      </div>
    </nav>
  )
}
