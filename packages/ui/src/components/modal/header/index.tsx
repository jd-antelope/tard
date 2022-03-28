import classNames from 'classnames'
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { ModalContentProps } from '../type'
import { cssPrefix } from '../../../common'

const ModalHeader: FC<ModalContentProps> = ({ children, className }) => {
  const CssPrefix = cssPrefix()
  const rootClass = classNames(`${CssPrefix}-modal__header`, className)
  return <View className={rootClass}>{children}</View>

}

ModalHeader.prototype.displayName = 'ModalHeader'

export default ModalHeader