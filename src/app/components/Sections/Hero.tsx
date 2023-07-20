import PageStyles from '../../styles/Page.module.scss'
import HeroStyles from './Hero.module.scss'
import { Navbar } from '../Navbar/Navbar'

export const Hero = () => {
    return (
        <section className={`${PageStyles.section}  ${HeroStyles.hero} `}>
            <Navbar />
            <div className={`${HeroStyles['hero-title']}`}>
                <p className={`${HeroStyles['hero-title__pre-text']}`}>
                    We are the{' '}
                </p>
                <h1 className={`${HeroStyles['hero-title__main-text']}`}>
                    Digital Litigation Partners
                </h1>
            </div>
            <div className={`${HeroStyles['call-to-action']}`}>
                <button className={`${HeroStyles['call-to-action__button']}`}>
                    LEARN MORE
                </button>
                <div className={`${HeroStyles['call-to-action__arrow']}`}>
                    arrow
                </div>
            </div>
        </section>
    )
}
