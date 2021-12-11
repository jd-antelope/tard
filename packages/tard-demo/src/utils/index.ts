import Taro from '@tarojs/taro'

const isWeb = Taro.getEnv() === Taro.ENV_TYPE.WEB

export {
  isWeb
}
