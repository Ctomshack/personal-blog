import React from 'react'
import styles from '../../styles/Projects.module.css';
import { FaReact } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiSequelize } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiGraphql } from 'react-icons/si';
import { SiNextdotjs } from 'react-icons/si';
import Image from 'next/image';
import BlogImage from '../BlogImage';

const Blog = () => {
  return (
    <div className={styles.projectWrapper}>
                <div className={styles.projectImageWrapper}>
                    <BlogImage/>
                </div>
                <div className={styles.projectDescriptionWrapper}>
                    <div className={styles.projectTitle} style={{color: '#64ffda'}}>PERSONAL BLOG</div>
                    <div className={styles.projectDescription}>A full-stack web-application that provides a platform to share my thoughts and interact with readers through a dedicated comment section</div>
                    <div className={styles.iconsWrapper}>
                    <SiNextdotjs size={25} />
                    <SiGraphql size={25} />
                    <FaReact size={25}/>
                    <SiNodedotjs size={25} />
                    </div>
                </div>
            </div>
  )
}

export default Blog