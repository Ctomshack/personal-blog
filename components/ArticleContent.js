import Image from 'next/image';
import React from 'react';
import styles from '../styles/Blog.module.css';
import moment from 'moment';

const ArticleContent = ({ article }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;
    
    if (obj) {
      if (obj.bold) {
        modifiedText = (<b key={index}>{text}</b>);
      }

      if (obj.italic) {
        modifiedText = (<em key={index}>{text}</em>)
      }

      if (obj.underline) {
        modifiedText = (<u key={index}>{text}</u>)
      }
    }

    switch (type) {
      case 'heading-three':
        return <h3 key={index} className={styles.headingThree}>{modifiedText.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)}</h3>;
      case 'paragraph':
        return <p key={index} className={styles.paragraph}>{modifiedText.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)}</p>;
      case 'heading-four':
        return <h4 key={index} className={styles.headingFour}>{modifiedText.map((item, index) => <React.Fragment key={index}>{item}</React.Fragment>)}</h4>;
      case 'image':
        return (
          <Image
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  }

  
  return (
    <div className={styles.singleArticleContainer}>
      <div className={styles.articleImageWrapper}>
        <Image 
          src={article.featuredImage.url}
          alt={article.title}
          className={styles.articleImage}
          layout='fill'
          />
      </div>
        <span className={styles.articleDate} style={{paddingLeft: '2rem'}}>{moment(article.createdAt).format('MMM DD, YYYY')}</span>
        <h2 className={styles.articleTitle}>{article.title}</h2>
        {article.postContent.raw.children.map((typeObj, index) => {
          const children = typeObj.children.map((item, index) => getContentFragment(index, item.text, item));

          return getContentFragment(index, children, typeObj, typeObj.type)
        })}

    </div>
  )
}

export default ArticleContent