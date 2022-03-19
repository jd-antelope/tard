
import React, { FC, useState, useEffect } from 'react'
import { View } from '@tarojs/components'
import { SortProps, ActiveSort } from './type'
import { isFunction } from '../../common/is'
import { pxTransform } from '../../common/utils'

const Sort: FC<SortProps> = (props) => {
  const { 
    list = [],
    scroll = false,
    textColor = '#333333',
    arrowColor = '#CCCCCC',
    activeColor = '#FF2929',
    border = false,
  } = props

  const [activeKey, setActiveKey] = useState<string>('')
  const [activeSort, setActiveSort] = useState<ActiveSort>('asc')

  useEffect(() => {
    setActiveKey(props.activeKey || '')
  }, [props.activeKey])

  useEffect(() => {
    setActiveKey(props.activeSort || 'asc')
  }, [props.activeSort])
  
  const onChange= (key, sort) => {
    if (isFunction(props.onChange)) {
      props.onChange(key, sort)
    }
    setActiveKey(key)
    setActiveSort(sort)
  }

  const containerStyle: any ={
    flexWrap: scroll ? 'nowrap': 'wrap', 
    overflow: list.length > 1 && scroll ? 'auto': '',
  }

  return (
    <View className="slc-sort" style={containerStyle} >
      {
        list.map((item:any, index)=>{
          const textStyle = {
            border: border && list.length === 1 ? '1PX solid' : '',
            borderRadius: list.length === 1 ? pxTransform(21) : '',
            color: activeKey === item.key ? activeColor: textColor
          }

          return <View key={index} 
            className="slc-sort__item"
            onClick={()=>{
              const tmpSort = activeKey === item.key ? activeSort === 'asc' ? 'desc': 'asc': 'asc'
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
  )
}

export default Sort
