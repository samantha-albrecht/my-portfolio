import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./Books.module.scss";

function Books() {
    return (
        <section id="books">
            <SectionContainer section={'Books'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInnerTitle}>
                        <div className={styles.caption}>Books</div>
                        <h2 className={styles.sectionTitle}>What I'm reading</h2>
                        <p className={styles.bookBody}>I haven’t always been an avid reader, but in the last two years, reading has changed my life. Now, I can’t put a book down! It’s how I start my day and end my day. I read because I crave new thoughts, ideas, and perspectives that inspire, teach, and challenge me.</p>
                        <p className={styles.bookBodyBold}>Here are a few of my favorites:</p>
                    </div>
                    <div className={styles.booksContainer}>
                        <div className={styles.bookGroup}>
                            <div className={styles.placeholder}></div>
                            <p className={styles.bookTitle}>Permission To Screw Up: How I learned to Lead by Doing (Almost) Everything Wrong</p>
                            <p className={styles.bookAuthor}>Kristen Hadeed</p>
                        </div>
                        <div className={styles.bookGroup}>
                            <div className={styles.placeholder}></div>
                            <p className={styles.bookTitle}>Accidental Creative: How to Be Brilliant at a Moment's Notice</p>
                            <p className={styles.bookAuthor}>Todd Henry</p>
                        </div>
                        <div className={styles.bookGroup}>
                            <div className={styles.placeholder}></div>
                            <p className={styles.bookTitle}>Man's Search for Meaning</p>
                            <p className={styles.bookAuthor}>Viktor E. Frankl</p>
                        </div>
                        <div className={styles.bookGroup}>
                            <div className={styles.placeholder}></div>
                            <p className={styles.bookTitle}>Man's Search for Meaning</p>
                            <p className={styles.bookAuthor}>Viktor E. Frankl</p>
                        </div>
                        <div className={styles.bookGroup}>
                            <div className={styles.placeholder}></div>
                            <p className={styles.bookTitle}>Man's Search for Meaning</p>
                            <p className={styles.bookAuthor}>Viktor E. Frankl</p>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Books;