import React, { Fragment } from 'react'
import { View } from '@tarojs/components'
import { SlFooterButtonProps, SlFooterButtonState } from '../../../types/footer-button'
import PropTypes, {InferProps} from "prop-types";
import { objectToString, pxTransform } from '../../common/utils'

export default class SlFooterButton extends React.Component<SlFooterButtonProps, SlFooterButtonState> {
  public static defaultProps: SlFooterButtonProps
  public static propTypes: InferProps<SlFooterButtonProps>

  public constructor(props: SlFooterButtonProps) {
    super(props)
    this.state = {}
  }

  private handleClick() {
    this.props.onClick && this.props.onClick(arguments as any)
  }

  private handleClickSecBtn() {
    this.props.secClick && this.props.secClick(arguments as any)
  }

  public getPadding () {
    if (!this.props.padding) return '20px'
    const paddingArray: Array<any> = this.props.padding.split(' ')
    if (!paddingArray.length) return '20px'
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
      width: this.props.doubleBtn? '50%' : '100%',
      lineHeight: pxTransform(this.props.lineHeight || 0)
    }
    if (this.props.color) styleObj['color'] = this.props.color
    if (this.props.background) styleObj['background'] = this.props.background
    return styleObj
  }

  public getStyle2 () {
    const styleObj = {
      'border-radius': pxTransform(this.props.radius || 0),
      width: this.props.doubleBtn? '50%' : '100%',
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
      <View className="slc-custom-footer-container">
        <View style={styleContainer}>
          { this.props.replaceContent ?
              <Fragment>{ this.props.replaceContent }</Fragment>
              :
              <View className='slc-custom-outer'>
                {
                  this.props.doubleBtn && <View className="slc-custom-footer slc-custom-footer-btn2" style={style2} onClick={this.handleClickSecBtn.bind(this)}>{this.props.secondName}</View>
                }
                <View className="slc-custom-footer slc-custom-footer-btn1" style={style} onClick={this.handleClick.bind(this)}>{this.props.name}</View>
              </View>
          }
        </View>
      </View>
    )
  }
}

SlFooterButton.defaultProps = {
  name: '按钮',
  padding: '20px',
  radius: 0,
  lineHeight: 80,
  doubleBtn: false,
  secondName: '取消',
}

SlFooterButton.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
  replaceContent: PropTypes.any,
  color: PropTypes.string,
  background: PropTypes.string,
  padding: PropTypes.string,
  radius: PropTypes.string,
  lineHeight: PropTypes.string,
  doubleBtn: PropTypes.bool,
  secondName: PropTypes.string,
  secColor: PropTypes.string,
  secBackground: PropTypes.string,
  secClick: PropTypes.func,
}
