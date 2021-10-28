
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

  // private handleClick(): void {
  //   // this.props.onClick && this.props.onClick(arguments as any)
  // }
  // classNames('slc-input-number__btn', {
  //   'slc-input-number--disabled': inputValue >= max || disabled
  // })、

  public constructor (props: SlDropdownMenuItemProps) {
    super(props)
    this.state = {
      isActive: false,
    }
  }
  
  public render(): JSX.Element {
    const { options, title, active } = this.props
    return (
      <Common className={cn('slc-dropdown-menu-item')}>
        <View className={cn('slc-dropdown-menu-item__title', {'slc-dropdown-menu-item__active': active})}>
          <View className='slc-dropdown-menu-item__title-text'>{title}</View>
          <SlIcon value={active ? 'chevron-up' : 'chevron-down'} size={16}></SlIcon>
        </View>
        <View>
          {options?.map(item => (<View className={(cn('slc-dropdown-menu-item__view'))} key={item.value}>{item.text}</View>))}
        </View>
      </Common>
    )
  }
}

SlDropdownMenuItem.defaultProps = {
  value: '',
  title: '',
  options: []
}

SlDropdownMenuItem.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  title: PropTypes.string,
  options: PropTypes.array
}
