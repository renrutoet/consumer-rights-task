import { PropsWithChildren, ReactNode } from 'react'
import styles from './Icon.module.scss'

interface IconProps extends PropsWithChildren {
    text?: string
    circle?: boolean
    content: ReactNode
}

export const Icon = ({
    text,
    content,
    circle = false,
}: IconProps): JSX.Element => {
    return (
        <div className={`${styles['c-icon__container']} `}>
            <div className={circle ? `${styles['c-icon__circle']} ` : ''}>
                {content}
            </div>
            {text ? (
                <div className={`${styles['c-icon__text']} `}>{text}</div>
            ) : null}
        </div>
    )
}
