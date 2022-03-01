
import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { InferProps } from 'prop-types'
import { DropdownMenuItemProps } from '../type'
import Icon from '../../icon'
import CompContainer from '../../../common/comp-container'
import { CssPrefix } from '../../../common'

export default class DropdownMenuItem extends React.Component<DropdownMenuItemProps> {
  public static defaultProps: DropdownMenuItemProps
  public static propTypes: InferProps<DropdownMenuItemProps>

  public render(): JSX.Element {
    const { title, active, onClick, options, value, activeColor, titleAlign, flex } = this.props
    return (
      <CompContainer
        className={`${CssPrefix}-dropdown-menu-item`}
        style={`flex: ${flex}`}
        onClick={() => onClick()}>
        <View
          className={
            cn(
              `${CssPrefix}-dropdown-menu-item__title`,
              {
                [`${CssPrefix}-dropdown-menu-item__active`]: active
              }
            )
          }
          style={activeColor && active ? `color: ${activeColor}; justify-content: ${titleAlign}` : `justify-content: ${titleAlign}`}
        >
          <View
            className={`${CssPrefix}-dropdown-menu-item__title-text`}>
            {title || options?.filter(option => option.value === value)[0]?.text || options?.[0]?.text}
          </View>
          <Icon
            value={
              active ? 'chevron-up' : 'chevron-down'
            }
            size={16}
          >
          </Icon>
        </View>
      </CompContainer>
    )
  }
}

DropdownMenuItem.defaultProps = {
  value: '',
  title: '',
  options: [],
  activeColor: '',
  titleAlign: 'center',
  flex: 1,
  onClick: null
}
