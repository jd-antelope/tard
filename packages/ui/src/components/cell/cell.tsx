import classNames from 'classnames'
import React, { Fragment, FC } from 'react'
import { View, Text } from '@tarojs/components'
import { CellProps } from './type'
import Icon from '../icon/index'
import Taro from '@tarojs/taro'
import { CssPrefix } from '../../common'
import CompContainer from '../../common/comp-container'

const Cell: FC<CellProps> = (
  {
    border = true,
    link = false,
    arrowDirection = 'right',
    // pageType = 'switchTab',
    center = false,
    to,
    title,
    value,
    label,
    icon,
    rightContent,
    leftContent,
    onClick,
    customizeStyle
  }
) => {

  // 点击右侧数据
  const handleClick = () => {
    onClick && onClick()
    if (to) {
      Taro.navigateTo({
        url: to
      })
    }
  }

  const rootClass = classNames(
    `${CssPrefix}-cell`,
    {
      [`${CssPrefix}-cell__border`]: border,
      [`${CssPrefix}-cell__center`]: center
    }
  )

  return (
    <CompContainer className={rootClass} customizeStyle={customizeStyle} onClick={handleClick}>
      {
        (title || icon || leftContent) &&
        <View className={`${CssPrefix}-cell__item`}>
          {
            leftContent ||
            <Fragment>
              <View className={`${CssPrefix}-cell__item-title`}>
                {icon && <Icon className={`${CssPrefix}-cell__item-icon`} value={icon} />}
                {title}
              </View>
              <View className={`${CssPrefix}-cell__item-label`}>{label}</View>
            </Fragment>
          }
        </View>
      }

      <View className={`${CssPrefix}-cell__item`}>
        {
          rightContent ||
          <View className={link ? `${CssPrefix}-cell__item-click` : ''}>
            <Text>{value}</Text>
            {link && <Icon className={`${CssPrefix}-cell__item-link`} value={`chevron-${arrowDirection}`} />}
          </View>
        }
      </View>

    </CompContainer>
  )
}



export default Cell