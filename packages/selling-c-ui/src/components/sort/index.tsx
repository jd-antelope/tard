
import React from 'react'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import { SlSortProps, SlSortState } from '../../../types/sort'
export default class SlSort extends React.Component<SlSortProps, SlSortState> {
  public static defaultProps: SlSortProps
  public static propTypes: InferProps<SlSortProps>

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
      this.props.onChange && this.props.onChange(key, sort)
      this.setState({
        activeKey: key,
        activeSort: sort
      })
    }

    const {
      activeKey,
      activeSort
    } = this.state
 
    return <View className="slc-sort" style={{
      flexWrap: this.props.scroll ? 'nowrap': 'wrap', 
      overflow: list.length > 1 && this.props.scroll ? 'auto': '',
    }} >
    {
      list.map((item:any, index)=>{
        return <View key={index} 
          className="slc-sort__item"
          onClick={()=>{
            const tmpSort = this.state.activeKey === item.key ? this.state.activeSort === 'asc' ? 'desc': 'asc': 'asc'
            onChange(item.key, tmpSort)
          }}
        >
          <View className="slc-sort__item-text" style={{
            border: this.props.border && list.length === 1 ? '1px solid' : '',
            borderRadius: list.length === 1 ? '21px' : '',
            color: activeKey === item.key ? activeColor: textColor
          }}>
            {item.text}
            <View className="slc-sort__item-icon">
              <View 
                className="slc-sort__item-icon-item"
                style={{
                  color: activeKey === item.key && activeSort === 'asc' ? activeColor : arrowColor
                }}
              ></View>
              <View  
                className="slc-sort__item-icon-item"
                style={{
                  color: activeKey === item.key && activeSort === 'desc' ? activeColor : arrowColor
                }}
              ></View>
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

SlSort.propTypes = {
  list: PropTypes.array,
  activeKey: PropTypes.string,
  activeSort: PropTypes.oneOf(['asc', 'desc'])
}
