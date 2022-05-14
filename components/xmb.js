import styles from './xmb.module.css'

import placeholderImg from '../public/images/placeholder.png'

const placeholderData = [
  {
    id: '1',
    user_id: '',
    user_login: '',
    user_name: '',
    game_name: '',
    title: '',
  },
  {
    id: '2',
    user_id: '',
    user_login: '',
    user_name: '',
    game_name: '',
    title: '',
  },
  {
    id: '3',
    user_id: '',
    user_login: '',
    user_name: '',
    game_name: '',
    title: '',
  },
  {
    id: '4',
    user_id: '',
    user_login: '',
    user_name: '',
    game_name: '',
    title: '',
  },
  {
    id: '5',
    user_id: '',
    user_login: '',
    user_name: '',
    game_name: '',
    title: '',
  },
]

export default function Xmb({ data, Card }) {
  return (
    <div className={styles.xmb}>
      <div className={styles.container}>
        <div className={styles.row}>
          {data.length
            ? data.map((item) => <Card item={item} key={item.id} />)
            : placeholderData.map((item) => <Card item={item} key={item.id} />)}
        </div>
      </div>
    </div>
  )
}
