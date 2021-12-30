import SectionContainer from "../../SectionContainer/SectionContainer";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import styles from "./About.module.scss";

function About() {
    return (
        <section>
            <SectionContainer section={'About'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInnerTitle}>
                        <div className={styles.caption}>About</div>
                        <h2 className={styles.sectionTitle}>Who I am</h2>
                        <p className={styles.aboutBodyTitle}>I didn't choose web design, web design chose me.</p>
                        <p className={styles.aboutBody}>My first introduction to web design was in 2016 at North Dakota State University. I needed an easy class to fill my final semester so I enrolled in [CLASS NAME]. That class blew my mind! I couldn’t believe that my code could turn into a not-so-beautiful website. It wasn’t pretty, but it was real. However, I had my sights set on a different career path; after graduation I didn’t give web design a second thought.</p>
                        <p className={styles.aboutBody}>My next encounter with coding was 2 years later at Minnesota State University Moorhead. This time I was required to take 3 semesters of web related classes, although I still had no interest in pursuing web design. However, in 2019, just as I was completing my second degree, a web design & development position opened up at CoSchedule where I was interning. I was nowhere near qualified for the position, but the team at CoSchedule believed in me. I got the job and the rest is history!</p>
                        <p className={styles.aboutBody}>Building delightful web experiences brings me great joy. Everyday I get to use empathy to relate to users, solve problems that improve the user experience, and...  I love learning new technologies and languages. And continuously challenge myself to write better code and implement best practices.</p>
                        <ButtonLink url={'https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/'} title={'Send me a message on LinkedIn'} buttonOutline>
                            Send me a message
                        </ButtonLink>
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default About;