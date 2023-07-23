import { ChangeEvent, HTMLInputTypeAttribute } from 'react'

interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement & HTMLTextAreaElement> {
    type: HTMLInputTypeAttribute
    value: string
    changeCallback: (value: string) => void
}

export const Input = ({
    type = 'text',
    value,
    changeCallback,
    ...remaingProps
}: InputProps): JSX.Element => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        e.preventDefault()

        changeCallback(e.target.value)
    }

    if (type === 'textarea') {
        return (
            <textarea
                placeholder="Message"
                value={value}
                onChange={handleChange}
                {...remaingProps}
            />
        )
    }

    return (
        <input
            type={type}
            value={value}
            onChange={handleChange}
            {...remaingProps}
        />
    )
}
