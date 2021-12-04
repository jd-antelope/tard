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
    const items: ReactElement<ComponentProps<typeof GridItem>>[] = []
    const itemList = React.Children.map(this.props.children, (child, index) => {
      if (React.isValidElement(child)) {
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
        return cloneElement(child, childProps)
      } else {
        return child
      }
    })
    const style = (objectToString({
      'grid-template-columns': new Array(columnNum).fill('auto ').reduce((s, v) => s + v, ''),
    }))
    
    return (
      <View className={ImageText} style={style}>
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
