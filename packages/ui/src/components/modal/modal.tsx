import classNames from 'classnames'
import React, { useState, FC } from 'react'
import { Button, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import { ModalProps } from './type'
import { handleTouchScroll } from '../../common/utils'
import ModalAction from './action/index'
import ModalContent from './content/index'
import ModalHeader from './header/index'
import { isWeb } from '../../common/utils'
import { CssPrefix } from '../../common'
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
  customizeStyle
}) => {

  const [_isOpened, setIsOpened] = useState<boolean>(isOpened)
  const [isWEB, setIsWEB] = useState<boolean>(isWeb)

  const UNSAFE_componentWillReceiveProps = (nextProps: ModalProps): void => {
    const { isOpened } = nextProps

    if (isOpened !== isOpened) {
      handleTouchScroll(isOpened)
    }

    if (isOpened !== _isOpened) {
      setIsOpened(isOpened)
    }
  }

  const handleClickOverlay = (): void => {
    if (closeOnClickOverlay) {
      setIsOpened(false)
      // setState(
      //   {
      //     _isOpened: false
      //   },
      //   handleClose
      // )
    }
  }

  const handleClose = (event?: CommonEvent): void => {
    if (typeof onClose === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
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


  const children = {
    ModalHeader: null,
    ModalContent: null,
    ModalAction: null
  }

  React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const displayName = (child.type as any).displayName
      children[displayName] = child
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
          {children.ModalHeader}
          {content && (
            <ModalContent>
              <View className='content-simple' style={`text-align: ${contentAlign}`}>
                {isWEB ? (
                  <Text
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore
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
          {children.ModalContent}
          {isRenderAction && (
            <ModalAction isSimple>
              {cancelText && (
                <Button className={`${CssPrefix}-modal__button`} onClick={handleCancel}>{cancelText}</Button>
              )}
              {confirmText && (
                <Button className={`${CssPrefix}-modal__button slc-modal__button-confirm`} onClick={handleConfirm}>{confirmText}</Button>
              )}
            </ModalAction>
          )}
          {children.ModalAction}
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