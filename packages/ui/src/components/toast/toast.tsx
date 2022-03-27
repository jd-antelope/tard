import classNames from 'classnames'
import React, { FC, useState, useEffect } from 'react'
import { Image, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { objectToString } from '../../utils'
import CompContainer from '../../common/comp-container'
import { cssPrefix } from '../../common'
import { ToastProps } from './type'
import statusImg from './img.json'

const Toast: FC<ToastProps> = ({ 
  duration = 3000,
  visible = false,
  text = '',
  icon = '',
  image = '',
  status,
  overlay = false,
  top = '50%',
  onClick = () => {},
  onClose = () => {},
  className = '',
  customStyle = {},
  customizeStyle = ''
}) => {
  const CssPrefix = cssPrefix()
  let _timer: NodeJS.Timeout | null
  const [_isOpened, setIsOpened] = useState<boolean>(visible)

  useEffect(() => {
    if (visible) {
      setIsOpened(true)
      makeTimer(duration || 0)
    } else {
      close()
    }
    _timer = null
  }, [visible, duration])

  const clearTimmer = () => {
    if (_timer) {
      clearTimeout(_timer)
      _timer = null
    }
  }

  const makeTimer = (duration: number) => {
    if (duration === 0) {
      return
    }
    _timer = setTimeout(() => {
      close()
    }, +duration)
  }

  const close = () => {
    setIsOpened(false)
    handleClose()
    clearTimmer()
  }

  const handleClose = (event?: CommonEvent) => {
    // TODO: Fix dirty hack
    if (typeof onClose === 'function') {
      onClose(event!)
    }
  }

  const handleClick = (event: CommonEvent): void => {
    if (status === 'loading') {
      return
    }
    if (onClick) {
      return onClick(event)
    }
    close()
  }

  const realImg = image || statusImg[status!] || null
  const isRenderIcon = !!(icon && !(image || statusImg[status!]))

  const bodyClass = classNames('toast-body', {
    [`${CssPrefix}-toast__body--custom-image`]: image,
    'toast-body--text': !realImg && !icon,
    [`${CssPrefix}-toast__body--${status}`]: !!status
  })
  const contentClass = {
    'toast-body-content--slot': realImg || icon,
  }

  const style = (objectToString(Object.assign(customStyle, {
    'top': top
  })))
  const iconClass = classNames(`${CssPrefix}-icon`, {
    [`${CssPrefix}-icon-${icon}`]: icon
  })

  return _isOpened ? (
    <CompContainer className={classNames(`${CssPrefix}-toast`, className)} customizeStyle={ customizeStyle }>
      {overlay && <View className={ `${CssPrefix}-toast__overlay` } />}
      <View
        className={bodyClass}
        style={style}
        onClick={handleClick}
      >
        <View className={classNames('toast-body-content', contentClass)}>
          {realImg ? (
            <Image
              className='toast-body-content__img-item'
              src={realImg}
              mode='scaleToFill'
            />
          ) : null}
          {isRenderIcon && (
            <View className='toast-body-content__icon'>
              <Text className={iconClass} />
            </View>
          )}
          {text && (
            <View className='toast-body-content__info'>
              {text}
            </View>
          )}
        </View>
      </View>
    </CompContainer>
  ) : null
}

export default Toast