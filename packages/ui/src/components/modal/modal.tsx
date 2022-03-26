import classNames from 'classnames'
import React, { useState, FC, useEffect } from 'react'
import { Button, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { ModalProps } from './type'
import { handleTouchScroll } from '../../common/utils'
import ModalAction from './action/index'
import ModalContent from './content/index'
import ModalHeader from './header/index'
import { isWeb } from '../../common/utils'
import { cssPrefix } from '../../common'
import CompContainer from '../../common/comp-container'

const Modal: FC<ModalProps> = ({
  isOpened = false,
  closeOnClickOverlay = true,
  contentAlign = 'center',
  title,
  content,
  cancelText,
  confirmText,
  className,
  onClose,
  onConfirm,
  onCancel,
  customizeStyle,
  children
}) => {
  const CssPrefix = cssPrefix()
  const [_isOpened, setIsOpened] = useState<boolean>(isOpened)
  const [isWEB] = useState<boolean>(isWeb)

  useEffect(() => {
    handleTouchScroll(isOpened)
    setIsOpened(isOpened)
  },
    [isOpened])


  const handleClickOverlay = (): void => {
    if (closeOnClickOverlay) {
      setIsOpened(false)
      handleClose()
    }
  }

  const handleClose = (event?: CommonEvent): void => {
    if (typeof onClose === 'function') {
      onClose(event!)
    }
  }

  const handleCancel = (event: CommonEvent): void => {
    if (typeof onCancel === 'function') {
      onCancel(event)
    }
  }

  const handleConfirm = (event: CommonEvent): void => {
    if (typeof onConfirm === 'function') {
      onConfirm(event)
    }
  }

  const handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }


  const childrenMap = {
    ModalHeader: null,
    ModalContent: null,
    ModalAction: null
  }

  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const displayName = (child.type as any).displayName
      console.log(children)
      childrenMap[displayName] = child
    }
  })

  const rootClass = classNames(
    `${CssPrefix}-modal`,
    {
      [`${CssPrefix}-modal--active`]: _isOpened
    },
    className
  )

  if (title || content) {
    const isRenderAction = cancelText || confirmText
    return (
      <CompContainer className={rootClass} customizeStyle={customizeStyle}>
        <View
          onClick={handleClickOverlay}
          className={`${CssPrefix}-modal__overlay`}
        />
        <View className={`${CssPrefix}-modal__container`}>
          {title && (
            <ModalHeader>
              <Text>{title}</Text>
            </ModalHeader>
          )}
          {childrenMap.ModalHeader}
          {content && (
            <ModalContent>
              <View className='content-simple' style={`text-align: ${contentAlign}`}>
                {isWEB ? (
                  <Text
                    dangerouslySetInnerHTML={{
                      __html: content.replace(/\n/g, '<br/>')
                    }}
                  ></Text>
                ) : (
                  <Text>{content}</Text>
                )}
              </View>
            </ModalContent>
          )}
          {childrenMap.ModalContent}
          {isRenderAction && (
            <ModalAction isSimple>
              {cancelText && (
                <Button className={`${CssPrefix}-modal__button`} onClick={handleCancel}>{cancelText}</Button>
              )}
              {confirmText && (
                <Button className={`${CssPrefix}-modal__button ${CssPrefix}-modal__button-confirm`} onClick={handleConfirm}>{confirmText}</Button>
              )}
            </ModalAction>
          )}
          {childrenMap.ModalAction}
        </View>
      </CompContainer>
    )
  }

  return (
    <View onTouchMove={handleTouchMove} className={rootClass}>
      <View className={`${CssPrefix}-modal__overlay`} onClick={handleClickOverlay} />
      <View className={`${CssPrefix}-modal__container`}>{children}</View>
    </View>)
}


export default Modal