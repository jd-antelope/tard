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

  private handleClickSt(event: ITouchEvent): void {
    this.props.onClickRgIconSt && this.props.onClickRgIconSt(event)
  }

  private handleClickNd(event: ITouchEvent): void {
    this.props.onClickRgIconNd && this.props.onClickRgIconNd(event)
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
      rightFirstIconType,
      rightSecondIconType
    } = this.props
    const linkStyle = { color }

    const defaultIconInfo = {
      customStyle: '',
      className: '',
      prefixClass: 'slc-icon',
      value: '',
      color: '',
      size: 24
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
      rightFirstIconType instanceof Object
        ? { ...defaultIconInfo, ...rightFirstIconType }
        : { ...defaultIconInfo, value: rightFirstIconType }
    const rightFirstIconClass = classNames(
      rightFirstIconInfo.prefixClass,
      {
        [`${rightFirstIconInfo.prefixClass}-${rightFirstIconInfo.value}`]: rightFirstIconInfo.value
      },
      rightFirstIconInfo.className
    )

    const rightSecondIconInfo =
      rightSecondIconType instanceof Object
        ? { ...defaultIconInfo, ...rightSecondIconType }
        : { ...defaultIconInfo, value: rightSecondIconType }
    const rightSecondIconClass = classNames(
      rightSecondIconInfo.prefixClass,
      {
        [`${rightSecondIconInfo.prefixClass}-${rightSecondIconInfo.value}`]: rightSecondIconInfo.value
      },
      rightSecondIconInfo.className
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
              'slc-nav-bar__container--hide': !rightSecondIconType
            })}
            style={linkStyle}
            onClick={this.handleClickNd.bind(this)}
          >
            {rightSecondIconType && (
              <Text
                className={rightSecondIconClass}
                style={mergeStyle(
                  {
                    color: rightSecondIconInfo.color,
                    fontSize: `${Taro.pxTransform(
                      parseInt(rightSecondIconInfo.size.toString()) * 2
                    )}`
                  },
                  rightSecondIconInfo.customStyle
                )}
              ></Text>
            )}
          </View>
          <View
            className={classNames({
              'slc-nav-bar__container': true,
              'slc-nav-bar__container--hide': !rightFirstIconType
            })}
            style={linkStyle}
            onClick={this.handleClickSt.bind(this)}
          >
            {rightFirstIconType && (
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
  rightFirstIconType: '',
  rightSecondIconType: '',
  onClickLeft: () => {},
  onClickRgIconSt: () => {},
  onClickRgIconNd: () => {}
}