
import classNames from 'classnames'
import React, { FC } from 'react'
import { Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { RateProps } from './type'
import CompContainer from '../../common/comp-container'
import { pxTransform } from '../../utils'
import { cssPrefix } from '../../common'

const Rate: FC<RateProps> = ({ 
  customStyle = '',
  className = '',
  size = 0,
  value = 0,
  max = 5,
  margin = 5,
  activeColor = '',
  customizeStyle = '',
  onChange = () => {}
}) => {
  const CssPrefix = cssPrefix()
  const handleClick = (event: CommonEvent, index) => {
    onChange && onChange(event, index)
  }

  const isActiveRate = (cls: string, type: string) => {
    return cls.includes(`--${type}`)
  }

  const iconStyle = {
    marginRight: pxTransform(margin)
  }

  const starIconStyle = {
    fontSize: size ? `${pxTransform(size)}` : ''
  }

  const activeIconStyle = {
    color: activeColor
  }
  
  const rootClassName = [`${CssPrefix}-rate`]
  
  // 生成星星颜色 className 数组，方便在jsx中直接map
  const classNameArr: string[] = []
  const floorValue = Math.floor(value)
  const ceilValue = Math.ceil(value)
  for (let i = 0; i < max; i++) {
    if (floorValue > i) {
      classNameArr.push(`${CssPrefix}-rate__icon ${CssPrefix}-rate__icon--on`)
    } else if (ceilValue - 1 === i) {
      classNameArr.push(`${CssPrefix}-rate__icon ${CssPrefix}-rate__icon--half`)
    } else {
      classNameArr.push(`${CssPrefix}-rate__icon ${CssPrefix}-rate__icon--off`)
    }
  }

  return (
    <CompContainer className={classNames(rootClassName, className)} style={customStyle} customizeStyle={customizeStyle}>
      {classNameArr.map((cls, i) => (
        <View
          className={cls}
          key={`${CssPrefix}-rate-star-${i}`}
          style={ iconStyle }
          onClick={(e) => handleClick(e, i + 1)}
        >
          <Text
            className={ `${CssPrefix}-icon ${CssPrefix}-icon-star` }
            style={isActiveRate(cls, 'on') ? Object.assign(activeIconStyle, starIconStyle) : starIconStyle}
          ></Text>
          <View className={ `${CssPrefix}-rate__left` } style={isActiveRate(cls, 'half') ? activeIconStyle : {}}>
            <Text
              className={ `${CssPrefix}-icon ${CssPrefix}-icon-star` }
              style={starIconStyle}
            ></Text>
          </View>
        </View>
      ))}
    </CompContainer>
  )
}

export default Rate
