import Image from 'next/image'
import React from 'react'
import styles from '../../styles/About.module.css'

const AboutContent = () => {
  return (
    <div className={styles.ContentWrapper}>
        <h3 className={styles.ContentHeader}>About me</h3>
        <div className={styles.aboutContentWrapper}>

          <div className={styles.aboutContent}>
            <p>Est consectetur laboriosam et ut. Perspiciatis sed neque molestiae porro quo ea tempore ullam. Qui eos adipisci velit sunt et exercitationem. Perspiciatis omnis nesciunt officiis.</p>
            <p>Sit est est ut deleniti autem magnam at dolorem. Quaerat voluptatem et totam facilis. Neque eius repellendus nobis. Rerum est debitis cupiditate. Ipsam ducimus corporis veritatis. Sit assumenda quibusdam maxime.</p>
            {/* <p>Illum est aut perspiciatis. Impedit totam veniam quia pariatur quis quidem consequuntur mollitia. Necessitatibus molestias optio magnam molestiae omnis. Exercitationem soluta rerum numquam perspiciatis illum consequuntur est. Natus ipsam placeat similique ratione ducimus quas illum iure.</p> */}
          </div>
          
          <div className={styles.aboutImage}>

          <Image src='/chris-headshot(1).png'
            alt="Chris Headshot"
            height='1087'
            width='1209'
            className={styles.heroImage}/>
          </div>
        </div>
        </div>
  )
}

export default AboutContent