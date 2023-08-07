import { motion } from 'framer-motion';
import React from 'react';
import styles from './Bar.module.css'

const Bar = (props) => {
    return (
        <div className={styles.bar}>
            <motion.div 
                className={styles.fill__bar} 
                initial={{
                    width: '0%',
                }}
                animate={{
                    width: `${props.percent}%`,
                }}
                transition={{
                    delay: 0.6,
                    duration: 1,
                    ease: "easeInOut"
                }}
            />
        </div>  
    )
}

export default Bar;