import Head from "next/head";
import styles from "../styles/Home.module.css";
import { ArticleCard, Categories, ArticleWidget } from "../components";
import { getArticles } from "../services";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Socials from "../components/Socials";
import { FaLongArrowAltRight } from 'react-icons/fa';
import Link from "next/link";


export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Tomshack's Blog`}</title>
        <meta name="Chris Tomshack.dev" content="Chris Tomshack.dev" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
      </Head>

      <div className={styles.homeContainer}>
        <section className={styles.heroContainer} id='Hero'>
          <div className={styles.heroTitleWrapper}>
            <span className={styles.myName}>CHRIS</span>
            <span className={styles.myName}>TOMSHACK</span>
            <span className={styles.myTitles}>Software Engineer / Co-Founder / Fitness Enthusiast</span>
            <Socials />
          </div>
          <div className={styles.heroImageWrapper}>
            {/* <Image src={"/assets/Chris_Headshot.jpeg"}
            alt="Chris Headshot"
            layout="fill"/> */}
          </div>
        </section>
          <div className={styles.blogContainer}>
            <div className={styles.blogSectionTitle}>Blog</div>
            <div className={styles.blogArticles}>
              <div className={styles.blogArticle} style={{borderTop: '2px solid gold'}}>
                <div className={styles.articleCategory} style={{color: 'gold'}}>FITNESS</div>
                <div className={styles.articleTitle}>My First Triathlon - IRONMAN Cozumel</div>
                <div className={styles.articleExcerpt}>{`"If you have to prove something to someone, make that someone yourself"`}</div>
                <div className={styles.articleExcerpt}>{`RACE MORNING - I slept through the night until...`}</div>
              </div>
              <div className={styles.blogArticle}>
                <div className={styles.articleCategory}>SELF IMPROVEMENT</div>
                <div className={styles.articleTitle}>Goal Setting - How To Set Goals And Why You Should</div>
                <div className={styles.articleExcerpt}>{"In 1979, Harvard conducted a survey wherein they asked the graduating MBA class: “Have you set clear, written goals for..."}</div>
              </div>
              <div className={styles.blogArticle} style={{borderTop: '2px solid red'}}>
                <div className={styles.articleCategory} style={{color: 'red'}}>PRODUCTIVITY</div>
                <div className={styles.articleTitle}>How I Increased My Reading Speed By 300% In 20 Minutes</div>
                <div className={styles.articleExcerpt}>{`"Not all readers are leaders, but all leaders are readers.” - Harry S. Truman`}</div>
                <div className={styles.articleExcerpt}>{`You have probably heard this...`}</div>
              </div>
              <div className={styles.blogArticle}>
                <div className={styles.articleCategory}>SELF IMPROVEMENT</div>
                <div className={styles.articleTitle}>{`The Spending Problem You Didn't Know You Have - The Deridot Effect`}</div>
                <div className={styles.articleExcerpt}>{`Picture This - You’ve been working out for a while and your friend is constantly pressuring you to come to a crossfit class at their gym. After all, your friend has a...`}</div>
              </div>
            </div>
          <div>
            <Link href='/blog'>
            <span className={styles.morePosts}>Check out more blog posts <FaLongArrowAltRight size={30} style={{paddingTop: '8px'}}/></span>
            </Link>
              </div>
          </div>
      </div>

    </div>
  );
}
