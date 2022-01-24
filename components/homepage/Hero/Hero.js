import SectionContainer from '../../SectionContainer/SectionContainer';
import ButtonLink from '../../ui/ButtonLink/ButtonLink';
import styles from './Hero.module.scss';

function Hero() {
    return (
        <section>
            <SectionContainer section={'Hero'}>
                <div className={styles.contentContainer}>
                    <div className={styles.contentInner}>
                        <div className={styles.caption}>Hi, I'm Samantha &mdash;</div>
                        <h1 className={styles.title}>Designer, developer &amp; creative problem&nbsp;solver</h1>
                        {/* <h1 className={styles.title}>I design &amp; build web experiences that convert</h1> */}
                        <ButtonLink url={'#work'} title={'Jump to work section'}>
                            See my work
                        </ButtonLink>
                    </div>
                    <img
                    className={styles.image}
                    src="/img/hero/hero-graphic.png"
                    alt="design and development graphic"
                    width={240}
                    height={240}
                    />
                    <div className={styles.squareLarge}></div>
                    <div className={styles.squareSmall}></div>
                </div>
            </SectionContainer>
        </section>
    )
}

export default Hero;