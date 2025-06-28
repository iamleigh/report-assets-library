'use client'

import React, { useEffect, useRef } from 'react'
import Icon from '@atom/Icon/Icon'
import type { IconName } from '@atom/Icon/icon.types'
import IconButton from '@atom/IconButton/IconButton'
import clsx from 'clsx'
import styles from './Modal.module.scss'

interface ModalProps {
    icon?: IconName
    title: string
    description?: string
    isOpen: boolean
    onClose: () => void
    children?: React.ReactNode
}

const Modal: React.FC<ModalProps> = ({
    icon,
    title,
    description,
    isOpen,
    onClose,
    children,
}) => {
    const modalRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isOpen) {
            modalRef.current?.focus()
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }

        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen) {
        return null
    }

    return (
        <div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            className={clsx(styles['ral-modal'])}
            tabIndex={-1}
        >
            <div className={clsx(styles['ral-modal__container'])}>
                <IconButton
                    label="Close Modal"
                    icon="close"
                    className="absolute right-4 top-4"
                    onClick={onClose}
                />

                <div className={clsx(styles['ral-modal__header'])}>
                    {icon && (
                        <div
                            className={clsx(styles['ral-modal__icon'])}
                            aria-hidden="true"
                        >
                            <Icon name={icon} />
                        </div>
                    )}
                    <h2 className={clsx(styles['ral-modal__title'])}>
                        {title}
                    </h2>
                    {description && (
                        <p className={clsx(styles['ral-modal_description'])}>
                            {description}
                        </p>
                    )}
                </div>

                <div>{children}</div>
            </div>
        </div>
    )
}

export default Modal
