import { PropsWithChildren } from 'react'
import styles from './Row.module.scss'

interface RowProps extends PropsWithChildren {
    variant?: 'between'
}

export const Row = ({ children, variant }: RowProps): JSX.Element => {
    const className = variant ? `${styles[`row--${variant}`]}` : `${styles.row}`
    return <div className={className}>{children}</div>
}
