import React from 'react'
import clsx from 'clsx'
import styles from './Header.module.scss'

interface HeaderProps {
    title: string
    description?: string
    children?: React.ReactNode
}

const Header: React.FC<HeaderProps> = ({
    title,
    description,
    children,
    ...props
}) => {
    return (
        <header className={clsx(styles['ral-header'])} {...props}>
            <h1 className={clsx(styles['ral-header__title'])}>{title}</h1>

            {description && (
                <p className={clsx(styles['ral-header__description'])}>
                    {description}
                </p>
            )}

            {children}
        </header>
    )
}

export default Header
