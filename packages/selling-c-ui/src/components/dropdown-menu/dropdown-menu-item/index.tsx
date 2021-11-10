
import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { InferProps } from 'prop-types'
import { SlDropdownMenuItemProps } from '../../../../types/dropdown-menu'
import SlIcon from '../../icon'
import Common from '../../../common/common'

export default class SlDropdownMenuItem extends React.Component<SlDropdownMenuItemProps> {
  public static defaultProps: SlDropdownMenuItemProps
  public static propTypes: InferProps<SlDropdownMenuItemProps>

  public render(): JSX.Element {
    const { title, active, onClick, options, value, activeColor, titleAlign } = this.props
    return (
      <Common
        className={
          cn('slc-dropdown-menu-item')
        }
        onClick={() => onClick()}>
        <View
          className={
            cn(
              'slc-dropdown-menu-item__title',
              {
                'slc-dropdown-menu-item__active': active
              })
          }
          style={activeColor && active ? `color: ${activeColor}; justify-content: ${titleAlign}` : `justify-content: ${titleAlign}`}
        >
          <View
            className='slc-dropdown-menu-item__title-text'>
            {title || options?.filter(option => option.value === value)[0]?.text || options?.[0]?.text}
          </View>
          <SlIcon
            value={
              active ? 'chevron-up' : 'chevron-down'
            }
            size={16}
          >
          </SlIcon>
        </View>
      </Common>
    )
  }
}

SlDropdownMenuItem.defaultProps = {
  value: '',
  title: '',
  options: [],
  activeColor: '',
  titleAlign: 'center',
  onClick: () => { }
}
