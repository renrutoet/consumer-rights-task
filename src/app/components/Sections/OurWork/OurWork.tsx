import { ReactNode } from 'react'
import Image from 'next/image'
import wordpressLogo from '../../../../../public/wordpress-logo.svg'
import reactLogo from '../../../../../public/react-logo.svg'
import gatsbyLogo from '../../../../../public/gatsby-logo.svg'
import phoneImage from '../../../../../public/dlp-phone.png'
import pageStyles from '../../../styles/Page.module.scss'
import textStyles from '../../../styles/text.module.scss'
import ourWorkstyles from './OurWork.module.scss'

const mockData = [
    {
        title: 'Web design and development',
        body: 'Donec sed eros augue. Aliquam aliquet velit eget massa luctus, quis consectetur ex interdum. Cras nibh enim, vulputate necturpis ac, tincidunt molestie nibh. Aliquam a cursus felis. Sedvestibulum id quam feugiat efficitur. Etiam rhoncus pretium quamat cursus. Donec ac porttitor neque. In venenatis at lectus nontempus.',
        buttonText: 'LEARN MORE',
    },
    {
        title: 'Search engine optimization',
        body: 'Donec sed eros augue. Aliquam aliquet velit eget massa luctus, quis consectetur ex interdum. Cras nibh enim, vulputate necturpis ac, tincidunt molestie nibh. Aliquam a cursus felis. Sedvestibulum id quam feugiat efficitur. Etiam rhoncus pretium quamat cursus. Donec ac porttitor neque. In venenatis at lectus nontempus.',
        buttonText: 'LEARN MORE',
    },
]

interface ContentProps {
    title: ReactNode
    body: string
    buttonText: string
    alignment?: 'left' | 'right'
}

const WebSectionTitle = (): JSX.Element => {
    return (
        <h4
            className={`${textStyles['font--primary']} ${ourWorkstyles['content__title']}`}
        >
            <em>Web </em>
            <span className={`${textStyles['font-secondary']}`}>
                <em>design</em>
            </span>{' '}
            <p>and development</p>
        </h4>
    )
}
const SEOSectionTitle = (): JSX.Element => {
    return (
        <h4
            className={`${textStyles['font--primary']} ${ourWorkstyles['content__title']}`}
        >
            <em>Search </em>
            <span className={`${textStyles['font-secondary']}`}>
                <em>engine</em>
            </span>{' '}
            <p>optimization</p>
        </h4>
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
            <div className={`${ourWorkstyles['content__background-text']}`}>
                Digital Marketing
            </div>

            <div className={`${ourWorkstyles['our-work__grid']} `}>
                <aside
                    className={`${ourWorkstyles['content__web-dev-aside']} `}
                >
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
                </aside>
                <Content
                    title={WebSectionTitle()}
                    body={mockData[0].body}
                    buttonText={mockData[0].buttonText}
                    alignment="left"
                />

                <Content
                    title={SEOSectionTitle()}
                    body={mockData[1].body}
                    buttonText={mockData[1].buttonText}
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
