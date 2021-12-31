import styles from './Header.module.scss'
import cn from 'classnames'
import { useEffect, useState } from 'react';
import SectionContainer from '../SectionContainer/SectionContainer';

let navItems = [
    { name: 'Work', id: 'work', isSubNav: true },
    { name: 'Process', id: 'process', isSubNav: true },
    { name: 'Experience', id: 'experience', isSubNav: true },
    { name: 'Books', id: 'books', isSubNav: false },
    { name: 'About', id: 'about', isSubNav: false },
];

function SubNav() {  
    return (
        <nav>
            <ul className={styles.navList}>
                {navItems
                .filter( navItem => navItem.isSubNav )
                .map( navItem => <li className={styles.navItem}><a href={`#${navItem.id}`} title={`Jump to ${navItem.id} section`}>{navItem.name}</a></li> )
                }
            </ul>
        </nav>
    )
}

function FullNav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navList}>
                {navItems.map( navItem => <li className={styles.navItem}><a href={`#${navItem.id}`} title={`Jump to ${navItem.id} section`}>{navItem.name}</a></li> )}
            </ul>
        </nav>
    )
}

const Overlay = ({ show, click }) =>
show ? <div className={styles.overlay} onClick={click} /> : null;

function Header() {
    const [showHeader, setShowHeader] = useState(false);
    const [headerState, setHeaderState] = useState('initial');
    const [animateSlideIn, setAnimateSlideIn] = useState(false);
    const navToggle = () => {
        setShowHeader((prev) => !prev);
    };

    useEffect ( () => {
        let lastScrollPosition = window.scrollY;

        const showHideHeader = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > 100) {
                setAnimateSlideIn(true);
            } else {
                setAnimateSlideIn(false);
            }

            if(currentScrollPosition < 100) {
                setHeaderState('initial');
            } else if (currentScrollPosition < lastScrollPosition) {
                setHeaderState('show');
            } else {
                setHeaderState('hide');
                setShowHeader(false);
            }

            lastScrollPosition = currentScrollPosition;
        };
        document.addEventListener('scroll', showHideHeader);
        return () => document.removeEventListener('scroll', showHideHeader);
    }, [headerState]);

    return (
        <header>
            <SectionContainer section={'Header'}>
                <div className={cn(styles.header, {
                    [styles.visible]: headerState === 'show',
                    [styles.hide]: headerState === 'hide',
                    [styles.animateSlideIn]: animateSlideIn,
                    })}
                >
                    <div className={styles.container}>
                        <div className={styles.headerContainer}>
                            <div className={styles.headerInner}>
                                <h1 className={styles.title} >Samantha Albrecht</h1>
                                <div className={styles.subNav}>
                                    <SubNav />
                                    <button className={styles.navOpen} onClick={navToggle} title="Open navigation">
                                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg">
                                            <polyline points="9 18 15 12 9 6"></polyline>
                                        </svg>
                                    </button>
                                </div>
                                <div className={cn(styles.fullNav, {
                                    [styles.fullNavVisible]: showHeader,
                                    })}
                                >
                                    <FullNav />
                                    <a href="https://www.linkedin.com/in/samantha-albrecht-%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB-998053156/" rel="noopener noreferrer nofollow" className={styles.secondaryButton}>Contact</a>
                                    <button className={styles.navClose} onClick={navToggle}>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg">
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <Overlay show={showHeader} onClick={navToggle}/>
                            </div>
                        </div>
                    </div>
                </div>  
            </SectionContainer>
        </header>  
    )
}
export default Header