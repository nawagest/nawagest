import React from 'react';
import styles from './Error.module.css'
import { motion } from 'framer-motion';

const Error = () => {
    return (
        <div className={styles['content']}>
            <motion.h1
                drag
                dragConstraints={{
                    top: -100,
                    bottom: 100,
                    left: -100,
                    right: 100,
                }}
            >
            404
            </motion.h1>
            <motion.p
                drag
                dragConstraints={{
                    top: -100,
                    bottom: 100,
                    left: -100,
                    right: 100,
                }}
            >
                The page you were trying to look for does not exist :(
            </motion.p>
        </div>
    )
}

export default Error;