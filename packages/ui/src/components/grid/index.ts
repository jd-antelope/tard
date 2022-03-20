import GridComponent from "./grid"

import GridItem from './grid-item'

import { GridProps } from './type'

interface GridInterface {
  // eslint-disable-next-line no-undef
  (props: GridProps): JSX.Element

  Item: typeof GridItem
}

const Grid = GridComponent as GridInterface
Grid.Item = GridItem

export default Grid
