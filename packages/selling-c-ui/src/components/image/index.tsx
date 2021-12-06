import React, { Fragment } from 'react'
import cn from 'classnames'
import { Image, View } from '@tarojs/components'
import { previewImage } from '@tarojs/taro'
import { BUYIMG } from '../../common/constants'
import { isFunction } from '../../common/is'
import { SlImageProps, SlImageState } from '../../../types/image'

export default class SlImage extends React.Component<SlImageProps, SlImageState> {
  public static defaultProps: SlImageProps
  public constructor (props: SlImageProps) {
    super(props)
    const { src } = props

    this.state = {
      url: src,
      noImg: `${BUYIMG}/common/no-img.png`,
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
    const { res, className, transition, errorContent } = this.props
    const { url, error, noImg } = this.state

    return (
      <Fragment>
        {
          (error && errorContent) ? (
            <View className={ cn(className, 'slc-image-error') }>{ errorContent }</View>
          ) :
          <Image
            { ... res }
            src={ url }
            className={ cn(className, {
              'slc-image-default': !url.includes(noImg) && transition,
              'slc-image-none': url.includes(noImg) && transition
            }) }
            onClick={ () => this.clickCallback() }
            onError={ () => {
              this.setState({ url: `${noImg}`, error: true });
            } }
          />
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
  onClick: () => {}
}
