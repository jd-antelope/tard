import React from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance } from '@tarojs/taro'

type CommonProps = {
  className: string
}

type CommonState = {
  themeStyle: string
}

export default class Common extends React.Component<CommonProps, CommonState> {
  $instance = getCurrentInstance()
  public static defaultProps: CommonProps

  private setThemeStyle () {
    if (!(Taro as any).Current.app || !(Taro as any).Current.app.themeParams) return 
    const { themeParams } = (Taro as any).Current.app
    let themeStyle = ''
    for (const item in themeParams) {
      themeStyle += `--${item}: ${themeParams[item]};`
    }
    this.setState({
      themeStyle
    })
  }

  public constructor(props: CommonProps) {
    super(props)
    this.state = {
      themeStyle: '--mainColor: #13CE66;--secondaryColor: #FF9B48;--promotionColor: #FF2929;'
    }
  }

  public componentDidMount(): void {
    this.setThemeStyle()
    const onShowEventId = (this.$instance as any).router.onShow
    // 监听
    eventCenter.on(onShowEventId, this.onShow)
  }

  public componentWillUnmount (): void {
    const onShowEventId = (this.$instance as any).router.onShow
    // 卸载
    eventCenter.off(onShowEventId, this.onShow)
  }

  onShow = () => {
    this.setThemeStyle()
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { className, children } = this.props
    const { themeStyle } = this.state
    return (
      <View className={ className } style={ themeStyle }>
        { children }
      </View>
    )
  }
}

Common.defaultProps = {
  className: ''
}
