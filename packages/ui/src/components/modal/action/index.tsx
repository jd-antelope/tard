import React, { FC } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ModalActionProps } from '../type'
import { CssPrefix } from '../../../common'

const ModalAction: FC<ModalActionProps> = ({ isSimple = false, className, children }) => {
  const rootClass = classNames(
    `${CssPrefix}-modal__footer`,
    {
      [`${CssPrefix}-modal__footer--simple`]: isSimple
    },
    className
  )

  return (
    <View className={rootClass}>
      <View className={`${CssPrefix}-modal__action`}>{children}</View>
    </View>
  )
}

ModalAction.prototype.displayName = 'ModalAction'

export default ModalAction

