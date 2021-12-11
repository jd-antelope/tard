
import React from 'react'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { SlProgressCircleProps } from '../../../types/progress-circle'
import { pxTransform } from '../../common/utils'
import { isWeapp } from '../../common/utils'

export default class SlProgressCircle extends React.Component<SlProgressCircleProps> {
  public static defaultProps: SlProgressCircleProps

  private transColor = (color) => {
    return color.replace('#', '%23')
  }

  private pxTransformRem = (size: number) => {
    if (!size) return ''
    return size / 750 * Taro.getSystemInfoSync().windowWidth + "px";
  }

  public render(): JSX.Element | null {
    const { percent, size, strokeWidth, layerColor, color, text } = this.props
    const r = (size - strokeWidth * 2) / 2
    const circumference = 2 * Math.PI * r
    const svgStyle: React.CSSProperties = {
      height: '100%',
      width: '100%'
    }

    const pxTransformRem = this.pxTransformRem

    const style: React.CSSProperties = {
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle id='circleBg' cx='${pxTransformRem(size / 2)}' cy='${pxTransformRem(size / 2)}' r='${pxTransformRem(r)}' fill='none' stroke-width='${pxTransformRem(strokeWidth)}' stroke='${this.transColor(layerColor)}'%3E%3C/circle%3E%3Ccircle id='circle' cx='${pxTransformRem(size / 2)}' cy='${pxTransformRem(size / 2)}' r='${pxTransformRem(r)}' fill='none' stroke-width='${pxTransformRem(strokeWidth)}' stroke='${this.transColor(color)}' stroke-dasharray='${pxTransformRem(circumference)}' stroke-dashoffset='${pxTransformRem(circumference * (1 - percent / 100))}' stroke-linecap='round'%3E%3C/circle%3E%3C/svg%3E")`,
      width: '100%',
      height: '100%',
      transform: 'rotate(-90deg)',
      transformOrigin: '50% 50%'
    }

    return (
      <View className="slc-circle" style={`width:${!isWeapp ? pxTransform(size) : pxTransformRem(size)}; height:${!isWeapp ? pxTransform(size) : pxTransformRem(size)}`}>

        {!isWeapp
          ? <svg style={svgStyle}>
            <circle id="circleBg"
              cx={pxTransform(size / 2)}
              cy={pxTransform(size / 2)}
              r={pxTransform(r)}
              fill="none"
              strokeWidth={pxTransform(strokeWidth)}
              stroke={layerColor}
            />
            <circle id="circle"
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
              cx={pxTransform(size / 2)}
              cy={pxTransform(size / 2)}
              r={pxTransform(r)}
              fill="none"
              strokeWidth={pxTransform(strokeWidth)}
              stroke={color}
              strokeDasharray={pxTransform(circumference)}
              strokeDashoffset={pxTransform(circumference * (1 - percent / 100))}
              strokeLinecap='round'
            />
          </svg>
          :
          <view
            style={style}
          >
          </view>
        }
        <Text className="slc-circle-text">{text}</Text>

      </View>
    )
  }
}

SlProgressCircle.defaultProps = {
  percent: 0,
  size: 200,
  strokeWidth: 4,
  layerColor: '#EFEFEF',
  color: '#DC8D20'
}