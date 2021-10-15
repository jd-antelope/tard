import React, { Fragment } from 'react'
import cn from 'classnames'
import { Image } from '@tarojs/components'
import { BUYIMG } from '../../common/constants'
import { SlImageProps, SlImageState } from '../../../types/sl-image'

export default class SlImage extends React.Component<SlImageProps, SlImageState> {
  public static defaultProps: SlImageProps
  public constructor (props: SlImageProps) {
    super(props)
    const { src } = props

    this.state = {
      url: src,
      noImg: `${BUYIMG}/common/no-img.png?1`
    }
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { res, className } = this.props
    const { url, noImg } = this.state
    return (
      <Fragment>
        <Image
          { ... res }
          src={ url }
          className={ cn(className, {
            'hs-image-default': !url.includes(noImg),
            'hs-image-none': url.includes(noImg)
          }) }

        />
      </Fragment>
    )
  }
}

SlImage.defaultProps = {
  className: '', src: '', res: {}
}
