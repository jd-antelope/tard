import Taro from '@tarojs/taro'
import ConfigProviderComponent from './config-provider'
import { ConfigProviderProps } from './type'

interface ConfigProviderInterface {
  // eslint-disable-next-line no-undef
  (props: ConfigProviderProps): JSX.Element
  config: Function
}

const config = ({
  theme = {},
  cssPrefix = 'tard'
}) => {
  (Taro as any).Current.app.themeParams = theme;
  (Taro as any).Current.app.cssPrefix = cssPrefix;
};

const ConfigProvider = ConfigProviderComponent as ConfigProviderInterface
ConfigProvider.config = config

export default ConfigProvider as ConfigProviderInterface
