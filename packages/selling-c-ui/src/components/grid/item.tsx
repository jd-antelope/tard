
import React, { Fragment } from 'react'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import { isFunction } from '../../common/is'
import { SlGridItemProps } from '../../../types/grid'
import { objectToString, pxTransform } from '../../common/utils'

export default class SlGridItem extends React.Component<SlGridItemProps> {
  public static defaultProps: SlGridItemProps

  public constructor(props: SlGridItemProps) {
    super(props)
    this.state = {}
  }

  // 点击事件
  private onClick = (id): void => {
    if (isFunction(this.props.onClick)) this.props.onClick(id)
  }

  public render(): JSX.Element {
    const { 
      url, icon, text, direction, border, children,
      columnNum = 4, index = 0, length = 0, iconSize = 60
    } = this.props

    const isBorderRight = border && (index % columnNum !== 0)

    const isBorderBottom = border && Math.ceil(index / columnNum) < Math.ceil(length / columnNum)

    const imageText = classNames('slc-grid-item', { 
      'slc-grid-item-border-right': isBorderRight,
      'slc-grid-item-border-bottom': isBorderBottom
    })

    const contentClass = classNames('slc-grid-item__content', {
      'slc-grid-item__content_row': direction === 'right' || direction === 'left',
      'slc-grid-item__content_top': direction === 'top',
      'slc-grid-item__content_right': direction === 'right'
    })

    const iconClass = classNames('slc-grid-item__content-image slc-icon', {
      [`slc-icon-${icon}`]: icon
    })

    const imageStyle = (objectToString({
      'width': pxTransform(iconSize),
      'height': pxTransform(iconSize)
    }))

    const imgView = url ? 
      (<Image className="slc-grid-item__content-image" style={ imageStyle } src={url} />) : icon ?
      (<Text className={iconClass} style={ imageStyle } />): null
    
    return (
      <View className={imageText}>
        {
          children && children
        }
        {
          !children && (
            <Fragment>
              {
                direction === 'bottom' || direction === 'left' ? 
                  <View
                    className={contentClass}
                    onClick={this.onClick.bind(this)}
                  >
                    { imgView }
                    {
                      text && <Text className="slc-grid-item__content-text">{text}</Text>
                    }
                  </View>
                : <View
                    className={contentClass}
                    onClick={this.onClick.bind(this)}
                  >
                    {
                      text && <Text className="slc-grid-item__content-text">{text}</Text>
                    }
                    { imgView }
                  </View>
              }
            </Fragment>
          )
        }
        
      </View>
    )
  }
}

SlGridItem.defaultProps = {
  icon: '',
  text: '',
  direction: 'bottom',
  border: false,
  columnNum: 4,
  length: 0,
  index: 0,
  iconSize: 60,
  onClick: () => {}
}
