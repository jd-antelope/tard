import React, { Fragment } from 'react'
import cn from 'classnames'
import { Image, View } from '@tarojs/components'
import { previewImage } from '@tarojs/taro'
import { BUYIMG } from '../../common/constants'
import { isFunction } from '../../common/is'
import { SlImageProps, SlImageState } from '../../../types/image'
import { objectToString, pxTransform } from '../../common/utils'

export default class SlImage extends React.Component<SlImageProps, SlImageState> {
  public static defaultProps: SlImageProps
  public constructor (props: SlImageProps) {
    super(props)
    const { src } = props

    this.state = {
      url: src,
      noImg: `${BUYIMG}/image-error.png`,
      error: false
    }
  }

  private clickCallback () {
    const { preview, onClick, src } = this.props
    if (preview) {
      previewImage({
        urls: [src]
      });
    }
    isFunction(onClick) && onClick()
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { 
      res, className, transition, errorContent, radius = 0, round, showLoading, loadingContent
    } = this.props
    const { url, error, noImg } = this.state
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
              onClick={ () => this.clickCallback() }
              onError={ () => {
                this.setState({ url: `${noImg}`, error: true });
              } }
            />
          }
          </Fragment>
        }
        
      </Fragment>
    )
  }
}

SlImage.defaultProps = {
  className: '', 
  src: '', 
  transition: true,
  res: {},
  preview: false,
  errorContent: '',
  radius: 0,
  round: false,
  showLoading: false,
  loadingContent: '',
  onClick: () => {}
}
