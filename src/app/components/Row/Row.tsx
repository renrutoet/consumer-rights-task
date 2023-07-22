import { PropsWithChildren } from 'react'
import styles from './Row.module.scss'

interface RowProps extends PropsWithChildren {
    justifyContent?: 'between'
    height?: 'full' | 'eighth'
}

export const Row = ({
    children,
    justifyContent,
    height,
}: RowProps): JSX.Element => {
    let classes = [`${styles.row}`]

    if (height === 'full') {
        classes.push(` ${styles[`row--full-height`]}`)
    }

    if (height === 'eighth') {
        classes.push(` ${styles[`row--eighth`]}`)
    }

    if (justifyContent) {
        classes.push(` ${styles[`row--between`]}`)
    }

    const className = classes.join('')

    return <div className={className}>{children}</div>
}
