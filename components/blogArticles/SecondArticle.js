import React from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const SecondArticle = () => {
  return (
    <div className={styles.blogArticle}>
      <div className={styles.articleCategory}>SELF IMPROVEMENT</div>
      <div className={styles.articleTitle}>
        Goal Setting - How To Set Goals And Why You Should
      </div>
      <div className={styles.articleExcerpt}>
        {
          "In 1979, Harvard conducted a survey wherein they asked the graduating MBA class: “Have you set clear, written goals for..."
        }
      </div>
      <Link href="/article/goal-setting-how-to-set-goal-and-why-you-should">
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

export default SecondArticle;
