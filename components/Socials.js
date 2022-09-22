import React from 'react';
import styles from '../styles/Socials.module.css';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import Link from 'next/link';

const Socials = () => {
  return (
    <div className={styles.container}>
        <Link href='https://www.linkedin.com/in/christomshack/'>
        <FaLinkedinIn size={22} className={styles.icon}/>
        </Link>
        <Link href='https://github.com/Ctomshack'>
        <FaGithub size={22} className={styles.icon}/>
        </Link>
        <Link href='https://www.instagram.com/christomshack_/'>
        <FaInstagram size={22} className={styles.icon}/>
        </Link>
        <Link href='https://twitter.com/ChrisTomshack_'>
        <FaTwitter size={22} className={styles.icon}/>
        </Link>
    
    </div>
  )
}

export default Socials