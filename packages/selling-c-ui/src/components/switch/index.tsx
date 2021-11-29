
import React from 'react'
import { View } from '@tarojs/components'
import { SlSwitchProps, SlSwitchState } from '../../../types/switch'
import Common from '../../common/common'
import { pxTransform } from '../../common/utils'
import cn from 'classnames'
import { isFunction } from '../../common/is'
// import { CommonEvent } from '@tarojs/components/types/common'

export default class SlSwitch extends React.Component<SlSwitchProps, SlSwitchState> {
  public static defaultProps: SlSwitchProps

  public constructor(props: SlSwitchProps) {
    super(props)
    this.state = {
      checked: props.checked,
    }
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const {className,
      bgHeight = 32,
      bgWidth = 90,
      btnSize = 44,
      radius = 19 ,
      activeColor,
      bgColor,
      btnColor,
      checked
    } = this.props

    const rootCls = cn(
      'slc-switch',
      {
        'slc-switch__active': checked
      },
      className
    )

 
    const rootSty: any = `width: ${pxTransform(bgWidth)};height: ${pxTransform(bgHeight)}`
    const bgStyle: any = `width: ${pxTransform(bgWidth)};height: ${pxTransform(bgHeight)}; background: ${checked ? activeColor : bgColor};border-radius: ${pxTransform(radius)}`
    const btnStyle: any = `width: ${pxTransform(btnSize)};height: ${pxTransform(btnSize)}; background: ${btnColor}; transform: ${checked ? `translateX(${pxTransform(bgWidth - btnSize)})`: ''}; top: ${pxTransform(-(btnSize - bgHeight)/2)}`

    return <Common className={rootCls} style={rootSty} 
      onClick={()=>{
        const  v = !checked
        if(isFunction(this.props.onChange)) {
          this.props.onChange(v)
        }
    }}>
        <View className="slc-switch__bg" style={bgStyle} />
        <View className="slc-switch__btn" style={btnStyle}></View>
    </Common>
  }
}

SlSwitch.defaultProps = {
  className: '',
  activeColor: '',
  btnColor: '',
  bgColor: '',
  bgHeight: 32,
  bgWidth: 90,
  btnSize: 44,
  disabled: false,
  checked: false,
  radius: 19
}
