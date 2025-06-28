import React from 'react'
import { TabProps } from '@molecule/Tabs/Tabs'
import {
    Featured,
    Kpi,
    Layout,
    DataViz,
    Storyboard,
} from '@organism/TabPanel/TabPanel'

export const tabs: TabProps[] = [
    {
        label: 'Featured',
        panel: 'featured',
        content: <Featured />,
    },
    {
        label: 'KPI',
        panel: 'kpi',
        content: <Kpi />,
    },
    {
        label: 'Layout',
        panel: 'layout',
        content: <Layout />,
    },
    {
        label: 'Data Viz',
        panel: 'dataviz',
        content: <DataViz />,
    },
    {
        label: 'Storyboard',
        panel: 'storyboard',
        content: <Storyboard />,
    },
]
