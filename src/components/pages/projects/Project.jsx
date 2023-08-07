import React from "react";
import styles from './Project.module.css';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = (props) => {
    const { details } = props;
    const { isDark } = props;

    const variant = {
        initial: {
            opacity: 0,
            x: details.style === 'right' ? 300 : -300,
        },
        scroll: {
            opacity: 1,
            x: 0,
        }
    }

    const icon = {
        hover: {
            scale: 1.2, 
            y: -15,
        }
    }

    return (
        <motion.div 
            className={`${styles.projects} ${isDark === 'dark' ? styles.dark : ''}`} 
            style={details.style === 'right' ? { flexDirection: 'row-reverse' } : { flexDirection: 'row' } }
            variants={variant}
            initial="initial"
            whileInView="scroll"
            transition={{
                type: 'spring',
                stiffness: 100,
                delay: 0.1,
                duration: 1,
                ease: 'easeIn',
            }}
        >
            <img 
                src={details.img} 
                alt="project thumbnail" 
                className={styles['project-img__projects']} 
                style={ details.style === 'right' ? { borderRadius: '0 15px 15px 0' } : { borderRadius: '15px 0 0 15px' } }
            />
            <div className={styles['project-content__projects']} style={ details.style === 'right' ? { textAlign: 'left' } : { textAlign: 'right' } }>
                <h1 className={styles['project-title__project-content']} >{details.name}</h1>
                <div>
                    <a 
                        href={details.link}
                        className={styles['project-link__project-content']}
                        style={ details.style === 'right' ? { margin: '0 10px 0 0' } : { margin: '0 0 0 10px' } }
                    >
                        <FontAwesomeIcon icon={faLink} />
                    </a>
                    <a 
                        href={details.repo}
                        className={styles['project-link__project-content']}
                        style={ details.style === 'right' ? { margin: '0 10px 0 0' } : { margin: '0 0 0 10px' } }
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <p className={styles['project-decription__project-content']}>{details.description}</p>
                <div className={styles['project-tags__projects']} style={ details.style === 'right' ? { justifyContent: 'flex-start' } : { justifyContent: 'flex-end' } }>
                    {details.tags.map((tag, i) => {
                        return (
                            <motion.div
                                variants={icon}
                                whileHover="hover"
                                key={i}
                            >
                                <FontAwesomeIcon icon={tag} key={i} className={styles['project-tag__project-tags']} style={ details.style === 'right' ? { margin: '0 10px 0 0' } : { margin: '0 0 0 10px' } } />
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </motion.div>
    )
}

export default Project;