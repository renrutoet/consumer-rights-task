import Image from 'next/image'
import dlpBanner from '@public/dlp-banner.jpg'
import PageStyles from '@styles/Page.module.scss'
import HeroStyles from './Hero.module.scss'
import { Navbar } from '@components/UI/Navbar/Navbar'
import { ArrowIcon } from '@components/Graphics/ArrowIcon/ArrowIcon'
import { contentData } from '../../data/contentData'

export const Hero = () => {
    const titleText = contentData.hero.title

    const splitTitle = titleText.split(' ')
    return (
        <section className={`${HeroStyles.hero} `} id="hero">
            <div className={`${HeroStyles['background--vert-fix']}`}>
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
            </div>
            <Navbar logoUrl="logo" links={contentData.hero.navbar.links} />
            <div className={`${HeroStyles['hero-title']}`}>
                <h1 className={`${HeroStyles['hero-title__main-text']}`}>
                    <span className={`${HeroStyles['hero-title__pre-text']}`}>
                        {splitTitle.slice(0, 2).join(' ')}{' '}
                    </span>
                    {splitTitle.slice(2).join(' ')}
                </h1>
            </div>
            <div className={`${HeroStyles['call-to-action']}`}>
                <button className={`${PageStyles['button']}`}>
                    {contentData.generic.buttonText}
                </button>
                <div className={`${HeroStyles['call-to-action__arrow']}`}>
                    <ArrowIcon size="large" />
                </div>
            </div>
        </section>
    )
}
