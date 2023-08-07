import React from 'react';
import { motion } from 'framer-motion'
import styles from './Form.module.css';

const Form = ({ isDark }) => {

    const handleSubmitForm = (e) => {
        e.preventDefault();
    }

    return (
        <form className={styles['contact-form']} action="https://formspree.io/f/xwkzqdoa" method="post">
            <div className={styles['form-control__contact-form']}>
                <label className={`${styles['labels__contact-form']} ${isDark === 'dark' ? styles.dark : ''}`} htmlFor="name">Name</label>
                <input 
                    type="text"  
                    name="name"
                    required
                    className={`${styles['inputs__contact-form']} ${styles['input-name']} ${isDark === 'dark' ? styles['dark-inputs'] : ''}`}
                />
            </div>
            <div className={styles['form-control__contact-form']}>
                <label className={`${styles['labels__contact-form']} ${isDark === 'dark' ? styles.dark : ''}`} htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="email" 
                    required
                    className={`${styles['inputs__contact-form']} ${styles['input-email']} ${isDark === 'dark' ? styles['dark-inputs'] : ''}`} 
                />
            </div>
            <div className={styles['form-control__contact-form']}>
                <label className={`${styles['labels__contact-form']} ${isDark === 'dark' ? styles.dark : ''}`} htmlFor="message">Message</label>
                <textarea 
                    type="type"
                    rows="4"
                    name="message"
                    required
                    className={`${styles['inputs__contact-form']} ${styles['input-message']} ${isDark === 'dark' ? styles['dark-inputs'] : ''}`}
                />
            </div>
            <motion.button 
                type="submit" 
                className={`${styles['submit-btn__contact-form']} ${isDark === 'dark' ? styles['dark-btn'] : ''}`}
                whileTap={{
                    scale: 0.9
                }}
                onSubmit={handleSubmitForm}
            >
                Submit
            </motion.button>
        </form>
    )
}

export default Form;