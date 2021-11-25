
import React from 'react'
import { View, Text } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import { getSystemInfoSync, getMenuButtonBoundingClientRect } from '@tarojs/taro';
import cn from 'classnames';
import { pxTransform } from '../../common/utils'
import { SlNavBarProps } from '../../../types/nav-bar'
export default class SlNavBar extends React.Component<SlNavBarProps> {
  public static defaultProps: SlNavBarProps
  public static propTypes: InferProps<SlNavBarProps>

  public constructor(props: SlNavBarProps) {
    super(props)
    this.state = {}
  }

  private handleBack() {
    this.props.onBack && this.props.onBack(arguments as any)
  }

  public render(): JSX.Element {
    const { back, bgStyle, title, children } = this.props

    const { statusBarHeight } = getSystemInfoSync();
    const { height: boundHeight } = getMenuButtonBoundingClientRect()
    const statusStyle = {
      'height': pxTransform(statusBarHeight),
    };

    const contentStyle = {
      'height': pxTransform(boundHeight + 10),
    };

    statusStyle

    return (
      <View className="slc-nav-bar" style={bgStyle}>
        <View className={cn('slc-nav-bar-fixed')}>
          {/* 状态栏 */}
          <View className="status-height" style={{ ...statusStyle }} />
          {back ?
            <View className="slc-nav-bar-content" style={{ ...contentStyle }} >
              <View className="slc-nav-bar-content-back">
                <View className="slc-nav-bar-content-back-btn" onClick={this.handleBack.bind(this)}>
                  <Text className='slc-icon slc-icon-chevron-left' style={{ fontSize: 20 }}></Text>
                </View>
                {title &&
                  <View className="slc-nav-bar-content-title">
                    {title}
                  </View>}
                {children}
              </View>
            </View> :
            <View className="slc-nav-bar-content" style={{ ...contentStyle }} >{children}</View>
          }

        </View>

        <View className="slc-nav-bar-height">
          <View className="slc-nav-bar-height-status" style={{ ...statusStyle }} />
          <View className="slc-nav-bar-height-seat" style={{ ...contentStyle }} />
        </View>

      </View>
    )
  }
}

SlNavBar.defaultProps = {
  back: false,
}

SlNavBar.propTypes = {
  bgStyle: PropTypes.string,
  back: PropTypes.bool,
  onBack: PropTypes.func,
  title: PropTypes.string
}