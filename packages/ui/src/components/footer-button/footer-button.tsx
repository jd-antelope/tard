import React, { Fragment, FC } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames';
import { FooterButtonProps } from './type'
import { objectToString, pxTransform } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import { isFunction } from '../../common/is'

const FooterButton: FC<FooterButtonProps> = (props) => {
  const handleClick = () => {
    isFunction(props.onClick) && props.onClick()
  }

  const handleClickSecBtn = () => {
    isFunction(props.secClick) && props.secClick()
  }

  const getPadding = () => {
    if (!props.padding) return pxTransform(20)
    const paddingArray: Array<any> = props.padding.split(' ')
    if (!paddingArray.length) return pxTransform(20)
    const reg = '/px/g'
    paddingArray.forEach(item => {
      item = +item.replace(reg, '')
    })
    if (paddingArray.length === 1) return `${pxTransform(paddingArray[0])}`
    if (paddingArray.length === 2) return `${pxTransform(paddingArray[0])} ${pxTransform(paddingArray[1])}`
    if (paddingArray.length === 3) return `${pxTransform(paddingArray[0])} ${pxTransform(paddingArray[1])} ${pxTransform(paddingArray[2])}`
    if (paddingArray.length === 4) return `${pxTransform(paddingArray[0])} ${pxTransform(paddingArray[1])} ${pxTransform(paddingArray[2])} ${pxTransform(paddingArray[3])}`
  }

  const getStyle = () => {
    const styleObj = {
      'border-radius': pxTransform(props.radius || 0),
      lineHeight: pxTransform(props.lineHeight || 0)
    }
    if (props.color) styleObj['color'] = props.color
    if (props.margin && props.doubleBtn) styleObj['margin-left'] = pxTransform(props.margin)
    if (props.background) styleObj['background'] = props.background
    return styleObj
  }

  const getStyle2 = () => {
    const styleObj = {
      'border-radius': pxTransform(props.radius || 0),
      lineHeight: pxTransform(props.lineHeight || 0)
    }
    if (props.secColor) styleObj['color'] = props.secColor
    if (props.secBackground) styleObj['background'] = props.secBackground
    return styleObj
  }


  const style = (objectToString(getStyle()))

  const style2 = (objectToString(getStyle2()))

  const styleContainer = (objectToString({
    width: '100%',
    padding: getPadding(),
  }))


  return (
    <CompContainer 
      customizeStyle={ props.customizeStyle }
      className={classNames("slc-custom-footer-container", props.className, { "slc-custom-footer-container-fixed" :  props.isFixed})}
    >
      <View style={styleContainer}>
        { props.content ?
            <Fragment>{ props.content }</Fragment>
            :
            <View className='slc-custom-outer'>
              {
                props.doubleBtn && <View className="slc-custom-footer slc-custom-footer-btn2" style={style2} onClick={handleClickSecBtn}>{props.secondName}</View>
              }
              <View className="slc-custom-footer slc-custom-footer-btn1" style={style} onClick={handleClick}>{props.name} </View>
            </View>
        }
      </View>
    </CompContainer>
  )
}

export default FooterButton

// SlFooterButton.defaultProps = {
//   name: '按钮',
//   padding: pxTransform(20),
//   margin: 0,
//   radius: 0,
//   lineHeight: 80,
//   doubleBtn: false,
//   isFixed: true,
//   secondName: '取消',
// }
