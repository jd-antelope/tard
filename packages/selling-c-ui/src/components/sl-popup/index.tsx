
import React from 'react'
import PropTypes, { InferProps } from 'prop-types'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { SlPopupProps, SlPopupState } from '../../../types/sl-popup'

export default class SlPopup extends React.Component<SlPopupProps, SlPopupState> {

    public static defaultProps: SlPopupProps
    public static propTypes: InferProps<SlPopupProps>
    public constructor(props: SlPopupProps) {
        super(props)

        const { isOpened } = props
        this.state = {
            _isOpened: isOpened
        }
    }

    private handleClose = (): void => {
        if (typeof this.props.onClose === 'function') {
          this.props.onClose()
        }
      }

    private close = (): void => {
        this.setState(
          {
            _isOpened: false
          },
          this.handleClose
        )
      }

    public render(): JSX.Element {
        const { _isOpened } = this.state
        const {
            title
        } = this.props

        const rootClass = classNames(
            'slc-popup',
            {
                'slc-popup--active': _isOpened
            },
            this.props.className
        )

        return (
                <View className={rootClass}>
                {/* <View className="slc-popup__mask" /> */}
                <View className="slc-popup__container">
                  {
                      title?
                     (
                        <View className="popup-header">
                            <View className="popup-header__title"> title</View>
                            <View className="popup-header__close" onClick ={this.close}></View>
                        </View>
                     ): null
                  }
                  <View className="popup-main">
                  </View>
                  <View className="popup-footer">
                </View>
                </View>
            </View>
        )

    }
}


SlPopup.propTypes = {
    title: PropTypes.string,
    isOpened: PropTypes.bool.isRequired,
    className: PropTypes.string
}




