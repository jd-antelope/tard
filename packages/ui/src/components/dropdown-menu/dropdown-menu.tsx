
import React, { cloneElement, ReactElement, ComponentProps, FC, useState , useEffect } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { DropdownMenuProps } from './type'
import CompContainer from '../../common/comp-container'
import DropdownMenuItem from './dropdown-menu-item'
import { isWeb } from '../../utils'
import { CssPrefix } from '../../common'

export const DropdownMenu: FC<DropdownMenuProps> = (props) => {
  const [activeKey, setActiveKey] = useState<number>(-1)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    return() => {
      if (isWeb) {
        document.body.style.overflow = 'auto'
      }
    }
  }, [])

  const { activeColor, titleAlign } = props

  const items: ReactElement<ComponentProps<typeof DropdownMenuItem>>[] = []

  const changeActive = (key: number) => {
    setActiveKey(key)
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
    setIsOpen(false)
    const { onChange } = items[activeKey].props
    if(onChange) {
      onChange(optionValue)
    }
  }

  const nav = React.Children.map(props.children, (child, index) => {
    if (React.isValidElement(child)) {
      const childProps = {
        ...child.props,
        onClick: () => {
          if (!child.props.onClick) {
            changeActive(activeKey === index ? -1 : index)
            setIsOpen(true)
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
    <CompContainer className={ `${CssPrefix}-dropdown-menu` }>
      <View className={ `${CssPrefix}-dropdown-menu__bar` }>
        {nav}
      </View>

      <View className={ `${CssPrefix}-dropdown-menu__popup` }>
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
                key={ index }
                onClick={ () => {
                  changeActive(-1)
                  setIsOpen(false)
                } }
                catchMove
              >
                <View
                  key={ index }
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
                        style={ activeColor && value === option.value ? `color: ${activeColor}` : '' }
                        key={ option.text }
                        onClick={ () => { clickOption(option.value) } }
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

export default DropdownMenu

