import classNames from 'classnames'
import React from 'react'
import { ScrollView } from '@tarojs/components'
import { SlcModalContentProps } from '../../../../types/sl-modal'

export default class AtModalContent extends React.Component<
SlcModalContentProps
> {
  public render (): JSX.Element {
    const rootClass = classNames('at-modal__content', this.props.className)
    return (
      <ScrollView scrollY className={rootClass}>
        {this.props.children}
      </ScrollView>
    )
  }
}
