import { PropsWithChildren } from 'react'
import styles from './Column.module.scss'

type columnClasses = 'flex-column--width-60'

interface ColumnProps extends PropsWithChildren {
    classes?: columnClasses[]
}

export const Column = ({
    children,
    classes,
}: ColumnProps): React.JSX.Element => {
    const mapped = classes?.map((className) => {
        return `${styles[className]}`
    })

    const className = mapped
        ? `${styles['flex-column']} ${mapped.join(' ')}`
        : `${styles['flex-column']}`

    return <div className={className}>{children}</div>
}
