import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Navbar.module.css';
import logo from '../../imgs/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const Navbar = (props) => {
    const { isDark } = props;

    console.log(isDark);
    return (
        <div className={`${styles.navbar} ${isDark === 'dark' ? styles.dark : ''}`}>
            <div className={styles['logo__container']}>
                <motion.img 
                    className={styles.logo} 
                    src={logo} 
                    alt="logo" 
                    whileHover={{ scale: 1.2 }}
                    transition={{
                        type: 'spring',
                        bounce: 0.5,
                        damping: 10
                    }}
                />
                {/* <span style={{ fontWeight: '900' }}>Nathanael</span> */}
            </div>
            <div className={styles['nav-link__container']}>
                <Link to="/" className={styles['nav-link']}>Home</Link>
                <Link to="/projects" className={styles['nav-link']}>Projects</Link>
                <Link to="/contact" className={styles['nav-link']}>Contact</Link>
                <motion.button 
                    onClick={props.click}
                    whileTap={{
                        scale: 0.9
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                        type: 'spring',
                        bounce: 0.5,
                        damping: 10
                    }}
                    className={styles['dark-mode__container']}
                >
                    <FontAwesomeIcon icon={ isDark === 'light' ? faSun : faMoon }>Contact</FontAwesomeIcon>
                </motion.button>
            </div>
        </div>
    )
}

export default Navbar;