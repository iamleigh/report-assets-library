'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import styles from './Input.module.scss'

interface InputProps {
    uniqueId: string
    defaultValue?: string
    placeholder?: string
    onChange?: (value: string) => void
}

const Input: React.FC<InputProps> = ({
    uniqueId,
    defaultValue,
    placeholder,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue || '')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        onChange?.(newValue)
    }

    return (
        <input
            id={uniqueId}
            value={value}
            className={clsx(styles['ral-input'])}
            {...(placeholder && { placeholder: placeholder })}
            onChange={handleChange}
            data-testid="ral-test--input"
            {...props}
        />
    )
}

export default Input
