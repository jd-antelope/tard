import React, { Fragment } from 'react'
import cn from 'classnames'
import { Image } from '@tarojs/components'
import { BUYIMG } from '../../common/constants'
import { SlImageProps, SlImageState } from '../../../types/image'

export default class SlImage extends React.Component<SlImageProps, SlImageState> {
  public static defaultProps: SlImageProps
  public constructor (props: SlImageProps) {
    super(props)
    const { src } = props

    this.state = {
      url: src,
      noImg: `${BUYIMG}/common/no-img.png`
    }
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { res, className, transition } = this.props
    const { url, noImg } = this.state
    return (
      <Fragment>
        <Image
          { ... res }
          src={ url }
          className={ cn(className, {
            'slc-image-default': !url.includes(noImg) && transition,
            'slc-image-none': url.includes(noImg) && transition
          }) }
          onError={ () => {
            this.setState({ url: `${noImg}` });
          } }
        />
      </Fragment>
    )
  }
}

SlImage.defaultProps = {
  className: '', 
  src: '', 
  transition: true,
  res: {}
}
