import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services'
import styles from '../styles/Blog.module.css'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories()
      .then((newCategories) => setCategories(newCategories))
  }, []);

  return (
    <div className={styles.recentArticlesContainer}>
      <h3 className={styles.recentArticlesContainerTitle}>
        Categories
      </h3>
      {categories.map((category, index) => {
        return (
          <Link key={index} href={`/category/${category.slug}`}>
            <div className={styles.category}>
              <span className={styles.categoryTitle}>{category.name}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Categories