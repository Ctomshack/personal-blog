import React, { useState, useEffect } from "react";
import moment from "moment";
import parse from "html-react-parser";
import { getComments } from "../services";
import styles from '../styles/Blog.module.css';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, [slug]);

  const capitalizeName = (name) => {
    let newName = name.charAt(0).toUpperCase()
     + name.slice(1)
 
    return newName;
   }

  return (
    <div>
      {comments.length > 0 && (
        <div className={styles.commentsFormContainer}>
          <h3 className={styles.commentsFormCard}>
            {comments.length}
            {' '}
            Comments
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className={styles.commentTitle}>
              <p className={styles.commentDate}>
                <span style={{fontWeight: '600', color: '#F9FAFE'}}>{capitalizeName(comment.name)}</span>
                {/* {' '}
                on
                {' '}
                {moment((comment.createdAt).format('MMM DD YYYY'))} */}
              </p>
              <p className={styles.comment}>{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comments;
