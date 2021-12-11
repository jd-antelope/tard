import classNames from 'classnames'
import React from 'react'
import { SlNavBarProps } from '../../../types/nav-bar'
import { Text, View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { mergeStyle } from '../../common/utils'
// import { initTestEnv } from '../../common/utils'

// initTestEnv()
export default class SlNavBar extends React.Component<SlNavBarProps> {
  public static defaultProps: SlNavBarProps

  private handleClickLeftView(event: ITouchEvent): void {
    this.props.onClickLeft && this.props.onClickLeft(event)
  }

  private handleClickRightIcon(event: ITouchEvent): void {
    this.props.onClickRight && this.props.onClickRight(event)
  }

  public render(): JSX.Element {
    const {
      customStyle,
      className,
      color,
      fixed,
      border,
      leftIcon,
      leftIconType,
      leftText,
      title,
      rightIconType
    } = this.props
    const linkStyle = { color }

    const defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'slc-icon',
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
      <View
        className={classNames(
          {
            'slc-nav-bar': true,
            'slc-nav-bar--fixed': fixed,
            'slc-nav-bar--no-border': !border
          },
          className
        )}
        style={customStyle}
      >
        <View
          className='slc-nav-bar__left-view'
          onClick={this.handleClickLeftView.bind(this)}
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
          <Text className='slc-nav-bar__text'>{leftText}</Text>
        </View>
        <View className='slc-nav-bar__title'>
          {title || this.props.children}
        </View>
        <View className='slc-nav-bar__right-view'>
          <View
            className={classNames({
              'slc-nav-bar__container': true,
              'slc-nav-bar__container--hide': !rightIconType
            })}
            style={linkStyle}
            onClick={this.handleClickRightIcon.bind(this)}
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
      </View>
    )
  }
}

SlNavBar.defaultProps = {
  customStyle: '',
  className: '',
  fixed: false,
  border: true,
  color: '',
  leftIcon: false,
  leftIconType: 'chevron-left',
  leftText: '',
  title: '',
  rightIconType: '',
  onClickLeft: () => {},
  onClickRight: () => {}
}