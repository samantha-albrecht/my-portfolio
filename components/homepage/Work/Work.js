import cn from "classnames";
import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./Work.module.scss"

function Project() {
    const projects =[
        { 
            descriptionCaption: 'Actionable Marketing Institute by CoSchedule',
            descriptionTitle: 'Online Learning Course Catalog',
            descriptionSubTitle: 'One line about the project goes here.',
            descriptionBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            url: 'https://coschedule.com/actionable-marketing-institute/ami-pro',
            urlTitle: 'Go to Online Learning Course Catalog Page',
            descriptionOrganization: 'CoSchedule',
            descriptionWork: [ 'Design', 'Font-end development' ],
            descriptionLanguages: [ 'WordPress', 'PHP', 'HTML', 'SCSS','jQuery' ],
        },
        { 
            descriptionCaption: 'Headline Studio by CoSchedule',
            descriptionTitle: 'Product Landing Page',
            descriptionSubTitle: 'One line about the project goes here.',
            descriptionBody: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            url: 'https://coschedule.com/headline-studio',
            urlTitle: 'Go to Product Landing Page',
            descriptionOrganization: 'CoSchedule',
            descriptionWork: [ 'Design', 'Font-end development' ],
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
                            <div className={styles.placeholder}></div>
                        </div>
                    </div>
                    <div className={styles.descriptionContainer}>
                        <div className={styles.descriptionUpper}>
                            <div className={styles.descriptionCaption}>{project.descriptionCaption}</div>
                            <h3 className={styles.descriptionTitle}>{project.descriptionTitle}</h3>
                            <h4 className={styles.descriptionSubTitle}>{project.descriptionSubTitle}</h4>
                            <p className={styles.descriptionBody}>{project.descriptionBody}</p>
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
        <section>
            <SectionContainer>
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