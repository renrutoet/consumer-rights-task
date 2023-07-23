import styles from './ArrowIcon.module.scss'

interface ArrowIconProps {
    chevron?: boolean
    size?: 'small' | 'med' | 'large'
    empty?: boolean
}

export const ArrowIcon = ({
    chevron = false,
    size = 'med',
    empty = false,
}: ArrowIconProps) => {
    const containerClass =
        size === 'med'
            ? `${styles.container}`
            : `${styles.container}  ${styles[`container--${size}`]}`

    if (empty) {
        return <div className={`${styles.container}`}></div>
    }

    if (chevron) {
        return (
            <div className={containerClass}>
                {chevron ? null : <div className={`${styles.middle}`}></div>}
                <div className={`${styles.left}`}></div>
                <div className={`${styles.right}`}></div>
            </div>
        )
    }

    return (
        <div className={containerClass}>
            {chevron ? null : <div className={`${styles.middle}`}></div>}
            <div className={`${styles['left--arrow']}`}></div>
            <div className={`${styles['right--arrow']}`}></div>
        </div>
    )
}
