'use client'

import React from 'react'
import Assets from '@organism/Assets/Assets'
import type { AssetProps } from '@organism/Assets/Assets'

const element: AssetProps = {
    icon: 'hand',
    title: 'Layout Name',
    description: 'Short description of the item goes nicely here.',
    date: '06/27/2024',
    onClick: () => window.alert('Asset Info'),
}

const data: AssetProps[] = Array.from({ length: 4 }, (_, i) => ({
    ...element,
    title: `${element.title} ${i + 1}`,
}))

const PanelLayout: React.FC = () => {
    return <Assets uniqueId="layout" data={data} />
}

export default PanelLayout
