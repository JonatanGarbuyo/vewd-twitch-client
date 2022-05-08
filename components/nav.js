import Image from 'next/image'
import styles from './nav.module.css'

import logo from '../public/images/TwitchGlitchPurple.svg'
import magnifyingGlass from '../public/icons/magnifyingGlass.svg'
import userIcon from '../public/icons/user.svg'
import Link from 'next/link'

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div>
          <figure>
            <Link href={'/'}>
              <a>
                <Image src={logo} alt="twitch logo" width={24} height={28} />
              </a>
            </Link>
          </figure>
          <p>Browse</p>
        </div>

        <form>
          <input placeholder="Search"></input>
          <button className={styles.search}>
            <Image src={magnifyingGlass} alt="magnifiying glass icon" />
          </button>
        </form>

        <ul className={styles.session}>
          <li>
            <button>Log in</button>
          </li>
          <li>
            <button>Sign Up</button>
          </li>
          <li>
            <button>
              <Image
                src={userIcon}
                alt="user icon"
                width="24px"
                height="24px"
              />
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}
