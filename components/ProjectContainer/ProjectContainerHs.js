import SectionContainer from '../SectionContainer/SectionContainer';
import Image from 'next/image';
import styles from './ProjectContainer.module.scss';
import cn from 'classnames';

function ProjectContainerHS() {
    return (
    <> 
        <SectionContainer>
        <div className={styles.contentContainer}>
            <aside className={styles.projectTocContainer}>
            <div className={styles.tableOfContents}>
                <ul>
                    <li><a href="#problem">Problem</a></li>
                    <li><a href="#challenges">Challenges</a></li>
                    <li><a href="#process">Process</a></li>
                    <li><a href="#outcomes">Outcomes</a></li>
                    {/* <li><a href="#role">Role</a></li> */}
                </ul>
            </div>
            </aside>
            <div className={styles.projectHeadingContainer}>
                <div className={styles.projectCaption}>Headline Studio by CoSchedule</div>
                <h1 className={styles.projectTitle}>New Product Signup Page</h1>
            </div>
            <div className={styles.projectBodyContainer}>
                
                <div className={styles.imageContainer}>
                    <Image
                    src="/img/work/project-screenshots-b-hs.png"
                    alt="Headline Studio by CoSchedule"
                    layout="responsive"
                    width={960}
                    height={540}
                    />
                </div>
                
                <h2 id="problem" className={styles.projectBodyTitle}>Problem</h2>
                <p className={styles.projectBodyParagraph}>CoSchedule Headline Analyzer was launched in 20?? and quickly became the #1 Free Headline Analyzer tool. X years later the analyzer had become slow and outdated.</p>
                <p className={styles.projectBodyParagraph}>To bring users the best experience possible it was time to turn Headline Analyzer into a higher performing web application with all new premium features. So, Headline Studio was born.</p>
                <p className={styles.projectBodyParagraph}>A new app means a new product page and sign up. I was responsible for creating the new, high converting signup page for Headline Studio.</p>
                
                <h2 id="challenges" className={styles.projectBodyTitle}>Challenges</h2>
                <p className={styles.projectBodyParagraph}>There were various content challenges from differentiating Headline Studio, the new app, from Headline Analyzer, the old webpage, calling out features that had been upgraded and including new premium features, and deciding whether of not to include pricing.</p>
                <p className={styles.projectBodyParagraph}>The main challenge, however, was to eliminate all friction that prevents visitors from signing up. We want this page to be a converting machine!</p>
                
                <h2 id="process" className={styles.projectBodyTitle}>Process</h2>
                <h3 className={styles.projectBodySubTitleLg}>Research</h3>
                <p className={styles.projectBodyParagraph}>Since the goal of this page was to convert rather than inform, I started by researching high converting squeeze pages. These pages included:</p>
                <ul className={styles.projectBodyList}>
                    <li>A clear call-to-action</li>
                    <li>Minimal distractions (ex. no navigation)</li>
                    <li>Simple form</li>
                    <li>Social proof to build trust</li>
                    <li>FAQ</li>
                    <li>Exit offer</li>
                </ul>
                <h3 className={styles.projectBodySubTitleLg}>Wireframe</h3>
                <p className={styles.projectBodyParagraph}>With these attributes in mind I started creating wireframes. In this state I got a feel for how the content was going to be laid out, set up a visual hierarchy, and decided where to incorporate visual elements.</p>
                <p className={styles.projectBodyParagraph}>Additionally, I explored variations of two key elements: sign up and pricing.</p>
                <h4 className={styles.projectBodySubTitleMd}>Sign up</h4>
                <p className={styles.projectBodyParagraph}>I created page layouts with no form, a static form, and a sticky form.</p>
                <p className={styles.projectBodyParagraph}><strong>No form &#8211;</strong> From previous tests we knew that reducing the number of clicks to sign up increases conversion rates. Therefore, the no form version was out. The form had to be on the page.</p>
                <p className={styles.projectBodyParagraph}><strong>Static form &#8211;</strong>Webpages are like billboards, you only have a few seconds to get your message across. Some visitors may scroll and skim the headings, but the vast majority will leave if the call to action is unclear.</p>
                <p className={styles.projectBodyParagraph}>In order to make the sign up form immediately visible it was placed "above the fold."</p>
                <p className={styles.projectBodyParagraph}><em>Mobile note: the form requires a click to open on mobile, however we know the majority of our users are on desktop. This was not a big concern.</em></p>
                <p className={styles.projectBodyParagraph}><strong>Sticky form &#8211;</strong> Now that we have the form on the page, I took it one step further. Because there is a lot of content on the page it's very long. Instead of making the visitor find the form at the top of the page, the layout accommodated space for the form to follow them down the page.</p>
                <h4 className={styles.projectBodySubTitleMd}>Pricing</h4>
                <p className={styles.projectBodyParagraph}>The pricing section has a big job - to make the user feel informed enough to make a purchasing decision. It has to communicate complex information in an easy-to-understand way.</p>
                <p className={styles.projectBodyParagraph}>We went through a dozen versions of pricing with conversations around:</p>
                <ul className={styles.projectBodyList}>
                    <li>How much information is too much information?</li>
                    <li>Do we keep it simple with basic details or include a full comparison chart?</li>
                    <li>Do we include the free plan or only the paid plans?</li>
                    <li>How do we show the savings between monthly and annual pricing?</li>
                </ul>
                <p className={styles.projectBodyParagraph}>In the end, the pricing section was designed to focus on the paid plans, highlighting the premium features Headline Studio Pro includes. A toggle was used to compare monthly and annual prices. And it was important to include the free plan for visitors who were not ready to purchase, therefore, a small callout was added under the paid plans.</p>
                <h3 className={styles.projectBodySubTitleLg}>Design</h3>
                <p className={styles.projectBodyParagraph}>Once we were feeling good about the layout, I moved on to design. Not only did this include the page design, but also all the page graphics and icons.</p>
                <p className={styles.projectBodyParagraph}>The Headline Studio brand uses unique colors and icon styles that differentiate it from the main CoSchedule bran. To unify the brands the same font family is use.</p>
                <p className={styles.projectBodyParagraph}>Since This was the first page for Headline Studio I had the freedom to choose the colors and incorporate new design elements to make it feel fresh.</p>
                <h3 className={styles.projectBodySubTitleLg}>Build</h3>
                <p className={styles.projectBodyParagraph}>Now it was time to bring the page to life. I built the main page using HTML, CSS (LESS), and jQuery. Getting the sign up form connected to our accounts system required help from our engineers.</p>
                <p className={styles.projectBodyParagraph}>Throughout the project I discussed ideas and received feedback from product owners and stakeholders during twice-weekly demos.</p>
                
                <h2 id="outcomes" className={styles.projectBodyTitle}>Outcomes</h2>
                <p className={styles.projectBodyParagraph}>After launch user behavior was watched in Hotjar and conversion rates were measured in Kissmetrics.</p>
                <p className={styles.projectBodyParagraph}>We immediate saw the pricing button in the navigation was getting the most clicks. Of course people want to know the price. In order to see how pricing was affecting our conversions we ran and A/B test.</p>
                <p className={styles.projectBodyParagraph}>The answer was clear, the no pricing version converted significantly higher. Although we spent a lot of time on the pricing section it had to go. In this stage of the user journey pricing was not necessary. It was a distraction. We didn't want visitors to get hung up on the price, they needed to experience the value. And if they choose not to purchase, they can still use the tool for free!</p>
                <p className={styles.projectBodyParagraph}>With cross-team collaboration, research, and refinement the Headline Studio sign up page is a consistently high converting page.</p>
                {/* <h2 id="role" className={styles.projectBodyTitle}>Role</h2> */}
                <div className={styles.projectDetailsContainer}>
                    <div className={cn(styles.projectDetailsGroup, styles.descriptionOrganization)}>
                        <h4 className={styles.projectDetailsTitle}>Organization</h4>
                        <ul className={styles.projectDetailsList}>
                            <li className={styles.descriptionListItem}>CoSchedule</li>
                        </ul>
                    </div>
                    <div className={cn(styles.projectDetailsGroup, styles.descriptionWork)}>
                        <h4 className={styles.projectDetailsTitle}>Work</h4>
                        <ul className={styles.projectDetailsList}>
                            <li className={styles.descriptionListItem}>Design</li>
                            <li className={styles.descriptionListItem}>Front-end development</li>                        
                        </ul>
                    </div>
                    <div className={cn(styles.projectDetailsGroup, styles.descriptionLanguages)}>
                        <h4 className={styles.projectDetailsTitle}>Languages</h4>
                        <ul className={styles.projectDetailsList}>
                            <li className={styles.descriptionListItem}>HTML</li>
                            <li className={styles.descriptionListItem}>CSS (LESS)</li>
                            <li className={styles.descriptionListItem}>jQuery</li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </SectionContainer>

    </>
    )
}

export default ProjectContainerHS