import { PropsWithChildren } from 'react'
import styles from './Row.module.scss'

interface RowProps extends PropsWithChildren {
    justifyContent?: 'between'
    height?: 'full' | 'eighth' | 'normal'
    responsive?: boolean
}

export const Row = ({
    children,
    justifyContent,
    height,
    responsive = true,
}: RowProps): React.JSX.Element => {
    let classes = [`${styles.row}`]

    if (height === 'full') {
        classes.push(` ${styles[`row--full-height`]}`)
    }

    if (height === 'eighth') {
        classes.push(` ${styles[`row--eighth`]}`)
    }

    if (height === 'normal') {
        classes.push(` ${styles[`row--normal`]}`)
    }

    if (justifyContent) {
        classes.push(` ${styles[`row--between`]}`)
    }

    if (responsive) {
        classes.push(` ${styles[`row--responsive`]}`)
    }

    const className = classes.join('')

    return <div className={className}>{children}</div>
}
