import { isWeb } from '../../common/utils'
import CanvasWeapp from './weapp'
import CanvasH5 from './h5'

const SlCanvas = isWeb ? CanvasH5 : CanvasWeapp

export default SlCanvas
