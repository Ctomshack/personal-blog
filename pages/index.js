import Head from "next/head";
import styles from "../styles/Blog.module.css";
import { ArticleCard, Categories, ArticleWidget } from "../components";
import { getArticles } from "../services";

export default function Home({ articles }) {

  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Tomshack's Blog`}</title>
        <meta name="Chris Tomshack Blog" content="Chris Tomshack Blog" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
      </Head>

      <div className={styles.grid}>
        <div className={styles.ArticleCard}>
          {articles.map((article, index) => (
            <ArticleCard article={article.node} key={index} />
          ))}
        </div>
        <div className={styles.gridColumn}>
          <div className={styles.stickyCard}>
            <ArticleWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}


export async function getStaticProps() {
  const articles = (await getArticles()) || [];

  return {
    props: { articles }
  }
} 