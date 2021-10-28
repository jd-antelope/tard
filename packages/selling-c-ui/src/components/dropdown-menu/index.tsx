
import React, { cloneElement, ReactElement, ComponentProps } from 'react'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import { SlDropdownMenuProps, SlDropdownMenuState } from '../../../types/dropdown-menu'
import Common from '../../common/common'
import SlDropdownMenuItem from './item';

export default class SlDropdownMenu extends React.Component<SlDropdownMenuProps, SlDropdownMenuState> {
  public static defaultProps: SlDropdownMenuProps
  public static propTypes: InferProps<SlDropdownMenuProps>

  public constructor(props: SlDropdownMenuProps) {
    super(props)
    this.state = {
      activeKey: 0
    }
  }

  // private onChange = (key: string | null) => {
  //   this.setState(
  //     {
  //       value: key
  //     },
  //   )
  // }

  public render(): JSX.Element {
    const { activeKey } = this.state
    const { activeColor, children } = this.props

    const items: ReactElement<ComponentProps<typeof SlDropdownMenuItem>>[] = []

    const changeActive = (key) => {
      console.log('changeActive:', key)
      if (activeKey === key) {
        // this.onChange(null)
      } else {
        // this.onChange(key)
      }
    }

    const nav = React.Children.map(children, (child, index) => {
      if (React.isValidElement(child)) {
        console.log('1')
        const childProps = {
          ...child.props,
          onClick: () =>  {
            console.log('click')
            changeActive(index)
          },
          active: index === activeKey,
        }
        items.push(child)
        return cloneElement(child, childProps)
      } else {
        console.log('2')
        return child
      }
    })

    console.log(nav)
    return (
      <Common>
        <View className='slc-dropdown-menu' style={{ color: activeColor }}>
          <View className='slc-dropdown-menu__bar'>
            {nav}
          </View>
          {/* <View>订单类型</View>
          <View>商品类型</View>
          <View>时间</View> */}
          {/* {children} */}
        </View>
      </Common>
    )
  }
}

SlDropdownMenu.defaultProps = {
  activeColor: '',
  overlay: true
}

SlDropdownMenu.propTypes = {
  activeColor: PropTypes.string,
  overlay: PropTypes.bool,
}
