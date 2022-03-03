import DropdownMenuComponent from './dropdown-menu'

import DropdownMenuItem from './dropdown-menu-item'

import { DropdownMenuProps } from './type'

interface DropdownMenuInterface {
  // eslint-disable-next-line no-undef
  (props: DropdownMenuProps): JSX.Element

  Item: typeof DropdownMenuItem
}


const DropdownMenu = DropdownMenuComponent as DropdownMenuInterface
DropdownMenu.Item = DropdownMenuItem

export default DropdownMenu
