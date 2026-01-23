import { CSSProperties } from 'vue'
import { definePropType } from '@bestiary-ui/utils'

export type CardType = 'default' | 'info'
export type CardSize = 'sm' | 'md' | 'lg' | 'none'
export type CardShadow = 'always' | 'hover' | 'never'

export const cardProps = {
    type: {
        type: definePropType<CardType>(String),
        default: 'default'
    },
    size: {
        type: definePropType<CardSize>(String),
        default: 'md'
    },
    shadow: {
        type: definePropType<CardShadow>(String),
        default: 'always'
    },
    header: {
        type: String,
        default: ''
    },
    title: String,
    subtitle: String,
    bodyStyle: {
        type: definePropType<CSSProperties>(Object),
        default: () => ({})
    }
} as const