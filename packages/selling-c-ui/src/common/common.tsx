import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'

type CommonProps = {
  className: string
}

type CommonState = {
  themeStyle: string
}

export default class Common extends React.Component<CommonProps, CommonState> {
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
  }

  public componentDidShow(): void {
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
