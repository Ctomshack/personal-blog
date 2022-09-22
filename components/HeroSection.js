import React from "react";
import styles from "../styles/Home.module.css";
import Socials from "./Socials";
import Image from "next/image";
import { BsArrow90DegUp } from 'react-icons/bs';

const HeroSection = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroTitleWrapper}>
        <span className={styles.myName}>CHRIS</span>
        <span className={styles.myName}>TOMSHACK</span>
        <span className={styles.myTitles}>
          Software Engineer / Co-Founder / Skydiver / IRONMAN Triathlete
        </span>
        <Socials />
        <span className={styles.getInTouch}><BsArrow90DegUp />
           {' '}Get in touch 
        </span>
      </div>
      <div className={styles.heroImageContainer}>

      <div className={styles.heroImageWrapper}>
        <Image src='/chris-headshot(1).png'
            alt="Chris Headshot"
            height='1087'
            width='1209'
            className={styles.heroImage}/>
      </div>
      </div>
    </div>
  );
};

export default HeroSection;
