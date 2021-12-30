import styles from './SectionContainer.module.scss';
import cn from 'classnames';

function SectionContainer({ children, section }) {
    return (
        <div className={cn (styles.container, { [styles[`section${section}`]]: section})}>
            <div className={styles.gridLayout}>
                <div className={styles.backgroundContainer}></div>
                <div className={styles.guidesContainer}>
                    <div className={styles.guide}></div>
                    <div className={styles.guide}></div>
                    <div className={styles.guide}></div>
                    <div className={styles.guide}></div>
                </div>
                {children}
            </div>
        </div>
    )
}

export default SectionContainer;