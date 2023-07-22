import { linksType } from '../../data/mockHeroData'
import { PropsWithChildren, useState } from 'react'
import styles from './Navbar.module.scss'
import { ArrowIcon } from '../ArrowIcon/ArrowIcon'
import { Row } from '../Row/Row'
import Image from 'next/image'
import dlpLogo from '../../../../public/dlp-logo.svg'

interface NavbarProps extends PropsWithChildren {
    logoUrl: string
    links: linksType[]
}
interface NavItemProps extends PropsWithChildren {
    text: string
    linkUrl: string
}

const NavItem = ({ text, linkUrl }: NavItemProps): JSX.Element => {
    const [hovering, setHovering] = useState(false)

    const onHover = () => {
        setHovering((prevState) => !prevState)
    }

    return (
        <>
            <a href={linkUrl} className={styles['navbar__link']}>
                <li
                    className={styles['navbar__item']}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                >
                    {text}
                    {hovering ? (
                        <ArrowIcon chevron size="small" />
                    ) : (
                        <ArrowIcon empty />
                    )}
                </li>
            </a>
        </>
    )
}

export const Navbar = ({ links, logoUrl }: NavbarProps): JSX.Element => {
    return (
        <div className={styles.navbar}>
            <Row justifyContent="between">
                <div className={styles['navbar__logo']}>
                    <Image
                        src={dlpLogo}
                        alt="logo for Digital Litigation Partners"
                    />
                </div>
                <ul className={styles['navbar__links']}>
                    {links.map((link, index) => {
                        return (
                            <NavItem
                                key={`navbar-item-${index}`}
                                text={link.text}
                                linkUrl={link.url}
                            />
                        )
                    })}
                </ul>
            </Row>
        </div>
    )
}
