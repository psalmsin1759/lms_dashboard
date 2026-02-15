export interface ChildItem { 
    id?: number | string 
    name?: string 
    icon?: string 
    children?: ChildItem[] 
    item?: unknown 
    url?: string 
    color?: string 
    disabled?: boolean 
    subtitle?: string 
    badge?: boolean 
    badgeType?: string 
    isPro?: boolean 
} 

export interface MenuItem { 
    heading?: string 
    name?: string 
    icon?: string 
    id?: number | string 
    to?: string 
    items?: MenuItem[] 
    children?: ChildItem[] 
    url?: string 
    disabled?: boolean 
    subtitle?: string 
    badgeType?: string 
    badge?: boolean 
    isPro?: boolean 
}