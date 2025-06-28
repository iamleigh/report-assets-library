import React from 'react'
import clsx from 'clsx'
import styles from './Footer.module.scss'

interface FooterProps {
    author: string
}

const Footer: React.FC<FooterProps> = ({ author }) => {
    return (
        <footer className={clsx(styles['ral-footer'])}>
            <p className="text-sm text-gray-600">
                2025 © All Rights Reserved. Developed by{' '}
                <strong>{author}</strong>
            </p>
        </footer>
    )
}

export default Footer
