import { PropsWithChildren } from 'react'
import styles from './Row.module.scss'

interface RowProps extends PropsWithChildren {
    justifyContent?: 'between' | 'end'
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

    if (height === 'full') {
        classes.push(` ${styles[`row--full-height`]}`)
    }

    if (height === 'eighth') {
        classes.push(` ${styles[`row--eighth`]}`)
    }

    if (height === 'normal') {
        classes.push(` ${styles[`row--normal`]}`)
    }

    if (justifyContent === 'between') {
        classes.push(` ${styles[`row--between`]}`)
    }

    if (justifyContent === 'end') {
        classes.push(` ${styles[`row--end`]}`)
    }

    if (responsive) {
        classes.push(` ${styles[`row--responsive`]}`)
    }

    const className = classes.join('')

    return <div className={className}>{children}</div>
}
