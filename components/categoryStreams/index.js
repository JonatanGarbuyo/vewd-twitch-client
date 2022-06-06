import { useEffect, useState } from 'react'
import ChannelCard from '../channelCard'

import styles from './categoryStreams.module.css'

const placeholderData = ['', '', '', '', '', '', '', '']

export default function CategoryStreams({ categoryId }) {
  const [streams, setStreams] = useState([])

  useEffect(() => {
    fetch(`/api/streams?categoryId=${categoryId}`)
      .then((data) => data.json())
      .then(({ data }) => setStreams(data))
  }, [categoryId])

  return (
    <div className={styles.container}>
      <ul className={styles.grid}>
        {streams.length
          ? streams.map((item) => <ChannelCard item={item} key={item.id} />)
          : placeholderData.map((item, i) => (
              <ChannelCard item={item} key={i} />
            ))}
      </ul>
    </div>
  )
}
