import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./Experience.module.scss";

function Experience() {
    return (
        <section id="experience">
            <SectionContainer>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInner}>
                        <div className={styles.titleContainer}>
                            <div className={styles.caption}>Experience</div>
                            <h2 className={styles.sectionTitle}>Where I've worked</h2>
                        </div>
                        <div className={styles.mainContainer}>
                            <div className={styles.jobContainer}>
                                <h3 className={styles.subCaption}>CoSchedule</h3>
                                <div className={styles.subTitleLayout}>
                                    <h4 className={styles.subTitle}>Web designer</h4>
                                    <div className={styles.date}>2020-Present</div>
                                </div>
                                <ul className={styles.jobList}>
                                    <li>Lorem ipsum...</li>
                                    <li>Lorem ipsum...</li>
                                    <li>Lorem ipsum...</li>
                                </ul>
                                <div className={styles.subTitleLayout}>
                                    <h4 className={styles.subTitle}>Graphic Design Intern</h4>
                                    <div className={styles.date}>2019-2020</div>
                                </div>
                                <ul className={styles.jobList}>
                                    <li>Lorem ipsum...</li>
                                    <li>Lorem ipsum...</li>
                                    <li>Lorem ipsum...</li>
                                </ul>
                            </div>
                            <div className={styles.jobContainer}>
                                <h3 className={styles.subCaption}>Dynamic Communities</h3>
                                <div className={styles.subTitleLayout}>
                                    <h4 className={styles.subTitle}>Marketing Intern</h4>
                                    <div className={styles.date}>2018-2019</div>
                                </div>
                                <ul className={styles.jobList}>
                                    <li>Lorem ipsum...</li>
                                    <li>Lorem ipsum...</li>
                                    <li>Lorem ipsum...</li>
                                </ul>
                            </div>
                            <div className={styles.educationContainer}>
                                <h3 className={styles.subCaption}>Minnesota State University Moorhead</h3>
                                <div className={styles.subTitleLayout}>
                                    <h4 className={styles.subTitle}>B.A. Graphic Communications</h4>
                                    <div className={styles.date}>2019</div>
                                </div>
                                <h3 className={styles.subCaption}>North Dakota State University</h3>
                                <div className={styles.subTitleLayout}>
                                    <h4 className={styles.subTitle}>B.S. Microbiology</h4>
                                    <div className={styles.date}>2016</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Experience;