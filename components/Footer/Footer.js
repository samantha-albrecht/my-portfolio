import SectionContainer from '../SectionContainer/SectionContainer'
import styles from './Footer.module.scss'

function Footer() {    
    return (
        <footer>
            <SectionContainer section={'Footer'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInner}>
                        <p>&#169; 2021 Samantha Albrecht</p>
                        <div className={styles.socialContainer}>
                            <a href="https://www.linkedin.com/">LinkedIn</a>
                            <a href="https://github.com/">View Source</a>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </footer>            
    )
}
export default Footer