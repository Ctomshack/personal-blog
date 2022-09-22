import React from 'react'
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Socials from "../components/Socials";
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from "next/link";

const BlogSection = () => {
  return (
    <div className={styles.blogContainer}>
            <div className={styles.blogSectionTitle}>Blog</div>
            <div className={styles.blogArticles}>
              <div className={styles.blogArticle} style={{borderTop: '2px solid gold'}}>
                <div className={styles.articleCategory} style={{color: 'gold'}}>FITNESS</div>
                <div className={styles.articleTitle}>My First Triathlon - IRONMAN Cozumel</div>
                <div className={styles.articleExcerpt}>{`"If you have to prove something to someone, make that someone yourself"`}</div>
                <div className={styles.articleExcerpt}>{`RACE MORNING - I slept through the night until...`}</div>
                <Link href='/article/ironman-cozumel-race-report'>
                   <button className={styles.btnPrimary} style={{margin: '0 2rem 1rem 2rem'}}>Read more<i className="bi bi-arrow-right-short" style={{marginLeft: '.25rem'}}></i></button>
                </Link>
              </div>
              <div className={styles.blogArticle}>
                <div className={styles.articleCategory}>SELF IMPROVEMENT</div>
                <div className={styles.articleTitle}>Goal Setting - How To Set Goals And Why You Should</div>
                <div className={styles.articleExcerpt}>{"In 1979, Harvard conducted a survey wherein they asked the graduating MBA class: “Have you set clear, written goals for..."}</div>
                <Link href='/goal-setting-how-to-set-goal-and-why-you-should'>
                   <button className={styles.btnPrimary} style={{margin: '0 2rem 1rem 2rem'}}>Read more<i className="bi bi-arrow-right-short" style={{marginLeft: '.25rem'}}></i></button>
                </Link>
              </div>
              <div className={styles.blogArticle} style={{borderTop: '2px solid #ff6489'}}>
                <div className={styles.articleCategory} style={{color: '#ff6489'}}>PRODUCTIVITY</div>
                <div className={styles.articleTitle}>How I Increased My Reading Speed By 300% In 20 Minutes</div>
                <div className={styles.articleExcerpt}>{`"Not all readers are leaders, but all leaders are readers.” - Harry S. Truman`}</div>
                <div className={styles.articleExcerpt}>{`You have probably heard this...`}</div>
                <Link href='/how-i-increased-my-reading-speed-by-300%-in-20-minutes'>
                   <button className={styles.btnPrimary} style={{margin: '0 2rem 1rem 2rem'}}>Read more<i className="bi bi-arrow-right-short" style={{marginLeft: '.25rem'}}></i></button>
                </Link>
              </div>
              <div className={styles.blogArticle}>
                <div className={styles.articleCategory}>SELF IMPROVEMENT</div>
                <div className={styles.articleTitle}>{`The Spending Problem You Didn't Know You Have - The Deridot Effect`}</div>
                <div className={styles.articleExcerpt}>{`Picture This - You’ve been working out for a while and your friend is constantly pressuring you to come to a crossfit class at their gym. After all, your friend has a...`}</div>
                <Link href='/the-spending-problem-you-did-not-know-you-had'>
                   <button className={styles.btnPrimary} style={{margin: '0 2rem 1rem 2rem'}}>Read more<i className="bi bi-arrow-right-short" style={{marginLeft: '.25rem'}}></i></button>
                </Link>
              </div>
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