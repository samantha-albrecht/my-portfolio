import SectionContainer from "../../SectionContainer/SectionContainer";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";
import styles from "./About.module.scss";
import Image from "next/image";
import cn from "classnames";

function About() {
    return (
        <section id="about">
            <SectionContainer section={'About'}>
                <div className={styles.contentContainer}>
                    <div className={styles.textContainer}>
                        <div className={styles.caption}>About</div>
                        <h2 className={styles.sectionTitle}>Who I am</h2>
                        <p className={styles.aboutBodyTitle}>Strengths: learner, responsibility, input, deliberative, individualization</p>
                        {/* <p className={styles.aboutBodyTitle}>I didn't choose web design, web design chose me.</p> */}
                        <p className={styles.aboutBody}>In 2016 I needed an easy class to fill my final semester at NDSU, so I enrolled in Intro to Web Design. Mind blown! I couldn’t believe I could turn code into a (terribly designed) website. But, I had my sights set on a different career path after graduation.</p>
                        <p className={styles.aboutBody}>Two years later, at MSUM I was required to take three design &amp; development related classes. I still had no interest in pursuing it as a career. However, as I was completing my degree, a web design &amp; development position opened up at CoSchedule where I was interning. I feel qualified for the position, but the team at CoSchedule believed in me. I got the job and haven’t looked back!</p>
                        <p className={styles.aboutBody}>Everyday I get to use empathy to relate to users and solve problems that improve the user experience. I continuously challenge myself to make better connections, design better solutions, and write better code.</p>
                        <p className={styles.aboutBody}>And I like to have fun along the way! You can count me in to participate in all company events, especially if it involves dressing&nbsp;up.</p>
                        <ButtonLink url={'https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/'} title={'Send me a message on LinkedIn'} buttonOutline={'Dark'}>
                            Send me a message
                        </ButtonLink>
                    </div>
                    <div className={styles.imagesContainer}>
                        <div className={styles.imagesLayout}>
                            <div className={cn(styles.imageInner, styles.imageInnerHeadshot)}>
                                <div className={styles.image}>
                                    <Image
                                        src="/img/about/headshot.png"
                                        alt="Samantha headshot"
                                        layout="responsive"
                                        objectFit="cover"
                                        width={400}
                                        height={380}
                                        />
                                </div>
                            </div>
                            <div className={cn(styles.imageInner, styles.imageInnerWacky)}>
                                <div className={styles.image}>
                                    <Image
                                        src="/img/about/wacky-wednesday.png"
                                        alt="Samantha dressed for Wacky Wednesday"
                                        layout="responsive"
                                        objectFit="cover"
                                        width={400}
                                        height={380}
                                        />
                                </div>
                            </div>
                            <div className={cn(styles.imageInner, styles.imageInnerHalloween)}>
                                <div className={styles.image}>
                                    <Image
                                        src="/img/about/halloween.png"
                                        alt="Samantha dressed as Inspector Gadget"
                                        layout="responsive"
                                        objectFit="cover"
                                        width={400}
                                        height={800}
                                        />
                                </div>
                            </div>
                        </div>
                        <p className={styles.imageCredit}><span>Photos by:</span><br/>Haley Frost Creative &amp; CoSchedule</p>
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default About;