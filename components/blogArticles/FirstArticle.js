import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const FirstArticle = () => {
  return (
    <div className={styles.blogArticle} style={{ borderTop: "2px solid gold" }}>
      <div className={styles.articleCategory} style={{ color: "gold" }}>
        FITNESS
      </div>
      <div className={styles.articleTitle}>
        My First Triathlon - IRONMAN Cozumel
      </div>
      <div
        className={styles.articleExcerpt}
      >{`"If you have to prove something to someone, make that someone yourself"`}</div>
      <div
        className={styles.articleExcerpt}
      >{`RACE MORNING - I slept through the night until...`}</div>
      <Link href="/article/ironman-cozumel-race-report">
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

export default FirstArticle;
