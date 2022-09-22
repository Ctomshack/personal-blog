import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const ThirdArticle = () => {
  return (
    <div
      className={styles.blogArticle}
      style={{ borderTop: "2px solid #ff6489" }}
    >
      <div className={styles.articleCategory} style={{ color: "#ff6489" }}>
        PRODUCTIVITY
      </div>
      <div className={styles.articleTitle}>
        How I Increased My Reading Speed By 300% In 20 Minutes
      </div>
      <div
        className={styles.articleExcerpt}
      >{`"Not all readers are leaders, but all leaders are readers.” - Harry S. Truman`}</div>
      <div
        className={styles.articleExcerpt}
      >{`You have probably heard this...`}</div>
      <Link href="/article/how-i-increased-my-reading-speed-by-300-percent-in-20-minutes">
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

export default ThirdArticle;
