import classNames from 'classnames'
import React, { Fragment } from 'react'
import { View, Text } from '@tarojs/components'
import { SlCellProps } from '../../../types/cell'
import SlIcon from '../icon/index'
import Taro from '@tarojs/taro'
// import { pxTransform } from '../../common/utils'

export default class SlCell extends React.Component<SlCellProps> {
  public static defaultProps: SlCellProps

  // 点击右侧数据
  private handleClick(): void {
    this.props.onClick && this.props.onClick(arguments as any)
    if(this.props.to){
      Taro[this.props.pageType || 'switchTab']({
        url: this.props.to
      })
    }
  }

  public render(): JSX.Element {
    const {
      title,
      value,
      label,
      border,
      icon,
      isLink,
      center,
      arrowDirection,
      rightContent,
      leftContent
    } = this.props

    const rootClass = classNames(
      'slc-cell',
      {
        'slc-cell__border': border,
        'slc-cell__center': center
      }
    )

    return (
      <View className={rootClass} onClick={this.handleClick.bind(this)}>
        {
          (title || icon || leftContent) &&
          <View className='slc-cell__item'>
            {
              leftContent ||
              <Fragment>
                <View className="slc-cell__item-title">
                  {icon && <SlIcon className='slc-cell__item-icon' value={icon} />}
                  {title}
                </View>
                <View className='slc-cell__item-label'>{label}</View>
              </Fragment>
            }
          </View>
        }

        <View className='slc-cell__item'>
          {
            rightContent ||
            <View className={isLink ? 'slc-cell__item-click' : ''}>
              <Text>{value}</Text>
              {isLink && <SlIcon className='slc-cell__item-link' value={`chevron-${arrowDirection}`} />}
            </View>
          }
        </View>

      </View>
    )
  }
}

SlCell.defaultProps = {
  border: true,
  isLink: false,
  arrowDirection: 'right',
  pageType: 'switchTab',
  center: false
}


