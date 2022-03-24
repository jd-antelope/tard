import classNames from 'classnames'
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { CellGroupProps } from '../type'
import { CssPrefix } from '../../../common'

const CellGroup: FC<CellGroupProps> = ({
  border = true,
  inset = false,
  title,
  children
}) => {

  const itemClass = classNames(
    `${CssPrefix}-cell-group-item`,
    {
      [`${CssPrefix}-cell__border`]: border,
      [`${CssPrefix}-cell__inset`]: inset
    }
  )

  return (
    <View className={`${CssPrefix}-cell-group`}>
      {title && <View className={`${CssPrefix}-cell-group-title`}>{title}</View>}
      <View className={itemClass}>
        {children}
      </View>
    </View>
  )
}

export default CellGroup