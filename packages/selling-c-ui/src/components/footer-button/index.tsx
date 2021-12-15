import React, { Fragment } from 'react'
import { View } from '@tarojs/components'
import { SlFooterButtonProps, SlFooterButtonState } from '../../../types/footer-button'
import { objectToString, pxTransform } from '../../common/utils'
import Common from '../../common/common'
import classNames from 'classnames';
import { isFunction } from '../../common/is'

export default class SlFooterButton extends React.Component<SlFooterButtonProps, SlFooterButtonState> {
  public static defaultProps: SlFooterButtonProps

  public constructor(props: SlFooterButtonProps) {
    super(props)
    this.state = {}
  }

  private handleClick() {
    isFunction(this.props.onClick) && this.props.onClick()
  }

  private handleClickSecBtn() {
    isFunction(this.props.secClick) && this.props.secClick()
  }

  public getPadding () {
    if (!this.props.padding) return pxTransform(20)
    const paddingArray: Array<any> = this.props.padding.split(' ')
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

  public getStyle () {
    const styleObj = {
      'border-radius': pxTransform(this.props.radius || 0),
      lineHeight: pxTransform(this.props.lineHeight || 0)
    }
    if (this.props.color) styleObj['color'] = this.props.color
    if (this.props.margin && this.props.doubleBtn) styleObj['margin-left'] = pxTransform(this.props.margin)
    if (this.props.background) styleObj['background'] = this.props.background
    return styleObj
  }

  public getStyle2 () {
    const styleObj = {
      'border-radius': pxTransform(this.props.radius || 0),
      lineHeight: pxTransform(this.props.lineHeight || 0)
    }
    if (this.props.secColor) styleObj['color'] = this.props.secColor
    if (this.props.secBackground) styleObj['background'] = this.props.secBackground
    return styleObj
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {

    const style = (objectToString(this.getStyle()))

    const style2 = (objectToString(this.getStyle2()))

    const styleContainer = (objectToString({
      width: '100%',
      padding: this.getPadding(),
    }))
  

    return (
      <Common className={classNames("slc-custom-footer-container", this.props.className, { "slc-custom-footer-container-fixed" :  this.props.isFixed})}>
        <View style={styleContainer}>
          { this.props.content ?
              <Fragment>{ this.props.content }</Fragment>
              :
              <View className='slc-custom-outer'>
                {
                  this.props.doubleBtn && <View className="slc-custom-footer slc-custom-footer-btn2" style={style2} onClick={this.handleClickSecBtn.bind(this)}>{this.props.secondName}</View>
                }
                <View className="slc-custom-footer slc-custom-footer-btn1" style={style} onClick={this.handleClick.bind(this)}>{this.props.name} </View>
              </View>
          }
        </View>
      </Common>
    )
  }
}

SlFooterButton.defaultProps = {
  name: '按钮',
  padding: pxTransform(20),
  margin: 0,
  radius: 0,
  lineHeight: 80,
  doubleBtn: false,
  isFixed: true,
  secondName: '取消',
}
