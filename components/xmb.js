import styles from './xmb.module.css'

export default function Xmb({ data, Card }) {
  return (
    <div className={styles.xmb}>
      <div className={styles.row}>
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}
