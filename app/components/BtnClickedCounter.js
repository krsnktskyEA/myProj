import React from 'react'
import styles from '../static/EntryPage.css'

const BtnClickedCounter = ({ prop1 }) => {
  return (
    <div className={styles.btnClickedCounter}>
      <h2>BtnClickedCounter: {prop1}</h2>
    </div>
  )
}

export default BtnClickedCounter
