'use client'

import React, { useState } from 'react'
import Button from '@atom/Button/Button'
import Header from '@molecule/Header/Header'
import Footer from '@molecule/Footer/Footer'
import Modal from '@organism/Modal/Modal'
import Assets from '@organism/Assets/Assets'
import type { AssetProps } from '@organism/Assets/Assets'

interface LibraryProps {
    children: React.ReactNode
}

const Library: React.FC<LibraryProps> = ({ children }) => {
    const [modalRequest, setModalRequest] = useState<boolean>(false)

    const openModalRequest = () => setModalRequest(true)
    const closeModalRequest = () => setModalRequest(false)

    const dataSingle: AssetProps = {
        icon: 'hand',
        title: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        onClick: closeModalRequest,
    }

    const dataListed: AssetProps[] = Array.from({ length: 6 }, (_, i) => ({
        ...dataSingle,
        title: `${dataSingle.title} ${i + 1}`,
    }))

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
                <Assets uniqueId="trending" data={dataListed} />

                <Button
                    label="Request Asset"
                    isDark={true}
                    fullWidth={true}
                    className="mt-4"
                    onClick={closeModalRequest}
                />
            </Modal>
        </>
    )
}

export default Library
