import cn from "classnames";
import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./Process.module.scss";

function Process() {
    return (
        <section  id="process">
            <SectionContainer section={'Process'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInnerTitle}>
                        <div className={styles.caption}>Process</div>
                        <h2 className={styles.sectionTitle}>End-to-End Design</h2>
                        <p className={styles.sectionBody}>As a designer I’m involved in all parts of the project lifecycle:</p>
                    </div>
                    <div className={cn(styles.processContainer, styles.processDefine)}>
                        <svg className={styles.processIcon} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm-7 7H3v4c0 1.1.9 2 2 2h4v-2H5v-4zM5 5h4V3H5c-1.1 0-2 .9-2 2v4h2V5zm14-2h-4v2h4v4h2V5c0-1.1-.9-2-2-2zm0 16h-4v2h4c1.1 0 2-.9 2-2v-4h-2v4z"></path></svg>

                        <h3 className={styles.processTitle}>Observe &amp; Define</h3>
                        <p className={styles.processDescription}>Understand how customers are using the product. And identify opportunities for&nbsp;improvement.</p>
                        <p className={styles.toolsListTitle}>Documentation tools I've used:</p>
                        <ul className={styles.toolsList}>
                            <li className={styles.toolsListItem}>Google Docs</li>
                            <li className={styles.toolsListItem}>InVision Freehand</li>
                            <li className={styles.toolsListItem}>And more</li>
                        </ul>
                    </div>
                    <div className={cn(styles.processContainer, styles.processDesign)}>
                        <svg className={styles.processIcon} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.04 10 9c0 3.31-2.69 6-6 6h-1.77c-.28 0-.5.22-.5.5 0 .12.05.23.13.33.41.47.64 1.06.64 1.67A2.5 2.5 0 0112 22zm0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8c.28 0 .5-.22.5-.5a.54.54 0 00-.14-.35c-.41-.46-.63-1.05-.63-1.65a2.5 2.5 0 012.5-2.5H16c2.21 0 4-1.79 4-4 0-3.86-3.59-7-8-7z"></path>
                            <circle cx="6.5" cy="11.5" r="1.5"></circle>
                            <circle cx="9.5" cy="7.5" r="1.5"></circle>
                            <circle cx="14.5" cy="7.5" r="1.5"></circle>
                            <circle cx="17.5" cy="11.5" r="1.5"></circle>
                        </svg>

                        <h3 className={styles.processTitle}>Ideate &amp; Prototype</h3>
                        <p className={styles.processDescription}>Explore possible solutions to challenge assumptions with wireframes and design&nbsp;mockups.</p>
                        <p className={styles.toolsListTitle}>Design programs I've used:</p>
                        <ul className={styles.toolsList}>
                            <li className={styles.toolsListItem}>Balsamiq</li>
                            <li className={styles.toolsListItem}>Sketch</li>
                            <li className={styles.toolsListItem}>Adobe Illustrator</li>
                            <li className={styles.toolsListItem}>And more</li>
                        </ul>
                    </div>
                    <div className={cn(styles.processContainer, styles.processBuild)}>
                        <svg className={styles.processIcon} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path d="M15 4H5v16h14V8h-4V4zM3 2.992C3 2.444 3.447 2 3.999 2H16l5 5v13.993A1 1 0 0 1 20.007 22H3.993A1 1 0 0 1 3 21.008V2.992zM17.657 12l-3.536 3.536-1.414-1.415L14.828 12l-2.12-2.121 1.413-1.415L17.657 12zM6.343 12L9.88 8.464l1.414 1.415L9.172 12l2.12 2.121-1.413 1.415L6.343 12z"></path>
                            </g>
                        </svg>
                        <h3 className={styles.processTitle}>Build &amp; Launch</h3>
                        <p className={styles.processDescription}>Develop a minimum viable product to get in the hands of&nbsp;customers.</p>
                        <p className={styles.toolsListTitle}>Coding languages I've used:</p>
                        <ul className={styles.toolsList}>
                            <li className={styles.toolsListItem}>HTML</li>
                            <li className={styles.toolsListItem}>CSS (SASS)</li>
                            <li className={styles.toolsListItem}>jQuery</li>
                            <li className={styles.toolsListItem}>React (currently learning)</li>
                            <li className={styles.toolsListItem}>And more</li>
                        </ul>
                    </div>
                    <div className={cn(styles.processContainer, styles.processTest)}>
                        <svg className={styles.processIcon} stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"></path>
                            <path d="M7 12h2v5H7zM15 7h2v10h-2zM11 14h2v3h-2zM11 10h2v2h-2z"></path>
                        </svg>

                        <h3 className={styles.processTitle}>Test &amp; Refine</h3>
                        <p className={styles.processDescription}>Gain insight and make improvements based on analytics and real user&nbsp;interactions.</p>
                        <p className={styles.toolsListTitle}>Tracking software I've used:</p>
                        <ul className={styles.toolsList}>
                            <li className={styles.toolsListItem}>Google Analytics</li>
                            <li className={styles.toolsListItem}>Google Search Console</li>
                            <li className={styles.toolsListItem}>VWO</li>
                            <li className={styles.toolsListItem}>Hotjar</li>
                            <li className={styles.toolsListItem}>And more</li>
                        </ul>
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Process;