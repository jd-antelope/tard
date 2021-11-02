
import React from 'react'
import { View, Text } from '@tarojs/components'
import { SlProgressCircleProps, SlProgressCircleState } from '../../../types/progress-circle'
import Taro from '@tarojs/taro'

export default class SlProgressCircle extends React.Component<SlProgressCircleProps, SlProgressCircleState> {
  public static defaultProps: SlProgressCircleProps

  public render(): JSX.Element | null {
    const { percent, size, strokeWidth, layerColor, color, text } = this.props
    const r = (size - strokeWidth * 2) / 2
    const circumference = 2 * 3.14159265358979 * r
    const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
    const quot = '"'
    const style: React.CSSProperties = {
      backgroundImage: `url(${quot}data:image/svg+xml, %3Csvg viewBox='0 0 ${size} ${size}' xmlns='http://www.w3.org/2000/svg' full='#000' width='${size}px' height='${size}px'svg%3E${quot})`,
      width: size + 'px',
      height: size + 'px'
    }

    return (
      <View className="slc-circle" style={`width:${size}px; height:${size}px`}>
        {!isWeapp && <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
          <circle id="circleBg"
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={layerColor}
          />
          <circle id="circle"
            style={{ transform: 'rotate(-90deg)', transformOrigin: ' 50% 50%' }}
            cx={size / 2}
            cy={size / 2}
            r={r}
            fill="none"
            strokeWidth={strokeWidth}
            stroke={color}
            strokeDasharray={circumference}
            strokeDashoffset={circumference * (1 - percent / 100)}
            strokeLinecap='round'
          />
        </svg>}
        {isWeapp && <View>
          小程序
          <view
            style={style} />

        </View>}
        <Text className="slc-circle-text">{text}</Text>

      </View>
    )
  }
}

SlProgressCircle.defaultProps = {
  percent: 0,
  size: 100,
  strokeWidth: 4,
  layerColor: '#EFEFEF',
  color: '#DC8D20'
}
