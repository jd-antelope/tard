import { CSSProperties } from 'react'

export interface CompCommon {
  className?: string

  customStyle?: string | CSSProperties

  customizeStyle?: string
}

export interface IconBaseProps2 extends CompCommon {
  value: string

  color?: string
}

export interface IconBaseProps extends CompCommon {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default CompCommon
