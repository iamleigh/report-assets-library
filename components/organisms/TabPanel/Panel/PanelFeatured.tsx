'use client'

import React, { useState } from 'react'
import Button from '@atom/Button/Button'
import Input from '@atom/Input/Input'
import Section from '@organism/Section/Section'
import Modal from '@organism/Modal/Modal'
import Assets from '@organism/Assets/Assets'
import type { AssetProps } from '@organism/Assets/Assets'

const PanelFeatured: React.FC = () => {
    const [modalRequest, setModalRequest] = useState<boolean>(false)

    const openModalRequest = () => setModalRequest(true)
    const closeModalRequest = () => setModalRequest(false)

    const dataSingle: AssetProps = {
        icon: 'hand',
        title: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '06/27/2024',
        onClick: () => window.alert('Asset Info'),
    }

    const dataListed: AssetProps[] = Array.from({ length: 3 }, (_, i) => ({
        ...dataSingle,
        title: `${dataSingle.title} ${i + 1}`,
    })).concat({
        icon: 'hand',
        title: 'Item Name',
        description: 'Short description of the item goes nicely here.',
        date: '06/27/2024',
        lock: true,
        onClick: openModalRequest,
    })

    return (
        <>
            <Section
                title="Featured"
                description="Curated top picks from this week"
            >
                <Assets uniqueId="featured" data={dataListed} />
            </Section>

            <Section title="Trending" description="Most popular by community">
                <Assets uniqueId="trending" data={dataListed} />
            </Section>

            <Modal
                icon="hand"
                title="Request Access"
                description="The quick brown fox jumps over a lazy dog"
                isOpen={modalRequest}
                onClose={closeModalRequest}
            >
                <Input uniqueId="asset-request-reason" label="Why do you need this feature?" placeholder="Lorem ipsum dolor sit amet..." isMultiline={true} />

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

export default PanelFeatured
