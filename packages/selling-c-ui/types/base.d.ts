import { CSSProperties } from 'react'

export interface SlComponent {
  className?: string

  customStyle?: string | CSSProperties
}

export interface SlIconBaseProps2 extends SlComponent {
  value: string

  color?: string
}

export interface SlIconBaseProps extends SlComponent {
  value: string

  color?: string

  prefixClass?: string

  size?: number | string
}

export default SlComponent
