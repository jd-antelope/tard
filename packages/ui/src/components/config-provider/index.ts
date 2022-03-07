import ConfigProvider from './config-provider'
import { ConfigProviderProps } from './type'

interface ConfigProviderInterface {
  // eslint-disable-next-line no-undef
  (props: ConfigProviderProps): JSX.Element
}

export default ConfigProvider as ConfigProviderInterface
 
