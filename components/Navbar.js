import React, {useState} from 'react';
import Link from 'next/link';
import { FaMixer } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import styles from '../styles/Navbar.module.css';
import { motion } from 'framer-motion';

// REACT COMPONENT //
const Navbar = () => {

// UseState HOOKS //
const [hamburgerClass, setHamburgerClass] = useState(styles.hamburgerOn);
const [navItems, setNavItemsClass] = useState(styles.navItemsOff);
const [open, setOpen] = useState(false);

const hamburgerIcon = <HiMenuAlt3 className={hamburgerClass} style={{color: 'white'}} size={35} onClick={() => (!open, toggleNav())} />
const closeIcon = <FaMixer size={35} className={hamburgerClass} style={{color: 'white', position: 'fixed'}} onClick={() => (!open, toggleNav())} />

// FUNCTION TO TOGGLE NAVIGATION MENU //
const toggleNav = () => {
    if(!open) {
        setHamburgerClass(styles.hamburgerOn);
        setNavItemsClass(styles.navItemsOn);
    } else {
        setHamburgerClass(styles.hamburgerOn);
        setNavItemsClass(styles.navItemsOff);
    }
    setOpen(!open);
}

// FUNCTION TO CLOSE MENU (SMALLER SCREENS)
const closeNav = () => {
    toggleNav();
}

const animateFrom = {opacity: 0, y: -40}
const animateTo = {opacity: 1, y:0}

  return (
    <div className={styles.container}>
        <nav className={styles.nav}>
        <motion.div initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}  className={styles.navLinkContainer}>
                <Link href='/' >
                    <motion.span initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} className={styles.blogLogo}>CT</motion.span>
                </Link>
            </motion.div>
            
            {open ? closeIcon : hamburgerIcon}

            
            <ul className={navItems}>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.05}} className={styles.navItem} onClick={closeNav}>
                    <Link href='/'>
                        <a style={{fontWeight: '400'}}>
                        <span aria-hidden='true' style={{fontWeight: '700', color: '#64ffda'}}>01. </span>
                        About
                        </a>
                        </Link>
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.15}}  className={styles.navItem} onClick={closeNav}>
                <Link href='/blog'>
                        <a style={{fontWeight: '400'}}>
                        <span aria-hidden='true' style={{fontWeight: '700', color: '#64ffda'}}>02. </span>
                        Blog
                        </a>
                        </Link>
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.25}}  className={styles.navItem} onClick={closeNav}>
                <Link href='/'>
                        <a style={{fontWeight: '400'}}>
                        <span aria-hidden='true' style={{fontWeight: '700', color: '#64ffda'}}>03. </span>
                        Portfolio
                        </a>
                        </Link>
                </motion.li>
                <motion.li initial={animateFrom} animate={animateTo} transition={{delay: 0.35}}  className={styles.navItem} onClick={closeNav}>
                <Link href='https://github.com/Ctomshack' target='_blank'>
                        <a style={{fontWeight: '400'}}>
                        <span aria-hidden='true' style={{fontWeight: '700', color: '#64ffda'}}>04. </span>
                        Github
                        </a>
                        </Link>
                </motion.li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar