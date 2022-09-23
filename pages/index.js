import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Image from "next/image";
import Socials from "../components/Socials";
import { FaLongArrowAltRight } from "react-icons/fa";
import Link from "next/link";
import BlogSection from "../components/BlogSection";
import { HeroSection, WorkSection } from "../components";

import { motion, useScroll } from "framer-motion";


export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>{`Chris Tomshack's Dev Site + Blog`}</title>
        <meta name="Chris Tomshack.dev" content="Chris Tomshack.dev" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
        ></link>
      </Head>

      <div className={styles.homeContainer}>
        <section id="HeroSection">
          <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{duration: 1}}>
            <HeroSection />
          </motion.div>
        </section>
        <section id="BlogSection">
          <motion.div
                initial={{ opacity: 0, x: 70 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{duration: 1}}>
            <BlogSection />
          </motion.div>
        </section>
        <section id="projects">
        <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{duration: 1}}>
          <WorkSection />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
