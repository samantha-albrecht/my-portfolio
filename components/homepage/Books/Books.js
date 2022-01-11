import SectionContainer from "../../SectionContainer/SectionContainer";
import styles from "./Books.module.scss";
import Image from "next/image";

function BooksContent() {
    const books =[
        { 
            title: 'Permission To Screw Up',
            author: 'Kristen Hadeed',
            coverImage: '/img/books/permission-to-screw-up.jpg',
        },
        
        { 
            title: 'Daring Greatly',
            author: 'Brene Brown',
            coverImage: '/img/books/daring-greatly.jpg',
        },
        { 
            title: 'Atomic Habits',
            author: 'James Clear',
            coverImage: '/img/books/atomic-habits.jpg',
        },
        { 
            title: 'Start With Why',
            author: 'Simon Sinek',
            coverImage: '/img/books/start-with-why.jpg',
        },
        { 
            title: 'Leaders Eat Last',
            author: 'Simon Sinek',
            coverImage: '/img/books/leaders-eat-last.jpg',
        },
        { 
            title: 'The Accidental Creative',
            author: 'Todd Henry',
            coverImage: '/img/books/accidental-creative.jpg',
        },
        { 
            title: 'Quiet',
            author: 'Susan Cain',
            coverImage: '/img/books/quiet.jpg',
        },
        { 
            title: 'Make Your Bed',
            author: 'Admiral William H. McRaven',
            coverImage: '/img/books/make-your-bed.jpg',
        },
        { 
            title: 'Man\'s Search For Meaning',
            author: 'Viktor E. Frankl',
            coverImage: '/img/books/mans-search-for-meaning.jpg',
        },
        { 
            title: 'Complete Guide to Money',
            author: 'Dave Ramsey',
            coverImage: '/img/books/complete-guide-to-money.jpg',
        },
    ]

    return (
        <div className={styles.booksContainer}>
            {books.map( (book, index) => 
            (
                <div className={styles.bookGroup} key={index}>
                    <div className={styles.bookCoverImage}>
                        <Image
                        src={book.coverImage}
                        alt={`Book cover image: ${book.title}`}
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                    <p className={styles.bookTitle}>{book.title}</p>
                    <p className={styles.bookAuthor}>{book.author}</p>
                </div>
            )
            )}
        </div>
    )
}

function Books() {
    return (
        <section id="books">
            <SectionContainer section={'Books'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInnerTitle}>
                        <div className={styles.caption}>Books</div>
                        <h2 className={styles.sectionTitle}>What I'm reading</h2>
                        <p className={styles.bookBody}>I haven’t always been an avid reader, but in the last two years I've gained a new appreciation for books and developed a love for reading. I read because I crave new thoughts, ideas, and perspectives that inspire, teach, and challenge&nbsp;me.</p>
                        <p className={styles.bookBodyBold}>These are a few of my favorites:</p>
                    </div>
                    <BooksContent/>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Books;