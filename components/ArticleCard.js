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
      <span className={styles.articleDate} style={{paddingLeft: '2rem'}}><i className="bi bi-calendar-event" style={{marginRight: '.5rem'}}></i>{moment(article.createdAt).format('MMM DD, YYYY')}</span>
      <h2 className={styles.articleTitle}>
        <Link href={`/article/${article.slug}`}>
        {article.title}
        </Link>
        </h2>
      <p className={styles.articleExcerpt}>{article.excerpt}</p>
      <Link href={`/article/${article.slug}`}>
        <button className={styles.btnPrimary} style={{margin: '0 2rem 1rem 2rem'}}>Read more<i className="bi bi-arrow-right-short" style={{marginLeft: '.25rem'}}></i></button>
        </Link>
    </div>
  )
}

export default ArticleCard