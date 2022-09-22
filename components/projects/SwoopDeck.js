import React from 'react'
import styles from '../../styles/Projects.module.css';
import { FaReact } from 'react-icons/fa';
import { SiPostgresql } from 'react-icons/si';
import { SiSequelize } from 'react-icons/si';
import { SiNodedotjs } from 'react-icons/si';
import { SiHeroku } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import Image from 'next/image';

const SwoopDeck = () => {
  return (
    <div className={styles.projectWrapper}>
                <div className={styles.projectImageWrapper}>
                    <Image src='/assets/macmonitor.png' alt='swoopdeck demo' layout='fill' />
                </div>
                <div className={styles.projectDescriptionWrapper}>
                    <div className={styles.projectTitle} style={{color: '#64ffda'}}>SWOOPDECK</div>
                    <div className={styles.projectDescription}>A full-stack application that modernizes the skydiving industry by providing real-world, programmatic solutions to skydivers and skydiving drop zones worldwide</div>
                    <div className={styles.iconsWrapper}>
                    <FaReact size={25}/>
                    <SiPostgresql size={25}/>
                    <SiSequelize size={25} />
                    <SiHeroku size={25} />
                    <SiNodedotjs size={25} />
                    <SiExpress size={25} />
                    </div>
                </div>
            </div>
  )
}

export default SwoopDeck