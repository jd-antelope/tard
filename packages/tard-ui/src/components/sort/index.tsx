
import React from 'react'
import { View } from '@tarojs/components'
import { SlSortProps, SlSortState } from '../../../types/sort'
import { isFunction } from '../../common/is'
import { pxTransform } from '../../common/utils'

export default class SlSort extends React.Component<SlSortProps, SlSortState> {
  public static defaultProps: SlSortProps

  public constructor(props: SlSortProps) {
    super(props)
    this.state = {
      activeKey: props.activeKey,
      activeSort: props.activeSort
    }
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { list, textColor, arrowColor, activeColor } = this.props
    const onChange= (key, sort) => {
      if (isFunction(this.props.onChange)) {
        this.props.onChange(key, sort)
      }
      this.setState({
        activeKey: key,
        activeSort: sort
      })
    }

    const {
      activeKey,
      activeSort
    } = this.state
 
    const containerStyle: any ={
      flexWrap: this.props.scroll ? 'nowrap': 'wrap', 
      overflow: list.length > 1 && this.props.scroll ? 'auto': '',
    }

    return <View className="slc-sort" style={containerStyle} >
    {
      list.map((item:any, index)=>{
        const textStyle = {
          border: this.props.border && list.length === 1 ? '1PX solid' : '',
          borderRadius: list.length === 1 ? pxTransform(21) : '',
          color: activeKey === item.key ? activeColor: textColor
        }

        return <View key={index} 
          className="slc-sort__item"
          onClick={()=>{
            const tmpSort = this.state.activeKey === item.key ? this.state.activeSort === 'asc' ? 'desc': 'asc': 'asc'
            onChange(item.key, tmpSort)
          }}
        >
          <View className="slc-sort__item-text" style={textStyle}>
            {item.text}
            <View className="slc-sort__item-icon">
              <View 
                className="slc-sort__item-icon-item"
                style={{
                  color: activeKey === item.key && activeSort === 'asc' ? activeColor : arrowColor
                }}
              />
              <View  
                className="slc-sort__item-icon-item"
                style={{
                  color: activeKey === item.key && activeSort === 'desc' ? activeColor : arrowColor
                }}
              />
            </View>
          </View>
        </View>
      })
    }
  </View>
  }
}

SlSort.defaultProps = {
  list: [],
  activeKey: '',
  activeSort: 'asc',
  scroll: false,
  textColor: '#333333',
  arrowColor: '#CCCCCC',
  activeColor: '#FF2929',
  border: false,
}
