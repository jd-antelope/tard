
import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { DropdownMenuItemProps } from '../type'
import Icon from '../../icon'
import { cssPrefix } from '../../../common'

const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  value = '',
  title = '',
  options = [],
  activeColor = '',
  titleAlign = 'center',
  flex = 1,
  active,
  onClick = () => {}
}) => {
  const CssPrefix = cssPrefix()
  return (
    <View
      className={ `${CssPrefix}-dropdown-menu-item` }
      style={ `flex: ${flex}` }
      onClick={ () => onClick() }
    >
      <View
        className={
          cn(
            `${CssPrefix}-dropdown-menu-item__title`,
            {
              [`${CssPrefix}-dropdown-menu-item__active`]: active
            }
          )
        }
        style={ activeColor && active ? `color: ${activeColor}; justify-content: ${titleAlign}` : `justify-content: ${titleAlign}` }
      >
        <View
          className={ `${CssPrefix}-dropdown-menu-item__title-text` }
        >
          {title || options?.filter(option => option?.value === value)[0]?.text || options?.[0]?.text}
        </View>
        <Icon
          value={
            active ? 'chevron-up' : 'chevron-down'
          }
          size={ 16 }
        />
      </View>
    </View>
  )

}

export default DropdownMenuItem
