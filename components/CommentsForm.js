import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/Blog.module.css";
import { submitComment } from "../services";

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [formData, setFormData] = useState({ name: null, email: null, comment: null, storeData: false });

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalFormData = {
      name: window.localStorage.getItem('name'),
      email: window.localStorage.getItem('email'),
      storeData: window.localStorage.getItem('name') || window.localStorage.getItem('email'),
    };
    setFormData(initalFormData);
  }, []);

  const onInputChange = (e) => {
    const { target } = e;
    if (target.type === 'checkbox') {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.checked,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value,
      }));
    }
  };

  const handleCommentSubmission = () => {
    setError(false);
    const { name, email, comment, storeData } = formData;
    if (!name || !email || !comment) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj)
      .then((res) => {
        if (res.createComment) {
          if (!storeData) {
            formData.name = '';
            formData.email = '';
          }
          formData.comment = '';
          setFormData((prevState) => ({
            ...prevState,
            ...formData,
          }));
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 3000);
        }
      });
  };

  
  return (
    <div className={styles.commentsFormContainer}>
      <h3 className={styles.commentsFormCard}>Leave a comment</h3>
      <div className={styles.commentsFormTextArea}>
        <textarea
          value={formData.comment || ''}
          onChange={onInputChange}
          className={styles.commentsFormTextBox}
          placeholder="Comment"
          name="comment"
          defaultValue={""}
        />
      </div>
      <div className={styles.commentsFormTextArea}>
        <input
          style={{ paddingleft: "1rem", paddingRight: "1rem" }}
          type="text"
          value={formData.name}
          onChange={onInputChange}
          className={styles.commentsFormTextBox}
          placeholder="Name"
          name="name"
          defaultValue={""}
        />
        <input
          style={{ paddingleft: "1rem", paddingRight: "1rem" }}
          type="text"
          value={formData.email}
          onChange={onInputChange}
          className={styles.commentsFormTextBox}
          placeholder="Email"
          name="email"
          defaultValue={""}
        />
      </div>
      <div className={styles.commentsFormTextArea}>
        <div>
          <input
            checked={formData.storeData}
            onChange={onInputChange}
            type="checkbox"
            id="storeData"
            name="storeData"
            value="true"
            defaultValue={""}
          />
          <label
            style={{
              fontSize: "0.75rem",
              lineHeight: "1rem",
              cursor: "pointer",
              color: "#6B7280",
              marginLeft: "0.5rem",
            }}
          >
            Save my name and email for future commenting
          </label>
        </div>
      </div>
      {error && (
        <p className={styles.errorRequiredFields}>All fields are required</p>
      )}
      <div style={{ marginTop: "2rem" }}>
        <button
          type="button"
          onClick={handleCommentSubmission}
          className={styles.btnPrimary}
        >
          Submit
        </button>
        {showSuccessMessage && (
          <span className={styles.successMessage}>
            Comment submitted for review
          </span>
        )}
      </div>
      <div className={styles.commentsFormTextArea}></div>
    </div>
  );
};

export default CommentsForm;
