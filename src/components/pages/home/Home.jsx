import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faDiscord, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { ReactComponent as ReplitLogo } from '../../../imgs/replit-logo.svg'
import Bar from './Bar.jsx'
import styles from './Home.module.css';

const Home = ({ isDark }) => {
    const variants = {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
        }
    }

    const icon = {
        hover: {
            scale: 1.2,
            y: -10,
        }
    }

    return (
        <div className={styles.content}>
            <motion.div 
                className={`${styles.about__content} ${isDark === 'dark' ? styles.dark : ''}`}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    duration: 0.5
                }}
            >
                <h1>About</h1>
                <p>Hello there! My name is Nathanael and I'm 17 year old American-born Ethiopian apsiring to become a full stack web developer. Some of my hobbies include coding, soccer, and swimming. Now as for how I got here, I started out coding in Scratch. My friend introduced me to it when I was 10 years old. I coded on Scratch for a while and learned the fundamentals of coding. Then around the time from when I was 11-12 I started learning Java on Udemy. I kinda liked Java but didn't continue through with it. After just learning some fundamentals of Java, I started leaerning some HTML and CSS, and that's when I figured out that I really enjoyed web development. I pursued learning the basics of web development and by the time I was 14 I was learning JavaScript through Udemy. A year later, when I was 15, I learned backend web development using Node.js and Express.js through another Udemy course. And now I am learning React.js (which is what I used to make this site)! I am currently learning React.js and with that I hope to use Next.js, Redux.js, and so much more! If you would like to view the courses I used to become the programmer I am today, checkout my blog!</p>
            </motion.div>
            <motion.div 
                className={`${styles.education__content} ${isDark === 'dark' ? styles.dark : ''}`}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    delay: 0.2,
                    duration: 0.5
                }}
            >
                <h1>Education</h1>
                <p>Currently I'm a senior in high school (12th grade). I do not take any computer science courses at school but I gained a lot of my programming knowledge from Udemy and watching a lot of Youtube videos. </p>
            </motion.div>
            <motion.div 
                className={`${styles.skills__content} ${isDark === 'dark' ? styles.dark : ''}`}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    delay: 0.4,
                    duration: 0.5
                }}
            >
                <h1>Skills</h1>
                <div className={styles['skills-bar-container']}>
                    <div className={styles['skills-skill']}>
                        <span className={styles['skills-name__skills-chart']}>HTML</span>
                        <span className={styles['skills-name__skills-chart']}>CSS</span>
                        <span className={styles['skills-name__skills-chart']}>Javascript</span>
                        <span className={styles['skills-name__skills-chart']}>Node.js</span>
                        <span className={styles['skills-name__skills-chart']}>EJS</span>
                        <span className={styles['skills-name__skills-chart']}>Mongoose</span>
                        <span className={styles['skills-name__skills-chart']}>Git</span>
                        <span className={styles['skills-name__skills-chart']}>React</span>
                    </div>
                    <div className={styles['skills-bars']}>
                        <Bar percent={100} />
                        <Bar percent={80} />
                        <Bar percent={95} />
                        <Bar percent={90} />
                        <Bar percent={100} />
                        <Bar percent={70} />
                        <Bar percent={50} />
                        <Bar percent={25} />
                    </div>
                </div>
            </motion.div>
            <motion.div 
                className={`${styles.socials__content} ${isDark === 'dark' ? styles.dark : ''}`}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    delay: 0.6,
                    duration: 0.5
                }}
            >
                <h1>Socials</h1>
                <div className={styles['socials-container']}>
                    <motion.div 
                        initial="initial" 
                        animate="animate" 
                        variants={icon} 
                        whileHover="hover"
                        className={styles.social}
                    >
                        <a href="https://instagram.com/na.wagest"><FontAwesomeIcon icon={faInstagram} /></a>
                    </motion.div>
                    <motion.div 
                        initial="initial" 
                        animate="animate" 
                        variants={icon} 
                        whileHover="hover"
                        className={styles.social}
                    >
                        <a href="https://discord.com/users/877583833879441419"><FontAwesomeIcon icon={faDiscord} /></a>
                    </motion.div>
                    <motion.div 
                        initial="initial" 
                        animate="animate" 
                        variants={icon} 
                        whileHover="hover"
                        className={styles.social}
                    >
                        <a href="mailto:nawagestdev@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
                    </motion.div>
                    <motion.div 
                        initial="initial" 
                        animate="animate" 
                        variants={icon}
                        whileHover="hover"
                        className={styles.social}
                    >
                        <a href="https://github.com/nawagest"><FontAwesomeIcon icon={faGithub} /></a>
                    </motion.div>
                    <motion.div 
                        initial="initial" 
                        animate="animate" 
                        variants={icon}
                        whileHover="hover"
                        className={styles.social}
                    >
                        <a href="https://replit.com/@nawagest"><ReplitLogo /></a>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default Home;