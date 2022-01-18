import cn from "classnames";
import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./Work.module.scss"
import Image from "next/image";

function Project() {
    const projects =[
        {
            imageSrc: '/img/work/project-screenshots-b-ami.png',
            imageAlt: 'Actionable Marketing Institute by CoSchedule', 
            descriptionCaption: 'Actionable Marketing Institute powered by CoSchedule',
            descriptionTitle: 'Online Learning Course Catalog',
            descriptionBodyTitle: 'Created engaging, user friendly web pages to refresh & renew the AMI product line and increase conversions.',
            url: 'https://coschedule.com/actionable-marketing-institute/ami-pro',
            urlTitle: 'Go to the Actionable Marketing Institute',
            descriptionOrganization: 'CoSchedule',
            descriptionWork: [ 'Design', 'Front-end development' ],
            descriptionLanguages: [ 'WordPress', 'PHP', 'HTML', 'SCSS','jQuery' ],
        },
        { 
            imageSrc: '/img/work/project-screenshots-b-hs.png',
            imageAlt: 'Actionable Marketing Institute by CoSchedule',
            descriptionCaption: 'Headline Studio by CoSchedule',
            descriptionTitle: 'New Product Squeeze Page',
            descriptionBodyTitle: 'Built a high converting product page for the new Headline Studio app using cross-team collaboration, research, and refinement.',
            url: 'https://coschedule.com/headline-studio',
            urlTitle: 'Go to Headline Studio',
            descriptionOrganization: 'CoSchedule',
            descriptionWork: [ 'Design', 'Front-end development' ],
            descriptionLanguages: [ 'HTML', 'SCSS','jQuery' ],
        },
    ]
    
    return (
        <>
        {projects.map( (project, index) => 
            (
                <SectionContainer section={'Work'} key={index}>
                    <div className={styles.contentContainer}>
                        <div className={styles.contentInner}>
                            <div className={styles.imageContainer}>
                                <Image
                                src={project.imageSrc}
                                alt={project.imageAlt}
                                layout="responsive"
                                width={960}
                                height={540}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.descriptionUpper}>
                            <div className={styles.descriptionCaption}>{project.descriptionCaption}</div>
                            <h3 className={styles.descriptionTitle}>{project.descriptionTitle}</h3>
                            <h4 className={styles.descriptionBodyTitle}>{project.descriptionBodyTitle} <span className={styles.descriptionLink}>Learn more.</span></h4>
                            <div className={styles.viewPage}>
                                <a href={project.url} title={project.urlTitle} rel="noreferer" className={styles.viewPageLink}>
                                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"></path>
                                        <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className={cn(styles.descriptionLower, styles.descriptionOrganization)}>
                            <h4 className={styles.descriptionSubTitle}>Organization</h4>
                            <ul className={styles.descriptionList}>
                                <li className={styles.descriptionListItem}>{project.descriptionOrganization}</li>
                            </ul>
                        </div>
                        <div className={cn(styles.descriptionLower, styles.descriptionWork)}>
                            <h4 className={styles.descriptionSubTitle}>Work</h4>
                            <ul className={styles.descriptionList}>
                                {project.descriptionWork.map( descriptionWork => <li className={styles.descriptionListItem}>{descriptionWork}</li> )}
                            </ul>
                        </div>
                        <div className={cn(styles.descriptionLower, styles.descriptionLanguages)}>
                            <h4 className={styles.descriptionSubTitle}>Languages</h4>
                            <ul className={styles.descriptionList}>
                                {project.descriptionLanguages.map( descriptionLanguages => <li className={styles.descriptionListItem}>{descriptionLanguages}</li> )}
                            </ul>
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