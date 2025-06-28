import {
    faArrowUp,
    faAdd,
    faHand,
    faXmark,
    faMagnifyingGlass,
    faCube,
    faLock,
    faChartPie,
    faBookmark,
    faClose,
    faSignOut,
    faSignIn,
    faBars,
} from '@fortawesome/free-solid-svg-icons'
import type { SizeProp } from '@fortawesome/fontawesome-svg-core'

export const iconNameMap = {
    up: faArrowUp,
    add: faAdd,
    hand: faHand,
    clear: faXmark,
    'magnifying-glass': faMagnifyingGlass,
    cube: faCube,
    lock: faLock,
    pie: faChartPie,
    bookmark: faBookmark,
    close: faClose,
    logout: faSignOut,
    login: faSignIn,
    menu: faBars
}

export type IconName = keyof typeof iconNameMap

export const iconSizeMap: Record<string, SizeProp> = {
    sm: 'sm',
    md: 'lg',
    lg: '2x',
}

export type IconSize = keyof typeof iconSizeMap
