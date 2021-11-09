import styles from './Navbar.module.css'


function Navbar() {    
    return (
        <nav className={styles.navWrapper}>
            <div className={styles.navLeft}>
                <p>Samantha Albrecht</p>
            </div>
            <div className={styles.navRight}>
                <ul className={styles.navList}>
                    <li className={styles.navItem}>Work</li>
                    <li className={styles.navItem}>Process</li>
                    <li className={styles.navItem}>Experience</li>
                    <li className={styles.navItem}>Books</li>
                    <li className={styles.navItem}>About</li>
                    <li className={styles.navItem}>Contact</li>
                </ul>
            </div>
        </nav>    
    )
}
export default Navbar