'use client'

import React from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName } from '@atom/Icon/icon.types'
import clsx from 'clsx'
import styles from './Card.module.scss'

interface CardProps {
    icon: IconName
    title: string
    description: string
    date?: string
    className?: string
    lock?: boolean
    onClick?: () => void
}

const Card: React.FC<CardProps> = ({
    icon,
    title,
    description,
    date,
    className,
    lock,
    onClick,
    ...props
}) => {
    return (
        <button
            className={clsx(styles['ral-card'], className)}
            onClick={onClick}
            {...props}
        >
            <div className={clsx(styles['ral-card__icon'])}>
                <Icon name={icon} size="lg" />
            </div>

            <div className={clsx(styles['ral-card__content'])}>
                <span className={clsx(styles['ral-card__title'])}>{title}</span>
                <span className={clsx(styles['ral-card__description'])}>
                    {description}
                </span>
                {date && (
                    <span className={clsx(styles['ral-card__date'])}>
                        {date}
                    </span>
                )}
            </div>

            {lock && <Icon name="lock" size="sm" />}
        </button>
    )
}

export default Card
export type { CardProps }
