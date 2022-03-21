import classNames from 'classnames'
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { ModalContentProps } from '../type'
import { CssPrefix } from '../../../common'

const ModalHeader: FC<ModalContentProps> = ({ children, className }) => {
  const displayName = 'ModalHeader';
  const rootClass = classNames(`${CssPrefix}-modal__header`, className)
  return <View className={rootClass}>{children}</View>

}
export default ModalHeader