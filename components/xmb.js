import styles from './xmb.module.css'

const placeholderData = [
  {
    id: '321',
    user_id: '',
    user_login: '',
    user_name: '',
    game_name: '',
    title: '',
    thumbnail_url: '/',
    box_art_url: '/',
  },
]

export default function Xmb({ data, Card }) {
  return (
    <div className={styles.xmb}>
      <div className={styles.row}>
        {data.length
          ? data.map((item) => <Card item={item} key={item.id} />)
          : placeholderData.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  )
}
