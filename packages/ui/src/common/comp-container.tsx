import React, {CSSProperties} from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance, getEnv, ENV_TYPE } from '@tarojs/taro'
import { transformationString } from './utils'
import { isObject } from './is'

type CommonProps = {
  className?: string,
  style?: CSSProperties | string,
  customizeStyle?: string,
  [propName: string]: any
}

type CommonState = {
  themeStyle: string
}

export default class CompContainer extends React.Component<CommonProps, CommonState> {
  $instance = getCurrentInstance()
  public static defaultProps: CommonProps
  private setThemeStyle () {
    if (!(Taro as any).Current.app || !(Taro as any).Current.app.themeParams) return
    const { themeParams } = (Taro as any).Current.app
    let themeStyle = ''

    for (const item in themeParams) {
      themeStyle += `--${item}: ${themeParams[item]};`
    }

    themeStyle += 'color: var(--color-text)'
    this.setState({
      themeStyle
    })
  }

  public constructor (props: CommonProps) {
    super(props)
    this.state = {
      themeStyle: ''
    }
  }

  public componentDidMount (): void {
    this.setThemeStyle()
    if (getEnv() === ENV_TYPE.WEAPP) {
      const onShowEventId = (this.$instance as any).router.onShow
      // 监听
      eventCenter.on(onShowEventId, this.onShow)
    }
  }

  public componentWillUnmount (): void {
    if (getEnv() === ENV_TYPE.WEAPP) {
      const onShowEventId = (this.$instance as any).router.onShow
      // 卸载
      eventCenter.off(onShowEventId, this.onShow)
    }
  }

  onShow = () => {
    this.setThemeStyle()
  }

  public render (): JSX.Element | null {
    const { className, children, style, customizeStyle = '', ...rest } = this.props
    const { themeStyle } = this.state

    const styleString = isObject(style) ? transformationString(style) : style
    return (
      <View className={ className } style={ customizeStyle || themeStyle  + styleString } { ...rest }>
        {children}
      </View>
    )
  }
}

CompContainer.defaultProps = {
  className: '',
  style: '',
  customizeStyle: ''
}
