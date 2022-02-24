import React, { cloneElement, ReactElement, ComponentProps } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import GridItem from './item'
import { SlGridProps } from '../../../types/grid'
import { objectToString } from '../../common/utils'

export default class SlGrid extends React.Component<SlGridProps> {
  public static defaultProps: SlGridProps

  public constructor(props: SlGridProps) {
    super(props)
    this.state = {}
  }

  public render(): JSX.Element {
    const { columnNum, border, iconSize, clickable, direction } = this.props

    const ImageText = classNames('slc-grid')
    // 定义宫格组件数据
    const items: ReactElement<ComponentProps<typeof GridItem>>[] = []
    const itemList = React.Children.map(this.props.children, (child, index) => {
      // 组件内是否有内置插槽
      if (React.isValidElement(child)) {
        // 重置子组件属性
        const childProps = {
          ...child.props,
          columnNum,
          border,
          iconSize,
          direction,
          index: index + 1,
          length: (this.props.children as any).length,
          onClick: () => {
            !clickable && child.props.onClick()
          },
        }
        items.push(child)
        // 将变量引入，克隆并返回一个新的组件
        return cloneElement(child, childProps)
      } else {
        return child
      }
    })
    // 宫格组件样式变量
    const style = (objectToString({
      'grid-template-columns': new Array(columnNum).fill('auto ').reduce((s, v) => s + v, ''),
    }))
    
    return (
      <View className={ImageText} style={style}>
        {/* 将组件进行解析 */}
        {itemList}
      </View>
    )
  }
}

SlGrid.defaultProps = {
  columnNum: 4,
  border: false,
  iconSize: 60,
  clickable: false,
  direction: 'bottom',
}
