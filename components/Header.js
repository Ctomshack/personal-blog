import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Blog.module.css';
import { getCategories } from '../services'

const Header = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      getCategories()
        .then((newCategories) => setCategories(newCategories))
    }, []);
    
  return (
    <div className={styles.container}>
        <div className={styles.nav}>
            <div className={styles.navLinkContainer}>
                <Link href='/' >
                    <span className={styles.blogLogo}>Blog</span>
                </Link>
            </div>
            <div className={styles.navItems}>
                {categories.map((category, index) => (
                    <Link key={index} href={`/category/${category.slug}`}>
                        <span className={styles.navItem}>
                            {category.name}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Header