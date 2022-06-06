import { useCallback, useEffect, useState } from 'react'

import styles from './xmb.module.css'

const placeholderData = ['', '', '', '', '']

export default function Xmb({ data, Card }) {
  // const listener = (e) => {
  //   if (e.keyCode == 39) {
  //     e.preventDefault()
  //     const next =
  //       e.srcElement.parentElement.nextElementSibling?.firstElementChild
  //     next && next.parentElement && next.focus()
  //   }

  //   if (e.keyCode == 37) {
  //     e.preventDefault()
  //     const prev =
  //       e.srcElement.parentElement.previousElementSibling?.firstElementChild
  //     prev && prev.parentElement && prev.focus()
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', listener)

  //   // return () => {
  //   //   document.removeEventListener('keydown', listener)
  //   // }
  // }, [])

  return (
    <div className={styles.xmb}>
      <div className={styles.container}>
        <ul className={styles.row}>
          {data.length
            ? data.map((item) => <Card item={item} key={item.id} />)
            : placeholderData.map((item, i) => <Card item={item} key={i} />)}
        </ul>
      </div>
    </div>
  )
}
