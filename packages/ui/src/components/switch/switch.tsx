
import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { SwitchProps } from './type'
import CompContainer from '../../common/comp-container'
import { pxTransform } from '../../common/utils'
import cn from 'classnames'
import { isFunction } from '../../common/is'

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
  const [checked, setChecked] = useState<boolean>(false)

  useEffect(() => {
    setChecked(props.checked || false)
  }, [props.checked])

  const rootCls = cn(
    'slc-switch',
    {
      'slc-switch__active': checked
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
    <CompContainer customizeStyle={ customizeStyle }>
      <View className={rootCls} style={rootSty} 
        onClick={()=>{
          const v = !checked
          if(isFunction(props.onChange) && !disabled) {
            props.onChange(v)
          }
        }}
      >
        <View className="slc-switch__bg" style={bgStyle} />
        <View className="slc-switch__btn" style={btnStyle}></View>
      </View>
    </CompContainer>
  )
}

export default Switch
