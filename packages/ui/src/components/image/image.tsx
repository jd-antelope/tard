import React, { Fragment, FC, useState } from 'react'
import cn from 'classnames'
import { Image, View } from '@tarojs/components'
import { previewImage } from '@tarojs/taro'
import CompContainer from '../../common/comp-container'
import { BUYIMG } from '../../common/constants'
import { isFunction } from '../../common/is'
import { ImageProps } from './type'
import { objectToString, pxTransform } from '../../common/utils'
import { CssPrefix } from '../../common'

const ImageComponent: FC<ImageProps> = ({
  className = '', 
  src = '', 
  transition = true,
  res = {},
  preview = false,
  errorContent = '',
  radius = 0,
  round = false,
  showLoading = false,
  loadingContent = '',
  customizeStyle = '',
  onClick = () => {}
}) => {

  const [url, setUrl] = useState<string>(src)
  const [noImg] = useState<string>(`${BUYIMG}/image-error.png`)
  const [error, setError] = useState<boolean>(false)

  const clickCallback = () => {
    if (preview) {
      previewImage({
        urls: [src]
      });
    }
    isFunction(onClick) && onClick()
  }
  const imageStyle = objectToString({
    'border-radius': round ? '50%' : pxTransform(radius),
  })

  return (
    <CompContainer customizeStyle={ customizeStyle }>
      {
        showLoading ? 
        <Fragment>
          <View className={ cn(className, `${CssPrefix}-image-default`) }>
            {
              loadingContent ? 
                loadingContent :
                <Image src={ `${BUYIMG}/image-loading.png` } className={ `${CssPrefix}-image-loading` } />
            }
          </View>
        </Fragment> :
        <Fragment>
        {
          (error && errorContent) ? (
            <View style={ imageStyle } className={ cn(className, `${CssPrefix}-image-error`) }>{ errorContent }</View>
          ) :
          <Image
            { ... res }
            src={ url }
            className={ cn(className, {
              [`${CssPrefix}-image-default`]: !url.includes(noImg) && transition,
              [`${CssPrefix}-image-none`]: url.includes(noImg) && transition
            }) }
            style={ imageStyle }
            onClick={ () => clickCallback() }
            onError={ () => {
              setUrl(noImg)
              setError(true)
            } }
          />
        }
        </Fragment>
      }
      
    </CompContainer>
  )
}

export default ImageComponent
