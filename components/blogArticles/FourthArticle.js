import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const FourthArticle = () => {
  return (
    <div className={styles.blogArticle}>
      <div className={styles.articleCategory}>SELF IMPROVEMENT</div>
      <div
        className={styles.articleTitle}
      >{`The Spending Problem You Didn't Know You Have - The Deridot Effect`}</div>
      <div
        className={styles.articleExcerpt}
      >{`Picture This - You’ve been working out for a while and your friend is constantly pressuring you to come to a crossfit class at their gym. After all, your friend has a...`}</div>
      <Link href="/article/the-spending-problem-you-did-not-know-you-had">
        <button
          className={styles.btnPrimary}
          style={{ margin: "0 2rem 1rem 2rem" }}
        >
          Read more
          <i
            className="bi bi-arrow-right-short"
            style={{ marginLeft: ".25rem" }}
          ></i>
        </button>
      </Link>
    </div>
  );
};

export default FourthArticle;
