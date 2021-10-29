
import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import { SlDropdownMenuItemProps, SlDropdownMenuItemState } from '../../../../types/dropdown-menu'
import SlIcon from '../../icon'
import Common from '../../../common/common'

export default class SlDropdownMenuItem extends React.Component<SlDropdownMenuItemProps, SlDropdownMenuItemState> {
  public static defaultProps: SlDropdownMenuItemProps
  public static propTypes: InferProps<SlDropdownMenuItemProps>

  public constructor(props: SlDropdownMenuItemProps) {
    super(props)
    this.state = {
      isActive: false
    }
  }
  public render(): JSX.Element {
    const { title, active, onClick, options, value, activeColor } = this.props
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
          style={activeColor ? `color: ${activeColor}` : ''}
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
  onClick: () => { }
}

SlDropdownMenuItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  options: PropTypes.array,
  onClick: PropTypes.func,
  key: PropTypes.number
}
