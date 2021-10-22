import React, { Fragment } from 'react'
import { View } from '@tarojs/components'
import { SlFooterButtonProps, SlFooterButtonState } from '../../../types/sl-footer-button'
import PropTypes, {InferProps} from "prop-types";
import { objectToString } from '../../common/utils'

export default class SlFooterButton extends React.Component<SlFooterButtonProps, SlFooterButtonState> {
  public static defaultProps: SlFooterButtonProps
  public static propTypes: InferProps<SlFooterButtonProps>

  public constructor(props: SlFooterButtonProps) {
    super(props)
    this.state = {}
  }

  private handleClick() {
    this.props.onlick && this.props.onlick(arguments as any)
  }

  private handleClickSecBtn() {
    this.props.secOnlick && this.props.secOnlick(arguments as any)
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const containerStyle = (objectToString({
      padding: this.props.padding,
      // padding-bottom: constant(safe-area-inset-bottom),
      // padding-bottom: env(safe-area-inset-bottom);
    }))

    const style = (objectToString({
      color: this.props.color,
      background: this.props.background,
      'border-radius': this.props.radius,
      width: this.props.doubleBtn? '50%' : '100%',
      lineHeight: this.props.lineHeight
    }))

    const style2 = (objectToString({
      color: this.props.secColor,
      background: this.props.secBackground,
      'border-radius': this.props.radius,
      width: '50%',
      lineHeight: this.props.lineHeight
    }))

    return (
      <View className="slc-custom-footer-container" style={containerStyle}>
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
    )
  }
}

SlFooterButton.defaultProps = {
  name: '按钮',
  padding: '20px',
  radius: '0',
  lineHeight: '40px',
  doubleBtn: false,
  secondName: '取消',
}

SlFooterButton.propTypes = {
  name: PropTypes.string,
  onlick: PropTypes.func,
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
  secOnlick: PropTypes.func,
}
