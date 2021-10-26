import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { SlModalContentProps } from '../../../../types/sl-modal'

export default class SlModalHeader extends React.Component<SlModalContentProps> {
  public render (): JSX.Element {
    const rootClass = classNames('slc-modal__header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
