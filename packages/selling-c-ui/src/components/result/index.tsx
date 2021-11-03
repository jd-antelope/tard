
import React from 'react'
import classNames from 'classnames'
import SlImage from '../image'
import SlButton from '../button'
import PropTypes, { InferProps } from 'prop-types'
import { View, Text } from '@tarojs/components'
import { SlResultProps, SlResultState } from '../../../types/result'

export default class SlResult extends React.Component<SlResultProps, SlResultState> {
  public static defaultProps: SlResultProps
  public static propTypes: InferProps<SlResultProps>

  public constructor(props: SlResultProps) {
    super(props)
  }

  private click = () => {
    this.props.onClick && this.props.onClick()
  }

  // eslint-disable-next-line no-undef
  public render(): JSX.Element | null {
    const { src, text, btnText,rect } = this.props
    const rootClass = classNames(
      'slc-result',
      this.props.className
    )

    const resultImgClass = classNames(
      'slc-result__image',
     {[`slc-result__image__${rect}`]:[ 'angle', 'circle'].includes(rect)})

    return (
      <View className={ rootClass }>
        <SlImage src={ src } className={ resultImgClass } />
        <Text className="slc-result__text">{ text }</Text>
        <SlButton fill size="small" radius={ 12 } onClick={ this.click }>{ btnText }</SlButton>
      </View>
    )
  }
}

SlResult.defaultProps = {
  src: '',
  text: '状态文字',
  btnText: '点我试试',
  rect:'normal',
  onClick: () => { }
}
SlResult.propTypes = {
  src: PropTypes.string,
  rect: PropTypes.oneOf(['angle', 'circle']),
  text: PropTypes.string,
  btnText: PropTypes.bool,
  onClick: PropTypes.func,

}

