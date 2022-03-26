
import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import cn from 'classnames'
import { SwitchProps } from './type'
import CompContainer from '../../common/comp-container'
import { pxTransform } from '../../common/utils'
import { isFunction } from '../../common/is'
import { cssPrefix } from '../../common'

const Switch: FC<SwitchProps> = (props) => {
  const { 
    className = '',
    activeColor = '',
    btnColor = '',
    bgColor = '',
    bgHeight = 32,
    bgWidth = 90,
    btnSize = 44,
    disabled = false,
    radius = 19,
    customizeStyle = ''
  } = props
  const CssPrefix = cssPrefix()
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(props.checked || false)
  }, [props.checked])

  const rootCls = cn(
    `${CssPrefix}-switch`,
    {
      [`${CssPrefix}-switch__active`]: checked
    },
    className
  )

  const rootSty: string = `width: ${pxTransform(bgWidth)};height: ${pxTransform(bgHeight)}`
  const bgStyle: string = `
    width: ${pxTransform(bgWidth)};
    height: ${pxTransform(bgHeight)}; 
    background: ${checked ? activeColor : bgColor};
    border-radius: ${pxTransform(radius)}`
  const btnStyle: string = `
    width: ${pxTransform(btnSize)};
    height: ${pxTransform(btnSize)}; 
    background: ${btnColor}; 
    transform: ${checked ? `translateX(${pxTransform(bgWidth - btnSize)})`: ''}; 
    top: ${pxTransform(-(btnSize - bgHeight)/2)}`

  return (
    <CompContainer 
      className={rootCls} style={rootSty} 
      customizeStyle={ customizeStyle }
      onClick={()=>{
        const v = !checked
        if(isFunction(props.onChange) && !disabled) {
          props.onChange(v)
        }
      }}
    >
      <View className={ `${CssPrefix}-switch__bg` } style={bgStyle} />
      <View className={ `${CssPrefix}-switch__btn` } style={btnStyle}></View>
    </CompContainer>
  )
}

export default Switch
