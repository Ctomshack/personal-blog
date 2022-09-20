import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from '../styles/Blog.module.css';
// import { getCategories } from '../services'

const Header = () => {
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//       getCategories()
//         .then((newCategories) => setCategories(newCategories))
//     }, []);

const [toggleMenu, setToggleMenu] = useState();

const testVariable = styles.mobileNavToggle
const navItem = styles.navItem;


    
  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
        <div className={styles.navLinkContainer}>
                <Link href='/' >
                    <span className={styles.blogLogo}>CT</span>
                </Link>
            </div>

            {/* <button className={styles.mobileNavToggle} aria-controls='navItems' aria-expanded='false'>
                </button> */}

            <ul className={styles.navItems}>
                <li className={navItem}>
                    <Link href='/'>
                        <a>
                        <span aria-hidden='true' style={{fontWeight: '700'}}>00 </span>
                        Home
                        </a>
                        </Link>
                </li>
                <li className={styles.navItem}>
                <Link href='/'>
                        <a>
                        <span aria-hidden='true' style={{fontWeight: '700'}}>01 </span>
                        Blog
                        </a>
                        </Link>
                </li>
                <li className={styles.navItem}>
                <Link href='/'>
                        <a>
                        <span aria-hidden='true' style={{fontWeight: '700'}}>02 </span>
                        Portfolio
                        </a>
                        </Link>
                </li>
                <li className={styles.navItem}>
                <Link href='/'>
                        <a>
                        <span aria-hidden='true' style={{fontWeight: '700'}}>03 </span>
                        Github
                        </a>
                        </Link>
                </li>
            </ul>
        </nav>
    </div>

    // <div className={styles.container}>
    //     <div className={styles.nav}>
            // <div className={styles.navLinkContainer}>
            //     <Link href='/' >
            //         <span className={styles.blogLogo}>Blog</span>
            //     </Link>
            // </div>
    //         <div className={styles.navItems}>
    //             {categories.map((category, index) => (
    //                 <Link key={index} href={`/category/${category.slug}`}>
    //                     <span className={styles.navItem}>
    //                         {category.name}
    //                     </span>
    //                 </Link>
    //             ))}
    //         </div>
    //     </div>
    // </div>
  )
}

export default Header