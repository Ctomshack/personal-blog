import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'
import { getRecentArticles, getSimilarArticles } from '../services';
import styles from '../styles/Blog.module.css'

const ArticleWidget = ({ categories, slug }) => {
  const [relatedArticles, setRelatedArticles] = useState([]);

  useEffect(() => {
    if(slug) {
      getSimilarArticles(category, slug)
        .then((result) => setRelatedArticles(result))
    } else {
      getRecentArticles()
        .then((result) => setRelatedArticles(result))
    }
  }, [slug])

  // console.log('recent: ', relatedArticles);

  return (
    <div className={styles.recentArticlesContainer}>
      <h3 className={styles.recentArticlesContainerTitle}>
        {slug ? 'Related Articles' : 'Recent Articles'}
      </h3>
      {relatedArticles.map((article, index) => {
        return (
          <div key={index}>
            <div>
              <p className={styles.articleDate}><i className="bi bi-calendar-event" style={{marginRight: '.5rem'}}></i>{moment(article.createdAt).format('MMM DD YYYY')}</p>
              <Link href={`/article/${article.slug}`} key={article.title}>
                <p className={styles.recentArticleTitle}>{article.title}</p>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ArticleWidget
