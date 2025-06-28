import React from 'react'
import Card from '@molecule/Card/Card'
import type { IconName } from '@atom/Icon/icon.types'

interface AssetProps {
    icon: IconName
    title: string
    description: string
    date?: string
    lock?: boolean
    onClick: () => void
}

interface AssetsProps {
    data: AssetProps[]
    uniqueId: string
}

const Assets: React.FC<AssetsProps> = ({ uniqueId, data }) => {
    return (
        <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {data.map((card, index) => (
                <Card
                    key={`asset-${uniqueId}-${index}`}
                    icon={card.icon}
                    title={card.title}
                    description={card.description}
                    date={card.date}
                    lock={card.lock}
                    onClick={card.onClick}
                />
            ))}
        </div>
    )
}

export default Assets
export type { AssetProps }
