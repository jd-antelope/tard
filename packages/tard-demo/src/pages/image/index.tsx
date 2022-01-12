import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlImage, SlIcon } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Image: FC = () => {
  const src = require('../../assets/images/avatar.png')
  return (
    <View className="container bg-white image-page">
      <DocsHeader title='Image 图片'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <SlImage className="base-image" src={ src } />
        <View className='doc-body-content-tip'>形状图片</View>
        <View className='doc-body-content__row'>
          <SlImage className="base-image doc-body-content__pr" src={ src } round />
          <SlImage className="base-image doc-body-content__pr" src={ src } radius={ 16 } />
        </View>
        <View className='doc-body-content-tip'>加载中提示</View>
        <View className='doc-body-content__row'>
          <View className='base-box doc-body-content__pr'>
            <View>
              <SlImage 
                className="base-image" 
                src=""
                showLoading
              />
            </View>
            <View className='base-box__tip'>默认提示</View>
          </View>
          <View className='base-box'>
            <View>
              <SlImage 
                className="base-image" 
                src=""
                showLoading
                loadingContent={ 
                  <View className='base-image-loading'><SlIcon className='base-image-loading__tip' value='loading-2' size={20} /></View>
                } 
              />
            </View>
            <View className='base-box__tip'>自定义提示</View>
          </View>
        </View>
        <View className='doc-body-content-tip'>加载失败提示</View>
        <View className='doc-body-content__row'>
          <View className='base-box doc-body-content__pr'>
            <View>
              <SlImage 
                className="base-image" 
                src="fsd"
              />
            </View>
            <View className='base-box__tip'>默认提示</View>
          </View>
          <View className='base-box'>
            <View>
              <SlImage 
                className="base-image" 
                src="fsdf" 
                errorContent={ <View>加载失败</View> } 
              />
            </View>
            <View className='base-box__tip'>自定义提示</View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(Image);