import classNames from 'classnames'
import React from 'react'
import { ScrollView } from '@tarojs/components'
import { SlModalContentProps } from '../../../../types/sl-modal'

export default class SlModalContent extends React.Component<
SlModalContentProps
> {
  public render (): JSX.Element {
    const rootClass = classNames('slc-modal__content', this.props.className)
    return (
      <ScrollView scrollY className={rootClass}>
        {this.props.children}
      </ScrollView>
    )
  }
}
