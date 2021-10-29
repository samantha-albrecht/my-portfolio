import styles from './Navbar.module.scss'


function Navbar() {    
    return (        
        <div className={styles.container}>I am navbar component
        <div className={styles.main}>Main content</div>
        </div>    
    )
}
export default Navbar