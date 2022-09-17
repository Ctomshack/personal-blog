import React from 'react';
import Link from 'next/link';
import moment from 'moment';
import styles from '../styles/Blog.module.css'
import Image from 'next/image';

const ArticleCard = ({ article } ) => {
  // console.log(article)
  return (
    <div className={styles.articleCard}>
      <div className={styles.articleImageWrapper}>
        <Image 
        src={article.featuredImage.url}
        alt={article.title}
        className={styles.articleImage}
        layout='fill'
        />
      </div>
      <span className={styles.articleDate} style={{paddingLeft: '2rem'}}>{moment(article.createdAt).format('MMM DD, YYYY')}</span>
      <h2 className={styles.articleTitle}>
        <Link href={`/article/${article.slug}`}>
        {article.title}
        </Link>
        </h2>
      <p className={styles.articleExcerpt}>{article.excerpt}</p>
      <Link href={`/article/${article.slug}`}>
        <button className={styles.btnPrimary}>Read more</button>
        </Link>
    </div>
  )
}

export default ArticleCard