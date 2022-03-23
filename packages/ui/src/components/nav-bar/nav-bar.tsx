
import React, { FC } from 'react'
import classNames from 'classnames'
import { NavBarProps } from './type'
import { Text, View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { mergeStyle } from '../../common/utils'
import { CssPrefix } from '../../common'
import CompContainer from '../../common/comp-container'
// import { initTestEnv } from '../../common/utils'

// initTestEnv()
const NavBar: FC<NavBarProps> = ({
  customStyle,
  className = '',
  fixed = false,
  border = true,
  color = '',
  leftIcon = false,
  leftIconType = 'chevron-left',
  leftText = '',
  title = '',
  rightIconType = '',
  onClickLeft = () => { },
  onClickRight = () => { },
  children,
  customizeStyle
}) => {

  const handleClickLeftView = (event: ITouchEvent): void => {
    onClickLeft && onClickLeft(event)
  }

  const handleClickRightIcon = (event: ITouchEvent): void => {
    onClickRight && onClickRight(event)
  }

  const linkStyle = { color }

  const defaultIconInfo = {
    customStyle: '',
    className: '',
    prefixClass: `${CssPrefix}-icon`,
    value: '',
    color: '',
    size: 20
  }

  const leftIconInfo =
    leftIconType instanceof Object
      ? { ...defaultIconInfo, ...leftIconType }
      : { ...defaultIconInfo, value: leftIconType }
  const leftIconClass = classNames(
    leftIconInfo.prefixClass,
    {
      [`${leftIconInfo.prefixClass}-${leftIconInfo.value}`]: leftIconInfo.value
    },
    leftIconInfo.className
  )

  const rightFirstIconInfo =
    rightIconType instanceof Object
      ? { ...defaultIconInfo, ...rightIconType }
      : { ...defaultIconInfo, value: rightIconType }
  const rightFirstIconClass = classNames(
    rightFirstIconInfo.prefixClass,
    {
      [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]: rightFirstIconInfo.value
    },
    rightFirstIconInfo.className
  )

  return (
    <CompContainer
      className={classNames(
        {
          [`${CssPrefix}-nav-bar`]: true,
          [`${CssPrefix}-nav-bar--fixed`]: fixed,
          [`${CssPrefix}-nav-bar--no-border`]: !border
        },
        className
      )}
      style={customStyle}
      customizeStyle={customizeStyle}
    >
      <View
        className={`${CssPrefix}-nav-bar__left-view`}
        onClick={handleClickLeftView}
        style={linkStyle}
      >
        {leftIcon && leftIconType && (
          <Text
            className={leftIconClass}
            style={mergeStyle(
              {
                color: leftIconInfo.color,
                fontSize: `${Taro.pxTransform(
                  parseInt(leftIconInfo.size.toString()) * 2
                )}`
              },
              leftIconInfo.customStyle
            )}
          ></Text>
        )}
        <Text className={`${CssPrefix}-nav-bar__text`}>{leftText}</Text>
      </View>
      <View className={`${CssPrefix}-nav-bar__title`}>
        {title || children}
      </View>
      <View className={`${CssPrefix}-nav-bar__right-view`}>
        <View
          className={classNames({
            [`${CssPrefix}-nav-bar__container`]: true,
            [`${CssPrefix}-nav-bar__container--hide`]: !rightIconType
          })}
          style={linkStyle}
          onClick={handleClickRightIcon}
        >
          {rightIconType && (
            <Text
              className={rightFirstIconClass}
              style={mergeStyle(
                {
                  color: rightFirstIconInfo.color,
                  fontSize: `${Taro.pxTransform(
                    parseInt(rightFirstIconInfo.size.toString()) * 2
                  )}`
                },
                rightFirstIconInfo.customStyle
              )}
            ></Text>
          )}
        </View>
      </View>
    </CompContainer>
  )
}

export default NavBar