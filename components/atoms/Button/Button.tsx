import React from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName, IconSize } from '@atom/Icon/icon.types'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps {
    label: string
    icon?: IconName
    iconSize?: IconSize
    fullWidth?: boolean
    isDark?: boolean
    className?: string
    disabled?: boolean
    testId?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
    label,
    icon,
    iconSize,
    fullWidth,
    isDark,
    className,
    disabled,
    testId,
    onClick,
    ...props
}) => {
    return (
        <button
            className={clsx(
                {
                    [styles['ral-button']]: true,
                    [styles['ral-button--dark']]: isDark,
                    [styles['ral-button--full-width']]: fullWidth,
                },
                className,
            )}
            {...(disabled && { disabled: true })}
            data-testid={testId ? testId : 'ral-test--button'}
            onClick={onClick}
            {...props}
        >
            {icon && <Icon name={icon} size={iconSize ? iconSize : 'sm'} />}
            <span className={clsx(styles['ral-button__label'])}>{label}</span>
        </button>
    )
}

export default Button
