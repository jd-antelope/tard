import classNames from 'classnames'
import React from 'react'
import { View } from '@tarojs/components'
import { SlModalActionProps } from '../../../../types/modal'

export default class SlModalAction extends React.Component<SlModalActionProps> {
  public static defaultProps: SlModalActionProps
  static displayName  = 'SlModalAction';

  public render (): JSX.Element {
    const rootClass = classNames(
      'slc-modal__footer',
      {
        'slc-modal__footer--simple': this.props.isSimple
      },
      this.props.className
    )

    return (
      <View className={rootClass}>
        <View className='slc-modal__action'>{this.props.children}</View>
      </View>
    )
  }
}

SlModalAction.defaultProps = {
  isSimple: false
}

