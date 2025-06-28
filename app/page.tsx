import Search from '@atom/Search/Search'
import Library from '@template/Library/Library'
import Tabs from '@molecule/Tabs/Tabs'
import { tabs } from '@data/tabs'

export default function Home() {
    return (
        <Library>
            <Search
                uniqueId="search-assets"
                label="Search assets"
                placeholder="Type to search"
            />

            <Tabs data={tabs} />
        </Library>
    )
}
