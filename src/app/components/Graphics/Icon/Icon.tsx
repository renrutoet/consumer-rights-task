import { PropsWithChildren, ReactNode } from 'react'
import styles from './Icon.module.scss'

interface IconProps extends PropsWithChildren {
    text?: string
    circle?: boolean
    fixed?: boolean
}

export const IconWrapper = ({
    text,
    children,
    circle = false,
    fixed = false,
}: IconProps): JSX.Element => {
    return (
        <div
            className={
                fixed
                    ? `${styles['c-icon__container--fixed']} `
                    : `${styles['c-icon__container']} `
            }
        >
            <div className={circle ? `${styles['c-icon__circle']} ` : ''}>
                {children}
            </div>
            {text ? (
                <div className={`${styles['c-icon__text']} `}>{text}</div>
            ) : null}
        </div>
    )
}
