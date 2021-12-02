import React from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { SlGridProps } from '../../../types/grid'

export default class SlGrid extends React.Component<SlGridProps> {
  public static defaultProps: SlGridProps

  public constructor(props: SlGridProps) {
    super(props)
    this.state = {}
  }

  public render(): JSX.Element {
    const ImageText = classNames('slc-image-text-item-ImageText')
    
    return (
      <View className={ImageText}>
        
      </View>
    )
  }
}

SlGrid.defaultProps = {}
