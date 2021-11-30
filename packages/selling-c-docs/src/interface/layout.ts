export interface Layout {
  routes: LayoutList[]
}

export interface LayoutList {
  nameEn: string
  name: string
  path: null
  isDocs?: boolean
  children: Children[]
}

export interface Children {
  name: string
  nameEn: string
  path: string
}
