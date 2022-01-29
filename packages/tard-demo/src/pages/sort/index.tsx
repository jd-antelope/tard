import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlSort } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const SearchBar: FC = () => {
  return (
    <View className="container full-container sort-container">
      <DocsHeader title='Sort 排序'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='doc-body-content__info'>
          <SlSort 
            list={ [
              {key: 'sort1', text:'排序1'},
            ] 
            }
            arrowColor='green'
          />
          <SlSort 
            list={ [
              {key: 'sort1', text:'自定义排序1'}, 
              {key: 'sort2', text:'自定义排序2'}, 
              {key: 'sort3', text:'自定义排序3'}, 
              {key: 'sort4', text:'自定义排序4'}, 
              {key: 'sort5', text:'自定义排序5'}
            ] 
            }
          />
        </View>
        <View className='doc-body-content-tip'>一个选项时，可设置border</View>
        <View className='doc-body-content__info'>
          <SlSort 
            list={ [
              {key: 'sort1', text:'排序1'},
            ] 
            }
            border={true}
          />
        </View>
        
        <View className='doc-body-content-tip'>元素不换行，滚动展示</View>
        <View className='doc-body-content__info'>
          <SlSort 
            list={ [
              {key: 'sort1', text:'自定义排序1'}, 
              {key: 'sort2', text:'自定义排序2'}, 
              {key: 'sort3', text:'自定义排序3'}, 
              {key: 'sort4', text:'自定义排序4'}, 
              {key: 'sort5', text:'自定义排序5'}
            ] }
              scroll={true}
          />
        </View>
        
        <View className='doc-body-content-tip'>多参数设置</View>
        <View className='doc-body-content__info'>
          <SlSort 
            list={ [
              {key: 'sort1', text:'自定义排序1'}, 
              {key: 'sort2', text:'自定义排序2'}, 
              {key: 'sort3', text:'自定义排序3'}, 
              {key: 'sort4', text:'自定义排序4'}, 
              {key: 'sort5', text:'自定义排序5'}
            ] 
            }
            activeKey="sort3"
            arrowColor="#CCC"
            textColor="#333"
            activeColor="#36D57D"
          />
        </View>
      </View>
    </View>
  );
};

export default memo(SearchBar);