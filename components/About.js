import React from "react";
import styles from '../styles/About.module.css'
import AboutContent from "./about/AboutContent";

const About = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className={styles.box1}>
          About
        </div>
        <div className={styles.box2}>
          Hobbies
        </div>
        <div className={styles.box3}>
          Skills
        </div>
        <div className={styles.box4}>Interests</div>


        <div className={styles.box5}>
          <AboutContent />
        </div>

        
      </div>
    </div>
  );
};

export default About;
