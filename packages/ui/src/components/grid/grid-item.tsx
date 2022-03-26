
import React, { Fragment, FC } from 'react'
import { View, Text, Image } from '@tarojs/components'
import classNames from 'classnames'
import { isFunction } from '../../utils/is'
import { GridItemProps } from './type'
import { objectToString, pxTransform } from '../../common/utils'
import { cssPrefix } from '../../common'

const GridItem: FC<GridItemProps> = (props) => {
  const CssPrefix = cssPrefix()
  // 点击事件
  const onClick = (id): void => {
    if (isFunction(props.onClick)) props.onClick(id)
  }

  const { 
    className, url, icon, text, direction, border, children,
    columnNum = 4, index = 0, length = 0, iconSize = 60
  } = props

  const isBorderRight = border && (index % columnNum !== 0)

  const isBorderBottom = border && Math.ceil(index / columnNum) < Math.ceil(length / columnNum)

  const imageText = classNames(`${CssPrefix}-grid-item`, className, { 
    [`${CssPrefix}-grid-item-border-right`]: isBorderRight,
    [`${CssPrefix}-grid-item-border-bottom`]: isBorderBottom
  })

  const contentClass = classNames(`${CssPrefix}-grid-item__content`, {
    [`${CssPrefix}-grid-item__content_row`]: direction === 'right' || direction === 'left',
    [`${CssPrefix}-grid-item__content_top`]: direction === 'top',
    [`${CssPrefix}-grid-item__content_right`]: direction === 'right'
  })

  const iconClass = classNames(`${CssPrefix}-grid-item__content-image ${CssPrefix}-icon`, {
    [`${CssPrefix}-icon-${icon}`]: icon
  })

  const imageStyle = (objectToString({
    'width': pxTransform(iconSize),
    'height': pxTransform(iconSize)
  }))

  const imgView = url ? 
    (<Image className={ `${CssPrefix}-grid-item__content-image` } style={ imageStyle } src={url} />) : icon ?
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
                  onClick={onClick}
                >
                  { imgView }
                  {
                    text && <Text className={ `${CssPrefix}-grid-item__content-text` }>{text}</Text>
                  }
                </View>
              : <View
                  className={contentClass}
                  onClick={onClick}
                >
                  {
                    text && <Text className={ `${CssPrefix}-grid-item__content-text` }>{text}</Text>
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

export default GridItem
