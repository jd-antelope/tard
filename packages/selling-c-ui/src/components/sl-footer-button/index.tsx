import React, { Fragment } from 'react'
import { View } from '@tarojs/components'
import { SlFooterButtonProps, SlFooterButtonState } from '../../../types/sl-footer-button'
import PropTypes, {InferProps} from "prop-types";

export default class SlFooterButton extends React.Component<SlFooterButtonProps, SlFooterButtonState> {
  public static defaultProps: SlFooterButtonProps
  public static propTypes: InferProps<SlFooterButtonProps>

  public constructor(props: SlFooterButtonProps) {
    super(props)
    this.state = {}
  }

  private handleClick() {
    this.props.clickBtn && this.props.clickBtn(arguments as any)
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    return (
      <View className="slc-custom-footer-container">
        { this.props.replaceContent ?
            <Fragment>{ this.props.replaceContent }</Fragment>
        :
            <View className="slc-custom-footer" onClick={this.handleClick.bind(this)}>{this.props.btnName}</View>
        }
      </View>
    )
  }
}

SlFooterButton.defaultProps = {
  btnName: '按钮'
}

SlFooterButton.propTypes = {
  btnName: PropTypes.string,
  clickBtn: PropTypes.func,
  replaceContent: PropTypes.any
}
