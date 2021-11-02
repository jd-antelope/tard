
import React from 'react'
import { View, Text } from '@tarojs/components'
import { SlProgressCircleProps } from '../../../types/progress-circle'
import Taro from '@tarojs/taro'

export default class SlProgressCircle extends React.Component<SlProgressCircleProps> {
  public static defaultProps: SlProgressCircleProps

  private transColor = (color) => {
    return color.replace('#', '%23')
  }

  public render(): JSX.Element | null {
    const { percent, size, strokeWidth, layerColor, color, text } = this.props
    const r = (size - strokeWidth * 2) / 2
    const circumference = 2 * Math.PI * r
    const isWeapp = Taro.getEnv() === Taro.ENV_TYPE.WEAPP
    const style: React.CSSProperties = {
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='${size}' width='${size}' viewBox='0 0 ${size} ${size}'%3E%3Ccircle id='circleBg' cx='${size / 2}' cy='${size / 2}' r='${r}' fill='none' stroke-width='${strokeWidth}' stroke='${this.transColor(layerColor)}'%3E%3C/circle%3E%3Ccircle id='circle' cx='${size / 2}' cy='${size / 2}' r='${r}' fill='none' stroke-width='${strokeWidth}' stroke='${this.transColor(color)}' stroke-dasharray='${circumference}' stroke-dashoffset='${circumference * (1 - percent / 100)}' stroke-linecap='round' style='transform: rotate(-90deg); transform-origin: 50%25 50%25;'%3E%3C/circle%3E%3C/svg%3E")`,
      width: size + 'px',
      height: size + 'px'
    }

    return (
      <View className="slc-circle" style={`width:${size}px; height:${size}px`}>
        
        {!isWeapp &&
          <svg height={size} width={size} viewBox={`0 0 ${size} ${size}`}>
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
        {isWeapp &&
          <View>
            <view
              style={style}
            >
            </view>
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
