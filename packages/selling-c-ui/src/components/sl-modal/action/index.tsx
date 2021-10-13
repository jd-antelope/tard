import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import React from 'react'
import { View } from '@tarojs/components'
import { SlcModalActionProps } from '../../../../types/sl-modal'

export default class AtModalAction extends React.Component<SlcModalActionProps> {
  public static defaultProps: SlcModalActionProps
  public static propTypes: InferProps<SlcModalActionProps>

  public render (): JSX.Element {
    const rootClass = classNames(
      'at-modal__footer',
      {
        'at-modal__footer--simple': this.props.isSimple
      },
      this.props.className
    )

    return (
      <View className={rootClass}>
        <View className='at-modal__action'>{this.props.children}</View>
      </View>
    )
  }
}

AtModalAction.defaultProps = {
  isSimple: false
}

AtModalAction.propTypes = {
  isSimple: PropTypes.bool
}
