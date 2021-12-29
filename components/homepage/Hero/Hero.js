import SectionContainer from '../../SectionContainer/SectionContainer';
import ButtonLink from '../../ui/ButtonLink/ButtonLink';
import styles from './Hero.module.scss';

function Hero() {
    return (
        <section>
            <SectionContainer section={'Hero'}>
                <div className={styles.contentInner}>
                                <div className={styles.caption}>Hi, I'm Samantha &mdash;</div>
                                <h1 className={styles.title}>Designer, developer &amp; creative problem solver</h1>
                                <ButtonLink url={'#work'} title={'Jump to work section'}>
                                    See design work
                                </ButtonLink>
                            </div>
            </SectionContainer>
        </section>
    )
}

export default Hero;