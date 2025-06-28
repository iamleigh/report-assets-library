import React from 'react'

interface SectionProps {
    title: string
    description?: string
    children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({ title, description, children }) => {
    return (
        <section className="my-8 last:mb-0">
            <h3 className="text-2xl font-bold">{title}</h3>
            {description && (
                <p className="mt-2 text-sm text-gray-600">{description}</p>
            )}
            {children && <div className="mt-8">{children}</div>}
        </section>
    )
}

export default Section
