import React from 'react';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';
import Form from './Form';

const Contact = ({ isDark }) => {
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

    return (
        <div className={styles.content}>
            <motion.div 
                className={`${styles.contact__content} ${isDark === 'dark' ? styles.dark : ''}`}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    duration: 0.5
                }}
            >
                <h1>Contact</h1>
                <Form isDark={isDark} />
            </motion.div>
            <motion.div 
                className={`${styles.skillset__content} ${isDark === 'dark' ? styles.dark : ''}`}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    delay: 0.2,
                    duration: 0.5,
                }}
            >
                <h1>Skills Full List</h1>
                <div className={styles['list-skillset__content']}>
                    <div className={styles['list-section__list']}>
                        <h3>Languages</h3>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>* Typescript</p>
                        <p>* JSX/TSX</p>
                    </div>
                    <div className={styles['list-section__list']}>
                        <h3>Frameworks</h3>
                        <p>* React.js</p>
                        <p>Express.js</p>
                    </div>
                    <div className={styles['list-section__list']}>
                        <h3>Databases</h3>
                        <p>MongoDB</p>
                    </div>
                    <div className={styles['list-section__list']}>
                        <h3>API's</h3>
                        <p>REST</p>
                    </div>
                    <div className={styles['list-section__list']}>
                        <h3>IDE's</h3>
                        <p>VS Code</p>
                        <p>Intellij IDEA</p>
                    </div>
                    <div className={styles['list-section__list']}>
                        <h3>Hosting</h3>
                        <p>Replit</p>
                        <p>Netlify</p>
                        <p>Github Pages</p>
                    </div>
                </div>
                <div style={{ alignSelf: 'flex-end' }}>
                    <p>* = still learning the skill</p>
                </div>
            </motion.div>
            <motion.div 
                className={`${styles.resume__content} ${isDark === 'dark' ? styles.dark : ''}`}
                variants={variants}
                initial="initial"
                animate="animate"
                transition={{
                    delay: 0.4,
                    duration: 0.5
                }}
            >
                <h1>Resume</h1>
                <div className={styles['info-resume__content']}>
                    <p>Hey there! I am not going to put my resume on my website simply because it contains a lot of personal information. If you are willing to hire/work with me for a job that involves using some of the skills that I put in the skills section, then please feel free to contact me via <a href="nawagestdev@gmail.com">this email</a> or you can leave a message in the contact form saying that you would like to work on a project.</p>
                    <p>Thanks for taking the time to view my site,</p>
                    <p>Nathanael</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Contact;