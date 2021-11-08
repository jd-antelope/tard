import classNames from 'classnames'
import { InferProps } from 'prop-types'
import React from 'react'
import { View, Text } from '@tarojs/components'
import { SlCellProps } from '../../../types/cell'
import SlIcon from '../icon/index'
import { pxTransform } from '../../common/utils'

export default class SlCell extends React.Component<SlCellProps> {
  public static defaultProps: SlCellProps
  public static propTypes: InferProps<SlCellProps>

  // 点击右侧数据
  private handleClick(): void {
    this.props.onClick && this.props.onClick(arguments as any)
  }

  public render(): JSX.Element {
    const {
      title,
      value,
      icon,
      height
    } = this.props
    const Cell = classNames('slc-cell')

    return (
      <View className={Cell} style={{ height: `${pxTransform(height as number)}` }} onClick={this.handleClick.bind(this)}>
        <View className="slc-cell-title">{title}</View>
        <View className="slc-cell-value">
          <Text className="slc-cell-text">{value}</Text>
          <SlIcon value={`${String(icon)}`} className="slc-cell-icon" /></View>
      </View>
    )
  }
}

SlCell.defaultProps = {
  title: "左侧标题",
  value: "右侧内容",
  icon: "chevron-right",
  height: 100,
}


