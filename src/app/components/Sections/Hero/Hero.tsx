import Image from 'next/image'
import dlpBanner from '../../../../../public/dlp-banner.jpg'
import PageStyles from '../../../styles/Page.module.scss'
import HeroStyles from './Hero.module.scss'
import { Navbar } from '../../Navbar/Navbar'
import { heroData } from '../../../data/mockHeroData'
import { ArrowIcon } from '../../ArrowIcon/ArrowIcon'

export const Hero = () => {
    return (
        <section
            className={`${PageStyles.section}  ${HeroStyles.hero} `}
            id="hero"
        >
            <Image
                alt="3d graph graphic"
                src={dlpBanner}
                placeholder="blur"
                fill
                style={{
                    zIndex: -1,
                    objectFit: 'cover',
                }}
            />
            <Navbar logoUrl="logo" links={heroData.navbar.links} />
            <div className={`${HeroStyles['hero-title']}`}>
                <p className={`${HeroStyles['hero-title__pre-text']}`}>
                    We are the{' '}
                </p>
                <h1 className={`${HeroStyles['hero-title__main-text']}`}>
                    Digital Litigation Partners
                </h1>
            </div>
            <div className={`${HeroStyles['call-to-action']}`}>
                <button className={`${PageStyles['button']}`}>
                    LEARN MORE
                </button>
                <div className={`${HeroStyles['call-to-action__arrow']}`}>
                    <ArrowIcon size="large" />
                </div>
            </div>
        </section>
    )
}
