'use client'

import Header from '@molecule/Header/Header'
import Button from '@atom/Button/Button'
import Footer from '@molecule/Footer/Footer'

interface LibraryProps {
    children: React.ReactNode
}

const Library: React.FC<LibraryProps> = ({ children }) => {
    return (
        <>
            <Header
                title="Library"
                description="Browse for assets needed to report and present analysis."
            >
                <div className="absolute right-4 top-4">
                    <Button
                        label="Request"
                        icon="cube"
                        onClick={() => window.alert('Request new asset')}
                    />
                </div>
            </Header>

            <section>{children}</section>

            <Footer author="Leighton Quito" />
        </>
    )
}

export default Library
