import styles from './Circle.module.scss'

interface CircleProps {
    greyScale?: boolean
}

export const Circle = ({
    greyScale = false,
}: CircleProps): React.JSX.Element => {
    const classExtension = greyScale ? '--greyscale' : ''

    return (
        <div className={`${styles[`outer-circle${classExtension}`]}`}>
            <div className={`${styles[`inner-circle${classExtension}`]}`}>
                <div
                    className={`${styles[`center-dot${classExtension}`]}`}
                ></div>
            </div>
        </div>
    )
}
