import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { SlModalActionProps } from '../../../../types/sl-modal'

export default class SlModalAction extends React.Component<SlModalActionProps> {
  public static defaultProps: SlModalActionProps
  public static propTypes: InferProps<SlModalActionProps>

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

SlModalAction.propTypes = {
  isSimple: PropTypes.bool
}
