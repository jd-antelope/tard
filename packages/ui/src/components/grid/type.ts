import CompCommon from '../../common/type'

export interface GridProps extends CompCommon {
  /**
  * 列数
  * @default 4
  */
  columnNum?: number
  /**
  * 图标大小，默认单位为px
  * @default 60px
  */
  iconSize?: number
  /**
  * 是否显示边框
  * @default false
  */
  border?: boolean
  /**
  * 图文位置
  * @default 'down'
  */
   direction?: 'top' | 'bottom' | 'left' | 'right',
  /**
  * 是否开启格子点击反馈
  * @default false
  */
  clickable?: boolean
}

export interface GridItemProps extends CompCommon {
  /**
  * 图片链接
  */
  url?: string,
  /**
  * icon类型
  */
  icon?: string,
  /**
  * 文字
  */
  text?: string,
  /**
  * 图文位置
  * @default bottom
  */
  direction?: 'top' | 'bottom' | 'left' | 'right',
  /**
  * 边框
  * @default false
  */
  border?: boolean
  /**
  * 列数
  * @default 4
  */
  columnNum?: number
  /**
  * 总数
  */
  length?: number
  /**
  * 数量
  */
  index?: number
  /**
  * 图标大小，默认单位为px
  * @default 60px
  */
  iconSize?: number
  /**
  * 点击事件
  */
  onClick?: Function,
}
