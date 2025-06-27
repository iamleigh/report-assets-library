import React from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName, IconSize } from '@atom/Icon/icon.types'

interface ButtonProps {
    label: string
    icon?: IconName
    iconSize?: IconSize
    disabled?: boolean
    testId?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({ label, icon, iconSize, disabled, testId, onClick, ...props }) => {
    const baseStyles = 'bg-gray-400 text-white rounded-lg py-2 px-4 transition-all'
    const hoverStyles = 'hover:bg-gray-600'

    return (
        <button
            className={`${baseStyles} ${hoverStyles}`}
            {...(disabled && { disabled: true })}
            data-testid={testId ? testId : 'ral-button'}
            onClick={onClick}
            {...props}>
            {icon && <Icon name={icon} size={iconSize} />}
            {label}
        </button>
    )
}

export default Button
