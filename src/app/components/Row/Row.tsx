import { PropsWithChildren } from 'react'
import styles from './Row.module.scss'

interface RowProps extends PropsWithChildren {
    justifyContent?: 'between'
    fullHeight?: boolean
}

export const Row = ({
    children,
    justifyContent,
    fullHeight,
}: RowProps): JSX.Element => {
    let classes = [`${styles.row}`]

    if (fullHeight) {
        classes.push(` ${styles[`row--full-height`]}`)
    }

    if (justifyContent) {
        classes.push(` ${styles[`row--between`]}`)
    }

    const className = classes.join('')

    return <div className={className}>{children}</div>
}
