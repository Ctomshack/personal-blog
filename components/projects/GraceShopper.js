import React from 'react'
import styles from '../../styles/Projects.module.css';
import { FaReact } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiSequelize } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiHeroku } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import Image from 'next/image';

const GraceShopper = () => {
  return (
    <div className={styles.projectWrapper} style={{borderTop: '2px solid #ff6489'}}>
                <div className={styles.projectImageWrapper}>
                  <Image src='/assets/macmonitor.png' alt='swoopdeck demo' layout='fill' />
                </div>
                <div className={styles.projectDescriptionWrapper}>
                    <div className={styles.projectTitle} style={{color: '#ff6489'}}>E-COMMERCE</div>
                    <div className={styles.projectDescription}>{`A full-stack e-commerce store "Baked by FullStack" with user authentication for multiple roles (Users / Admins / Guests) and stripe integration for a complete shopping experience`}</div>
                    <div className={styles.iconsWrapper}>
                    <FaReact size={25}/>
                    <SiExpress size={25} />
                    <SiHeroku size={25} />
                    <SiSequelize size={25} />
                    <SiPostgresql size={25}/>
                    <SiNodedotjs size={25} />
                    </div>
                </div>
            </div>
  )
}

export default GraceShopper