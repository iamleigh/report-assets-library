import React from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName, IconSize } from '@atom/Icon/icon.types'
import styles from './IconButton.module.scss'
import clsx from 'clsx'

interface IconButtonProps {
    label: string
    icon: IconName
    iconSize?: IconSize
    fullWidth?: boolean
    isDark?: boolean
    className?: string
    disabled?: boolean
    testId?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const IconButton: React.FC<IconButtonProps> = ({
    label,
    icon,
    iconSize,
    className,
    disabled,
    testId,
    onClick,
    ...props
}) => {
    return (
        <button
            className={clsx(styles['ral-icon-button'], className)}
            aria-label={label}
            {...(disabled && { disabled: true })}
            data-testid={testId ? testId : 'ral-test--icon-button'}
            onClick={onClick}
            {...props}
        >
            <Icon name={icon} size={iconSize ? iconSize : 'sm'} />
        </button>
    )
}

export default IconButton
