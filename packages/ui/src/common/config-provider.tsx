import React, { FC , useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import Taro, { eventCenter, getCurrentInstance, getEnv, ENV_TYPE } from '@tarojs/taro'

type CommonProps = {
  className?: string,
  style?: string,
  [propName: string]: any
}

const ConfigProvider: FC<CommonProps> = (props) => {
  const [themeStyle, setThemeStyle] = useState<string>('')

  const changeThemeStyle = () => {
    if (!(Taro as any).Current.app || !(Taro as any).Current.app.themeParams) return
    const { themeParams } = (Taro as any).Current.app
    let themeStyle = ''
    // eslint-disable-next-line guard-for-in
    for (const item in themeParams) {
      themeStyle += `--${item}: ${themeParams[item]};`
    }
    setThemeStyle(themeStyle)
  }

  const instance = getCurrentInstance()

  useEffect(() => {
    changeThemeStyle()
    if (getEnv() === ENV_TYPE.WEAPP) {
      const onShowEventId = (instance as any).router.onShow
      // 监听
      eventCenter.on(onShowEventId, this.onShow)
    }

    return () => {
      if (getEnv() === ENV_TYPE.WEAPP) {
        const onShowEventId = (instance as any).router.onShow
        // 卸载
        eventCenter.off(onShowEventId, this.onShow)
      }
    }
  }, [])


  const { className, children, style, ...rest } = props
  return (
    <View className={ className } style={ themeStyle + style } { ...rest }>
      {children}
    </View>
  )
}

export default ConfigProvider