import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { SlModalContentProps } from '../../../../types/modal'

export default class SlModalHeader extends React.Component<SlModalContentProps> {
  static displayName  = 'SlModalHeader';

  public render (): JSX.Element {
    const rootClass = classNames('slc-modal__header', this.props.className)
    return <View className={rootClass}>{this.props.children}</View>
  }
}
