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
                                    <svg className={styles.companyLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                        <path d="M155.6 96.2c-7.2-1.3-14.2 3.5-15.5 10.7-3.6 19.7-20.8 34-40.9 33.9-22.7-.2-41.2-18.8-41.1-41.6.1-22.7 18.7-41.2 41.5-41.1 1.7 0 3.3.1 5 .3 7.2.9 13.9-4.3 14.9-11.6.9-7.3-4.3-13.9-11.6-14.9-2.7-.3-5.5-.5-8.2-.5-37.4-.1-68.1 30.3-68.2 67.8s30.3 68.1 67.8 68.3c33 .1 61.2-23.3 67.2-55.8 1.2-7.3-3.6-14.3-10.9-15.5zm-61.5-13c-5.2-5.2-13.6-5.2-18.8 0-5.2 5.2-5.2 13.6 0 18.8l24.2 24.2L163.8 62c5.2-5.2 5.2-13.6 0-18.8s-13.6-5.2-18.8 0L99.5 88.6l-5.4-5.4z" style={{fill: "#d4765d"}}/>
                                        <path style={{fill: "#c15c48"}} d="m99.5 88.6 18.8 18.8-12.6-24.9z"/>
                                    </svg>
                                    <h4 className={styles.subTitle}>Web designer</h4>
                                    <div className={styles.date}>April 2021 - Present</div>
                                </div>
                                <ul className={styles.jobList}>
                                    <li>Increase conversion rates on multiple pages by up to 50% through A/B&nbsp;testing.</li>
                                    {/* <li>Improve overall website performance to meet Google’s Page Experience&nbsp;Signals.</li> */}
                                    {/* <li>Collaborate with cross-functional team to align the website strategy with business&nbsp;objectives.</li> */}
                                    <li>Organize and promote employee engagement events, such as homecoming week, annual chili cook-off, and donation drives as a member of the “Spirit&nbsp;Team.”</li>
                                </ul>
                                <div className={styles.subTitleLayout}>
                                    <h4 className={styles.subTitle}>Jr. Web designer</h4>
                                    <div className={styles.date}>April 2020 - April 2021</div>
                                </div>
                                <ul className={styles.jobList}>
                                    {/* <li>Elevated academy product line with custom designed and built Wordpress templates for the marketing&nbsp;team.</li> */}
                                    <li>Participated in the end-to-end design process from initial ideation, wireframes, and design to building function responsive web&nbsp;pages.</li>
                                    {/* <li>Transitioned between multiple product lines with distinct branding&nbsp;guidelines.</li> */}
                                    {/* <li>Communicate with and seek feedback from project stakeholders throughout project&nbsp;lifecycle.</li> */}
                                </ul>
                                <div className={styles.subTitleLayout}>
                                    <h4 className={styles.subTitle}>Graphic Design Intern</h4>
                                    <div className={styles.date}>January 2019 - April 2020</div>
                                </div>
                                <ul className={styles.jobList}>
                                    {/* <li>Lead designer on a 6-chapter guide distributed to all CoSchedule&nbsp;customers.</li> */}
                                    {/* <li>Create custom graphics for internal marketing team including podcast graphics, conference booth design, and tearsheet&nbsp;layout.</li> */}
                                    <li>Design illustrations and infographics for CoSchedule’s blog to enhance reader experience and content&nbsp;understanding.</li>
                                </ul>
                            </div>
                            <div className={styles.jobContainer}>
                                <h3 className={styles.subCaption}>Dynamic Communities</h3>
                                <div className={styles.subTitleLayout}>
                                    <svg className={styles.companyLogo} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 200 200">
                                        <circle cx="97.7" cy="54.2" r="15.8" style={{fill: "#53a8dd"}}/>
                                        <path d="M148.7 132.3c-20.7 0-38.3-12.5-38.3-27.3s17.5-27.3 38.3-27.3c5.8 0 10.5-4.7 10.5-10.5s-4.7-10.5-10.5-10.5c-20.6 0-38.8 8.6-49.4 21.6 5.8 7.8 9.2 16.9 9.2 26.6 0 9.8-3.4 18.9-9.2 26.6 10.6 13 28.8 21.6 49.4 21.6 5.8 0 10.5-4.7 10.5-10.5s-4.7-10.3-10.5-10.3z" style={{fill: "#3a6eb5"}}/>
                                        <path d="M46.7 153.3c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5c20.7 0 38.3-12.5 38.3-27.3S67.5 77.7 46.7 77.7c-5.8 0-10.5-4.7-10.5-10.5s4.7-10.5 10.5-10.5c32.7 0 59.3 21.7 59.3 48.3 0 26.6-26.6 48.3-59.3 48.3z" style={{fill: "#53a8dd"}}/>
                                    </svg>
                                    <h4 className={styles.subTitle}>Marketing Intern</h4>
                                    <div className={styles.date}>2018-2019</div>
                                </div>
                                <ul className={styles.jobList}>
                                    <li>Responsible for building, updating, and executing tactical marketing plans to promote our small events. <em>Small events had between 100 - 300 attendees and took place in locations around the&nbsp;globe.</em></li>
                                    {/* <li>Created a high volume of marketing materials for each event while adhering to visual identity guidelines. (Materials include marketing kits for speakers &amp; sponsors, social media graphics, email graphics, infographics, videos, and PowerPoint&nbsp;templates.)</li> */}
                                    {/* <li>Designed digital and print onsite signage and coordinated printing &amp; delivery for each event. (Used standard U.S. and International paper&nbsp;sizes.)</li> */}
                                </ul>
                            </div>
                            <div className={styles.educationContainer}>
                                <h3 className={styles.subCaption}>Minnesota State University Moorhead</h3>
                                <div className={styles.subTitleLayout}>
                                    <svg className={styles.companyLogo} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
                                        <path d="m101.5 129 31.1-80h26.6v112h-21.3V78.3c-.8 5.8-1 7.1-4.2 16.6L108 161.1H88.8l12.7-32.1z" style={{fill: "#696059"}}/>
                                        <path d="M82.8 29.1h-.7c16 18.6 14.5 43.1 3.4 68.6L67.4 49.1H40.8v112h20.3V78.3c1.7 9.5 2.2 11.2 4.2 17.8l8.1 22.4 8.1 22.5 4.8 13.5 2.7-6.6c-7.6-18.9-5.2-34.9-.2-46.2C93.6 90.8 101 82.1 105 78.6h.5c-9.1 10-14 32.9-9.9 46.2l1.1 3s0 .1.1.1c3.4-8.8 4.7-12.3 6.2-15.9 20.2-50.8-13.4-78.9-20.2-82.9z" style={{fill: "#af132a"}}/>
                                    </svg>
                                    <h4 className={styles.subTitle}>B.A. Graphic Communications</h4>
                                    <div className={styles.date}>2019</div>
                                </div>
                                <h3 className={styles.subCaption}>North Dakota State University</h3>
                                <div className={styles.subTitleLayout}>
                                    <svg className={styles.companyLogo} xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 200 200">
                                        <path style={{fillRule: "evenodd", clipRule: "evenodd", fill: "#006635"}} d="M132.5 77.9h1.7c-.1 5 0 10.5-.1 15h-2c-1-3.3-2-6.6-4-9.1-2-2.4-4.6-4.5-8.9-4.2-3.9.3-7 3.4-6.5 8.3 0 .4.3 1.3.6 1.8 1.6 2.9 4.9 4.1 8.5 5.2 3.5 1.1 7 2.1 9.7 4 2.8 2 4.8 4.8 4.8 9 0 6.1-4.2 10.2-8.5 12.1-1.5.7-3.4 1.1-5.6.9-3.3-.2-5.5-1.2-7.8-2.5-.7-.4-1.5-1-2.4-1-2.2.1-1.8 3.1-4.9 2.4-.1-5.1-.1-10.3-.1-15.5.6-.2 1.5 0 2.3-.1 1.4 5.7 3.3 10 7.6 12.6 1.2.7 3 1.5 5 1.7 6.1.5 10.5-4.4 8.7-10-2.2-6.9-10.8-6.3-17-9.7-2-1.1-3.7-2.7-4.8-4.9-1-2-1.7-5-.9-8 .8-2.6 2.8-5.2 4.9-6.6 1.7-1.1 4.3-2.1 6.7-2.2 3.4-.1 6.1 1.1 8.3 2.4.6.4 1.1 1.2 2.1 1.1 1.5.1 1.6-2 2.6-2.7zM20.5 77.9h10.8c8 10.1 15.5 20.8 23.4 31.1.1-3.4.1-7.5.1-11.6s.2-8.2 0-11.7c-.2-3.7-2.4-5.5-6.4-5.4 0-.7-.1-1.7.1-2.3 5-.1 9.9.1 14.9.1.2.6 0 1.5.1 2.3-3.1.1-5.6 1.2-5.9 4.2-.3 2.7 0 5.8 0 8.9v26.8c-1 0-2.1.1-3-.1-8.3-10.9-16.3-21.9-24.6-32.7-.1 5.7-.1 13.7-.1 20.4 0 2.8-.4 6 .6 7.7 1.1 1.9 3.3 2.2 6.1 2.5 0 .8.1 1.6-.1 2.2-5.5 0-10.5.1-16 .1-.2-.6 0-1.5-.1-2.2 3-.2 6.1-.9 6.5-3.9.2-1.2 0-2.6 0-3.9v-23c0-1.3.2-2.8.1-3.8-.1-.7-1.1-1.7-1.7-2.2-1.3-.9-3.3-.9-4.9-1.1 0-.9.1-1.5 0-2.2 0-.1.1-.1.1-.2zM65 78.1c10.3.4 21.7-1.2 28.8 2 3.4 1.5 6.2 4.2 8.3 7.2 2.1 3.2 3.2 7.2 3.2 12.2 0 9.6-4.8 16-11.6 19.1-3.8 1.7-8.4 1.7-13.7 1.7-5.1 0-10.1-.1-15.2-.1-.1-.6-.1-1.6 0-2.2 2.5-.1 4.9-.1 5.6-2.2.6-1.7.3-5.1.3-7.8 0-5.1 0-11 .1-15.7 0-2.5.2-5.1-.1-7.8-.2-1.8-1-3.3-2.5-3.8-.9-.3-2.5-.3-3.2-.3-.1-.6-.1-1.4-.1-2.1 0-.1 0-.2.1-.2zm12.7 4.3c-.4.9-.4 2.5-.4 3.9v25.8c0 1.5-.1 3 .3 4 .7 1.5 2.6 1.8 4.5 1.9 4.5.4 8.4-.4 10.9-2.5 1.7-1.4 2.7-3.3 3.4-5.6 1.4-4.5 1.3-11.4.9-16.7-.3-3-.8-5.2-1.9-7.1-2.2-3.7-6.1-5.9-12.4-5.6-2.4.2-4.4.1-5.3 1.9zM179 78v2.4c-2.7.1-4.8.6-5.6 2.6-.5 1.2-.3 3-.3 4.6v14.6c0 3.2.4 6.8-.3 9.5-1.7 7.2-9.7 11.1-19.1 9.1-5-1-9.5-3.9-11-8.5-.6-2-.6-4.5-.6-7.1 0-5.1-.1-9.8-.1-15.1 0-1.2.1-2.5 0-3.8-.1-2.7-.1-4.9-2.2-5.6-1.2-.4-2.5-.1-3.8-.4v-2.2h18.5c0 1.1 0 1.4-.1 2.4-2.8-.1-4.9.1-5.7 1.9-.4.8-.2 2.2-.2 3.2.1 3.5 0 7.7 0 10.8 0 2.5 0 5 .1 7.2 0 2.5-.2 4.9.1 7.2.8 5.7 6.1 8.8 12.6 7.7 4-.7 7.3-3.2 8.5-6.9.7-2.1.5-4.6.5-7.1 0-5-.1-10-.1-14.6 0-3.8.2-7.5-2.4-8.9-1.1-.6-2.5-.4-4.1-.7V78c5.2.1 10.7-.2 15.3 0z"/>
                                    </svg>
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