'use client'

import React, { useState } from 'react'
import Input from '@atom/Input/Input'
import Button from '@atom/Button/Button'
import Header from '@molecule/Header/Header'
import Footer from '@molecule/Footer/Footer'
import Modal from '@organism/Modal/Modal'

interface LibraryProps {
    children: React.ReactNode
}

const Library: React.FC<LibraryProps> = ({ children }) => {
    const [modalRequest, setModalRequest] = useState<boolean>(false)

    const openModalRequest = () => setModalRequest(true)
    const closeModalRequest = () => setModalRequest(false)

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
                        onClick={openModalRequest}
                    />
                </div>
            </Header>

            <section>{children}</section>

            <Footer author="Leighton Quito" />

            <Modal
                icon="hand"
                title="Request New Asset"
                description="This form allows you to request the creation of a new asset"
                isOpen={modalRequest}
                onClose={closeModalRequest}
            >
                <Input
                    uniqueId="asset-request-reason"
                    label="Feature Name"
                    placeholder="Feature name"
                    className="mt-8 mb-2"
                />

                <Input
                    uniqueId="asset-request-reason"
                    label="Feature Description"
                    placeholder="Feature description"
                    isMultiline={true}
                />

                <Button
                    label="Submit Request"
                    isDark={true}
                    fullWidth={true}
                    onClick={closeModalRequest}
                />
            </Modal>
        </>
    )
}

export default Library
