
import React, { cloneElement, ReactElement, ComponentProps } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { SlDropdownMenuProps, SlDropdownMenuState } from '../../../types/dropdown-menu'
import Common from '../../common/common'
import SlDropdownMenuItem from './dropdown-menu-item';
import { isWeb } from '../../common/utils'
export default class SlDropdownMenu extends React.Component<SlDropdownMenuProps, SlDropdownMenuState> {
  public static defaultProps: SlDropdownMenuProps

  public constructor(props: SlDropdownMenuProps) {
    super(props)
    this.state = {
      activeKey: -1,
      isOpen: false
    }
  }

  public render(): JSX.Element {
    if(isWeb()) {
      document.body.style.overflow = 'hidden'
    }
    const { activeKey, isOpen } = this.state
    const { activeColor, titleAlign } = this.props

    const items: ReactElement<ComponentProps<typeof SlDropdownMenuItem>>[] = []

    const changeActive = (key) => {
      this.setState({
        activeKey: key,
      });
      if (key === -1) {
        this.setState({
          activeKey: key,
        })
      }
    }

    const clickOption = (optionValue) => {
      changeActive(-1)
      this.setState({ isOpen: false })
      const onChange = items[activeKey].props.onChange
      onChange(optionValue)
    }

    const nav = React.Children.map(this.props.children, (child, index) => {
      if (React.isValidElement(child)) {
        const childProps = {
          ...child.props,
          onClick: () => {
            if (!child.props.onClick) {
              changeActive(activeKey === index ? -1 : index);
              this.setState({ isOpen: true })
            } else {
              child.props.onClick()
            }
          },
          activeColor: activeColor,
          titleAlign: titleAlign,
          active: index === activeKey,
        }
        items.push(child)
        return cloneElement(child, childProps)
      } else {
        return child
      }
    })

    return (
      <Common className='slc-dropdown-menu'>

        <View className='slc-dropdown-menu__bar'>
          {nav}
        </View>

        <View className={cn('slc-dropdown-menu__popup')}>
          {
            items.map((item, index) => {
              const { value, options } = item.props
              return (
                <View
                  className={
                    cn(
                      'slc-dropdown-menu__overlay',
                      {
                        'slc-dropdown-menu__overlay-active': isOpen && activeKey !== -1
                      }
                    )
                  }
                  key={value}
                  onClick={() => {
                    changeActive(-1);
                    this.setState(
                      {
                        isOpen: false
                      }
                    )
                  }}
                  catchMove
                >
                  <View
                    key={index}
                    className={
                      cn('slc-dropdown-menu__popup-item', {
                        'slc-dropdown-menu__popup-item__active': isOpen && activeKey === index
                      })
                    }
                  >
                    {
                      options?.map(option => (
                        <View
                          className={(
                            cn(
                              'slc-dropdown-menu-item__view',
                              { 'slc-dropdown-menu-item__view__active': value === option.value }
                            ))}
                          style={activeColor && value === option.value ? `color: ${activeColor}` : ''}
                          key={option.text}
                          onClick={() => { clickOption(option.value) }}
                        >
                          {option.text}
                        </View>
                      ))
                    }
                    {item.props?.content}
                  </View>
                </View>
              )
            }
            )
          }
        </View>
      </Common>
    )
  }
}

SlDropdownMenu.defaultProps = {
  activeColor: '',
  titleAlign: 'center'
}
