'use client'

import React, { useState } from 'react'
import Icon from '@atom/Icon/Icon'
import styles from './Search.module.scss'
import clsx from 'clsx'

interface SearchProps {
    uniqueId: string
    label: string
    defaultValue?: string
    placeholder?: string
    onChange?: (value: string) => void
}

const Search: React.FC<SearchProps> = ({
    uniqueId,
    label,
    defaultValue,
    placeholder,
    onChange,
    ...props
}) => {
    const [value, setValue] = useState<string>(defaultValue || '')
    const [isFocused, setIsFocused] = useState<boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setValue(newValue)
        onChange?.(newValue)
    }

    return (
        <div
            className={clsx({
                [styles['ral-search']]: true,
                [styles['ral-search--focused']]: isFocused,
            })}
            data-testid="ral-test--search"
        >
            <label htmlFor={uniqueId} className="sr-only">
                {label}
            </label>

            <input
                id={uniqueId}
                type="search"
                value={value}
                className={clsx(styles['ral-search__input'])}
                {...(placeholder && { placeholder: placeholder })}
                data-testid="ral-test--search-input"
                onChange={handleChange}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                {...props}
            />

            <Icon
                name="magnifying-glass"
                className={clsx(styles['ral-search__icon'])}
            />
        </div>
    )
}

export default Search
