import { isWeb } from '../../common/utils'
import SlCanvasWeapp from './weapp'
import SlCanvasH5 from './h5'

const SlCanvas = isWeb ? SlCanvasH5 : SlCanvasWeapp

export default SlCanvas
