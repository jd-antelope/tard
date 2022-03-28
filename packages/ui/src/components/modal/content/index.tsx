
import React, { FC } from 'react'
import classNames from 'classnames'
import { ScrollView } from '@tarojs/components'
import { ModalContentProps } from '../type'
import { cssPrefix } from '../../../common'

const ModalContent: FC<ModalContentProps> = ({ children, className }) => {
  const CssPrefix = cssPrefix()
  const rootClass = classNames(`${CssPrefix}-modal__content`, className)
  return (
    <ScrollView scrollY className={rootClass}>
      {children}
    </ScrollView>
  )
}

ModalContent.prototype.displayName = 'ModalContent'

export default ModalContent