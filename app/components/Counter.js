import React from 'react'
import styles from '../static/EntryPage.css'

const Counter = ({ prop2 }) => {
  return (
    <div className={styles.counter}>
      <h2>Counter: {prop2}</h2>
    </div>
  )
}

export default Counter
