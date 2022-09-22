import React from 'react'
import styles from '../styles/Home.module.css'
import GraceShopper from './projects/GraceShopper'
import SwoopDeck from './projects/SwoopDeck'


const WorkSection = () => {
  return (
    <div className={styles.workContainer}>
        <div className={styles.workSectionTitle}>Work</div>
        <div className={styles.projectContainer}>
            <SwoopDeck />
            <GraceShopper />
        </div>
    </div>
  )
}

export default WorkSection