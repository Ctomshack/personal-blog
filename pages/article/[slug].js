import React from "react";
import { getArticles, getArticleContent } from "../../services";
import {
  ArticleContent,
  Categories,
  ArticleWidget,
  Author,
  Comments,
  CommentsForm,
} from "../../components";
import styles from "../../styles/Blog.module.css";

const ArticleDetails = ({ article }) => {

  return (
    <div className={styles.container}>
      <div className={styles.grid}>
        <div className={styles.singleArticleGridContainer}>
          <ArticleContent article={article} />
          <Author author={article.author} />
          <CommentsForm slug={article.slug} />
          <Comments slug={article.slug} />
        </div>
        <div>
          <div>
            {/* <ArticleWidget slug={article.slug} categories={article.categories.map((category) => category.slug)} /> */}
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(params) {
    // console.log('ZZZZZZZZZZZZZZZZZZZZZZZZZZZZ', params.params.slug)
  const data = (await getArticleContent(params.params.slug)) || [];

  return {
    props: { article: data },
  };
}

export async function getStaticPaths() {
    const articles = await getArticles();

    return {
        // Map function maps over all articles to return a single article, but we only want specific info (node, slug)
        // destructure "articles.map((article))" to only get 'node', then destructure once more to get 'slug'
        paths: articles.map(({ node: { slug }}) => ({ params: {slug }})),
        fallback: false,
    }
}

export default ArticleDetails;
