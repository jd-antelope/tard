import React, { Fragment, FC, useState } from 'react'
import cn from 'classnames'
import { Image, View } from '@tarojs/components'
import { previewImage } from '@tarojs/taro'
import { BUYIMG } from '../../common/constants'
import { isFunction } from '../../common/is'
import { ImageProps } from './type'
import { objectToString, pxTransform } from '../../common/utils'

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
    <Fragment>
      {
        showLoading ? 
        <Fragment>
          <View className={ cn(className, 'slc-image-default') }>
            {
              loadingContent ? 
                loadingContent :
                <Image src={ `${BUYIMG}/image-loading.png` } className="slc-image-loading" />
            }
          </View>
        </Fragment> :
        <Fragment>
        {
          (error && errorContent) ? (
            <View style={ imageStyle } className={ cn(className, 'slc-image-error') }>{ errorContent }</View>
          ) :
          <Image
            { ... res }
            src={ url }
            className={ cn(className, {
              'slc-image-default': !url.includes(noImg) && transition,
              'slc-image-none': url.includes(noImg) && transition
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
      
    </Fragment>
  )
}

export default ImageComponent
