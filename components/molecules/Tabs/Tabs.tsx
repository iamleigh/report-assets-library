'use client'

import React, { useState } from 'react'
import TabButton from '@atom/TabButton/TabButton'
import clsx from 'clsx'
import styles from './Tabs.module.scss'

interface TabProps {
    label: string
    panel: string
    content: React.ReactNode
}

interface TabsProps {
    data: TabProps[]
}

const Tabs: React.FC<TabsProps> = ({ data }) => {
    const [selected, setSelected] = useState(data[0]?.panel)

    return (
        <div className={clsx(styles['ral-tabs'])}>
            <div className={clsx(styles['ral-tabs__list'])}>
                {data.map((tab) => (
                    <TabButton
                        key={tab.panel}
                        label={tab.label}
                        panel={tab.panel}
                        className="flex-1"
                        selected={selected === tab.panel}
                        onClick={() => setSelected(tab.panel)}
                    />
                ))}
            </div>

            <div className={clsx(styles['ral-tabs__panel'])}>
                {data.find((tab) => tab.panel === selected)?.content}
            </div>
        </div>
    )
}

export default Tabs
export type { TabProps }
