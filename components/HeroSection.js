import React from "react";
import styles from "../styles/Home.module.css";
import Socials from "./Socials";

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitleWrapper}>
        <span className={styles.myName}>CHRIS</span>
        <span className={styles.myName}>TOMSHACK</span>
        <span className={styles.myTitles}>
          Software Engineer / Co-Founder / Fitness Enthusiast
        </span>
        <Socials />
      </div>
      <div className={styles.heroImageWrapper}>
        {/* <Image src={"/assets/Chris_Headshot.jpeg"}
            alt="Chris Headshot"
            layout="fill"/> */}
      </div>
    </div>
  );
};

export default HeroSection;
