
import { InferProps } from 'prop-types'
import React from 'react'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import { SlGridProps } from '../../../types/grid'

export default class SlImageTextItem extends React.Component<SlGridProps> {
  public static defaultProps: SlGridProps
  public static propTypes: InferProps<SlGridProps>

  public constructor(props: SlGridProps) {
    super(props)
    this.state = {}
  }

  // 点击事件
  private onClick = (id): void => {
    // this.props.onClick(id)
  }

  public render(): JSX.Element {
    const {
      propsData = [],
      isUp,
    } = this.props

    const ImageText = classNames('slc-image-text-item-ImageText')
    
    return (
      <View className={ImageText}>
        {
          isUp ? propsData.map((item) => {
            return <View
              key={item.id}
              className="slc-image-text-item-ImageText-ImageTextItem"
              onClick={this.onClick.bind(this, item)}>
              <Image
                src={item.image}
              />
              <Text>{item.text}</Text>
            </View>
          }) : propsData.map((item) => {
            return <View
              key={item.id}
              className="slc-image-text-item-ImageText-ImageTextItem"
              onClick={this.onClick.bind(this, item)}>
              <Text>{item.text}</Text>
              <Image
                src={item.image}
              />
            </View>
          })
        }
      </View>
    )
  }
}

SlImageTextItem.defaultProps = {
  propsData: [],
  isUp: true,
  onClick: () => {}
}
