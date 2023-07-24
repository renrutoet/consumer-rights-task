import { ReactNode } from 'react'
import Image from 'next/image'
import dlpBackground from '@public/dlp-block-background.jpg'
import dlpLaptop from '@public//dlp-laptop.png'
import wordpressLogo from '@public/wordpress-logo.svg'
import reactLogo from '@public/react-logo.svg'
import gatsbyLogo from '@public/gatsby-logo.svg'
import phoneImage from '@public/dlp-phone.png'
import pageStyles from '@styles/Page.module.scss'
import textStyles from '@styles/text.module.scss'
import ourWorkstyles from './OurWork.module.scss'
import { Circle } from '@components/Graphics/Circle/Circle'
import { Row } from '@/app/components/Layout/Row/Row'
import { contentData } from '@/app/data/contentData'

interface ContentProps {
    title: ReactNode
    body: string
    buttonText: string
    alignment?: 'left' | 'right'
}

const SectionTitle = (title: string): JSX.Element => {
    const splitTitle = title.split(' ')
    return (
        <h2
            className={`${textStyles['font--primary']} ${ourWorkstyles['content__title']}`}
        >
            <em>{`${splitTitle.slice(0, 1)} `}</em>
            <span className={`${textStyles['font--secondary']}`}>
                <em>{`${splitTitle.slice(1, 2)} `}</em>
            </span>{' '}
            <p>{splitTitle.slice(2).join(' ')}</p>
        </h2>
    )
}

const Content = ({
    title,
    body,
    buttonText,
    alignment,
}: ContentProps): JSX.Element => {
    const containerClass = alignment
        ? `${ourWorkstyles[`content--${alignment}`]} `
        : `${ourWorkstyles['content']}`
    return (
        <div className={containerClass}>
            {title}
            <div
                className={`${textStyles['font--primary']} ${ourWorkstyles['content__body']}`}
            >
                {body}
            </div>
            <button className={`${pageStyles['button']}`}>{buttonText}</button>
        </div>
    )
}

export const OurWork = () => {
    return (
        <section className={`${ourWorkstyles['our-work']} `}>
            <Image
                alt="blurred picture of a laptop"
                src={dlpBackground}
                placeholder="blur"
                fill
                style={{
                    zIndex: -1,
                    objectFit: 'cover',
                }}
            />
            <Image
                alt="cut off picture of a laptop"
                src={dlpLaptop}
                placeholder="blur"
                style={{
                    zIndex: -1,
                    objectFit: 'cover',
                    position: 'absolute',
                    height: 'auto',
                    width: '50%',
                }}
            />
            <div className={`${pageStyles['centered-dash']}`}></div>
            <div className={`${ourWorkstyles['content__background-text']}`}>
                {contentData.ourWork.title}
            </div>
            <div className={`${pageStyles['horizontal-graphic']}`}>
                <div className={`${pageStyles['horizontal-dash']}`}></div>
                <Circle greyScale />
            </div>

            <div className={`${ourWorkstyles['our-work__grid']} `}>
                <aside
                    className={`${ourWorkstyles['content__web-dev-aside']} `}
                >
                    <Row>
                        <Image
                            src={wordpressLogo}
                            alt="image of a smartphone display the google homepage"
                        />
                        <Image
                            src={reactLogo}
                            alt="image of a smartphone display the google homepage"
                        />
                        <Image
                            src={gatsbyLogo}
                            alt="image of a smartphone display the google homepage"
                        />
                    </Row>
                </aside>
                <Content
                    title={SectionTitle(
                        contentData.ourWork.textContent[0].title
                    )}
                    body={contentData.ourWork.textContent[0].body}
                    buttonText={contentData.generic.buttonText}
                    alignment="left"
                />
                <div className={`${pageStyles['horizontal-graphic--left']}`}>
                    <div
                        className={`${pageStyles['horizontal-dash--left']}`}
                    ></div>
                    <Circle greyScale />
                </div>
                <div></div>
                <Content
                    title={SectionTitle(
                        contentData.ourWork.textContent[1].title
                    )}
                    body={contentData.ourWork.textContent[1].body}
                    buttonText={contentData.generic.buttonText}
                    alignment="right"
                />
                <aside
                    className={`${ourWorkstyles['content__seo-image-aside']} `}
                >
                    <Image
                        src={phoneImage}
                        alt="image of a smartphone display the google homepage"
                    />
                </aside>
            </div>
        </section>
    )
}
