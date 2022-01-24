import cn from "classnames";
import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./Work.module.scss"
import Link from "next/link";

function Project() {
    const projects =[
        {
            imageSrc: '/img/work/project-screenshots-ami.png',
            imageAlt: 'Actionable Marketing Institute by CoSchedule', 
            descriptionCaption: 'Actionable Marketing Institute powered by CoSchedule',
            descriptionTitle: 'Online Marketing Course Pages',
            descriptionBodyTitle: 'The challenge: create engaging, user friendly, customizable web pages to refresh & renew the AMI product line.',
            projectUrl: '/work/actionable-marketing-institute',
            url: 'https://coschedule.com/actionable-marketing-institute/ami-pro',
            urlTitle: 'Go to the Actionable Marketing Institute',
        },
        { 
            imageSrc: '/img/work/project-screenshots-hs.png',
            imageAlt: 'Headline Studio by CoSchedule',
            descriptionCaption: 'Headline Studio by CoSchedule',
            descriptionTitle: 'New Product Sign Up Page',
            descriptionBodyTitle: 'The challenge: design & build a high converting product page with sign up for the new Headline Studio app.',
            projectUrl: '/work/headline-studio',
            url: 'https://coschedule.com/headline-studio',
            urlTitle: 'Go to Headline Studio',
        },
    ]
    
    return (
        <>
        {projects.map( (project, index) => 
            (
                <SectionContainer section={'Work'} key={index}>
                    <div className={styles.contentContainer}>
                        <div className={styles.contentInner}>
                            <img
                            className={styles.image}
                            src={project.imageSrc}
                            alt={project.imageAlt}
                            width={960}
                            height={540}
                            loading="lazy"
                            />
                        </div>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.descriptionUpper}>
                            <div className={styles.descriptionCaption}>{project.descriptionCaption}</div>
                            <h3 className={styles.descriptionTitle}>{project.descriptionTitle}</h3>
                            <h4 className={styles.descriptionBodyTitle}>{project.descriptionBodyTitle} <Link href={project.projectUrl}><a className={styles.descriptionLink}>Learn more about this project.</a></Link></h4>
                            <div className={styles.viewPage}>
                                <a href={project.url} title={project.urlTitle} rel="noreferer" className={styles.viewPageLink}>
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path>
                                        <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </SectionContainer>
            )
        )}
        </>
    );
}

function Work() {
    return (
        <section id="work">
            <SectionContainer section={'WorkTitle'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInnerTitle}>
                        <div className={styles.caption}>Work</div>
                        <h2 className={styles.sectionTitle}>Things I've built</h2>
                    </div>
                </div>
            </SectionContainer>
            <Project/>
        </section>
    )
}

export default Work;