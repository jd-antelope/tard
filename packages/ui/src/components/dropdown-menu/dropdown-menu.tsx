
import React, { cloneElement, ReactElement, ComponentProps } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { DropdownMenuProps, DropdownMenuState } from './type'
import CompContainer from '../../common/comp-container'
import DropdownMenuItem from './dropdown-menu-item';
import { isWeb } from '../../utils'
import { CssPrefix } from '../../common'

export default class DropdownMenu extends React.Component<DropdownMenuProps, DropdownMenuState> {
  public static defaultProps: DropdownMenuProps

  public constructor(props: DropdownMenuProps) {
    super(props)
    this.state = {
      activeKey: -1,
      isOpen: false
    }
  }

  public componentWillUnmount(): void {
    if (isWeb) {
      document.body.style.overflow = 'auto'
    }
  }

  public render(): JSX.Element {
    const { activeKey, isOpen } = this.state
    const { activeColor, titleAlign } = this.props

    const items: ReactElement<ComponentProps<typeof DropdownMenuItem>>[] = []

    const changeActive = (key: number) => {
      this.setState({
        activeKey: key,
      });
      if (key === -1) {
        if (isWeb) {
          document.body.style.overflow = 'auto'
        }
      } else {
        if (isWeb) {
          document.body.style.overflow = 'hidden'
        }
      }
    }

    const clickOption = (optionValue: any) => {
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
      <CompContainer className={`${CssPrefix}-dropdown-menu`}>

        <View className={`${CssPrefix}-dropdown-menu__bar`}>
          {nav}
        </View>

        <View className={`${CssPrefix}-dropdown-menu__popup`}>
          {
            items.map((item, index) => {
              const { value, options } = item.props
              return (
                <View
                  className={
                    cn(
                      `${CssPrefix}-dropdown-menu__overlay`,
                      {
                        [`${CssPrefix}-dropdown-menu__overlay-active`]: isOpen && activeKey === index
                      }
                    )
                  }
                  key={index}
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
                      cn(
                        `${CssPrefix}-dropdown-menu__popup-item`,
                        {
                          [`${CssPrefix}-dropdown-menu__popup-item__active`]: isOpen && activeKey === index
                        }
                      )
                    }
                  >
                    {
                      options?.map((option: any) => (
                        <View
                          className={
                            cn(
                              `${CssPrefix}dropdown-menu-item__view`,
                              {
                                [`${CssPrefix}-dropdown-menu-item__view__active`]: value === option.value
                              }
                            )

                          }
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
      </CompContainer>
    )
  }
}

DropdownMenu.defaultProps = {
  activeColor: '',
  titleAlign: 'center'
}
