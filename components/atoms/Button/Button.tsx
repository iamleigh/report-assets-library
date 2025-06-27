import React from 'react'
import Icon from '@/components/atoms/Icon/Icon'
import type { IconName, IconSize } from '@/components/atoms/Icon/icon.types'
import styles from './Button.module.scss'
import clsx from 'clsx'

interface ButtonProps {
    label: string
    icon?: IconName
    iconSize?: IconSize
    disabled?: boolean
    testId?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ label, icon, iconSize, disabled, testId, onClick, ...props }) => {
    return (
        <button
            className={clsx(styles['ral-button'])}
            {...(disabled && { disabled: true })}
            data-testid={testId ? testId : 'ral-test--button'}
            onClick={onClick}
            {...props}>
            {icon && <Icon name={icon} size={iconSize ? iconSize : 'sm'} />}
            <span className={clsx(styles['ral-button__label'])}>{label}</span>
        </button>
    )
}

export default Button
