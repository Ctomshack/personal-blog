import React from 'react'
import styles from '../styles/Footer.module.css'
import Socials from './Socials';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
        <div className={styles.footerElement}>{`Designed & Developed by Chris Tomshack`}</div>
        <Socials  className={styles.footerElement}/>
    </div>
  )
}

export default Footer