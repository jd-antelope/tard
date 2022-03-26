import React, { Fragment, FC } from 'react'
import classNames from 'classnames'
import { Text } from '@tarojs/components'
import Image from '../image'
import Button from '../button'
import CompContainer from '../../common/comp-container'
import { EmptyProps } from './type'
import { cssPrefix } from '../../common'

const Empty: FC<EmptyProps> = ({ 
  src = '',
  text = '',
  btnText = '',
  rect = 'rect',
  className = '',
  children = '',
  customizeStyle = '',
  onClick = () => { }
}) => {
  const CssPrefix = cssPrefix()
  const rootClass = classNames(
    `${CssPrefix}-empty`,
    className
  )

  const emptyImgClass = classNames(
    `${CssPrefix}-empty__image`,
    { [`${CssPrefix}-empty__image__${rect}`]: ['angle', 'circle'].includes(rect) }
  )

  return (
    <CompContainer className={rootClass} customizeStyle={ customizeStyle }>
      {src && <Image src={src} className={emptyImgClass} />}
      {text && <Text className={ `${CssPrefix}-empty__text` }>{text}</Text>}
      {children ? children :
        <Fragment>
          {btnText && <Button fill radius={12} onClick={onClick}>{btnText}</Button>}
        </Fragment>
      }
    </CompContainer>
  )
}

export default Empty
