'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss'

interface InputProps {
    uniqueId: string
    label: string
    defaultValue?: string
    placeholder?: string
    isMultiline?: boolean
    onChange?: (value: string) => void
}

const Input: React.FC<InputProps> = ({
    uniqueId,
    defaultValue,
    label,
    placeholder,
    isMultiline,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue || '')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        onChange?.(newValue)
    }

    return (
        <div className={clsx(styles['ral-field'])}>
            <label htmlFor={uniqueId} className="sr-only">
                {label}
            </label>

            {isMultiline && (
                <textarea
                    id={uniqueId}
                    value={value}
                    className={clsx({
                        [styles['ral-input']]: true,
                        [styles['ral-input--multiline']]: isMultiline
                    })}
                    {...(placeholder && { placeholder: placeholder })}
                    onChange={handleChange}
                    data-testid="ral-test--input"
                    {...props}
                ></textarea>
            )}

            {!isMultiline && (
                <input
                    id={uniqueId}
                    value={value}
                    className={clsx(styles['ral-input'])}
                    {...(placeholder && { placeholder: placeholder })}
                    onChange={handleChange}
                    data-testid="ral-test--input"
                    {...props}
                />
            )}
        </div>
    )
}

export default Input
