import styles from './xmb.module.css'

const placeholderData = ['', '', '', '', '']

export default function Xmb({ data, Card }) {
  return (
    <div className={styles.xmb}>
      <div className={styles.container}>
        <div className={styles.row}>
          {data.length
            ? data.map((item) => <Card item={item} key={item.id} />)
            : placeholderData.map((item, i) => <Card item={item} key={i} />)}
        </div>
      </div>
    </div>
  )
}
