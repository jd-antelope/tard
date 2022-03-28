import CellComponent from './cell'
import CellGroup from './group'

import { CellProps } from './type'

interface CellInterface {
    // eslint-disable-next-line no-undef
    (props: CellProps): JSX.Element

    Group: typeof CellGroup
}

const Cell = CellComponent as CellInterface
Cell.Group = CellGroup

export default Cell