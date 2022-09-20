import React from 'react';
import Image from 'next/image';
import styles from '../styles/Blog.module.css';

const Author = ({ author }) => {

  return (
    <div className={styles.authorContainer}>
      <div className={styles.authorWrapper}>
        {/* <Image  alt={author.name} height="100px" width="100px" className={styles.authorImage} src={author.photo.url} /> */}

      </div>
        <h3 className={styles.authorName}>{author.name}</h3>
        <p className={styles.authorBio}>{author.bio}</p>

    </div>
  )
}

export default Author