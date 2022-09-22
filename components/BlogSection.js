import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Socials from "../components/Socials";
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from "next/link";
import FirstArticle from './blogArticles/FirstArticle';
import SecondArticle from './blogArticles/SecondArticle';
import ThirdArticle from './blogArticles/ThirdArticle';
import FourthArticle from './blogArticles/FourthArticle';

const BlogSection = () => {
  return (
    <div className={styles.blogContainer}>
            <div className={styles.blogSectionTitle}>Blog</div>
            <div className={styles.blogArticles}>
              <FirstArticle />
              <SecondArticle />
              <ThirdArticle />
              <FourthArticle />
            </div>
            <div>
            <Link href='/blog'>
            <span className={styles.morePosts}>Check out more blog posts <FaLongArrowAltRight size={30} style={{paddingTop: '8px'}}/></span>
            </Link>
              </div>
          </div>
  )
}

export default BlogSection