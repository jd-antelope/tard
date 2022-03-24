
import React, { FC, useEffect, useState } from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { CommonEvent } from '@tarojs/components/types/common'
import { PopupProps } from './type'
import CompContainer from '../../common/comp-container'
import { objectToString } from '../../common/utils'
import { CssPrefix } from '../../common'

const Popup: FC<PopupProps> = ({ 
  title = '',
  className = '',
  visible = false,
  closeOnclickOverlay = false,
  titleAlign = 'center',
  children = '',
  customizeStyle = '',
  onClose = () => {}
}) => {
  const [_isOpened, set_isOpened] = useState<boolean>(false)

  useEffect(() => {
    set_isOpened(visible)
  }, [visible])

  const handleClose = (): void => {
    if (typeof onClose === 'function') {
      onClose()
    }
  }

  const close = (): void => {
    set_isOpened(false)
    handleClose()
  }
  const outClick = () => {
    closeOnclickOverlay && close()
  }

  const handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  const rootClass = classNames(
    `${CssPrefix}-popup`,
    {
      [`${CssPrefix}-popup__active`]: _isOpened
    },
    className
  )

  const containerClass = classNames(
    `${CssPrefix}-popup__container`,
    {
      [`${CssPrefix}-popup__container__active`]: _isOpened
    }
  )

  const titleStyle: string = objectToString({
    'text-align': titleAlign
  })

  return (
    <CompContainer customizeStyle={ customizeStyle }>
      <View className={rootClass} onTouchMove={handleTouchMove}>
        <View className={ `${CssPrefix}-popup__mask` } onClick={outClick} />
        <View className={containerClass}>
          {
            title ?
              (
                <View className="popup-header">
                  <View className="popup-header__title" style={titleStyle}>{title}</View>
                  <View className="popup-header-btn__close" onClick={close}></View>
                </View>
              ) : null
          }
          <View className="popup-main">
            {children}
          </View>
        </View>
      </View>
    </CompContainer>
  )
}

export default Popup