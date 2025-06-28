import React from 'react'
import styles from './TabButton.module.scss'
import clsx from 'clsx'

interface ButtonProps {
    label: string
    panel: string
    className?: string
    selected?: boolean
    disabled?: boolean
    testId?: string
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

const TabButton: React.FC<ButtonProps> = ({
    label,
    panel,
    className,
    selected = false,
    disabled,
    testId,
    onClick,
    ...props
}) => {
    return (
        <button
            type="button"
            role="tab"
            aria-selected={selected}
            aria-controls={panel}
            className={clsx(
                {
                    [styles['ral-tab-button']]: true,
                    [styles['ral-tab-button--selected']]: selected,
                },
                className,
            )}
            {...(disabled && { disabled: true })}
            data-testid={testId ? testId : 'ral-test--tab-button'}
            onClick={onClick}
            {...props}
        >
            {label}
        </button>
    )
}

export default TabButton
