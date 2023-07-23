import { PropsWithChildren, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dlpLogo from '@public/dlp-logo.svg'
import styles from './Navbar.module.scss'
import { linksType } from '../../../data/mockHeroData'
import { ArrowIcon } from '../../Graphics/ArrowIcon/ArrowIcon'
import { Row } from '../../Layout/Row/Row'

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
            <li
                className={`${styles['navbar__item']}`}
                onMouseEnter={onHover}
                onMouseLeave={onHover}
            >
                <Link href={linkUrl} className={`${styles['navbar__link']}`}>
                    {text}
                </Link>
                {hovering ? (
                    <ArrowIcon chevron size="small" />
                ) : (
                    <ArrowIcon empty />
                )}
            </li>
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
