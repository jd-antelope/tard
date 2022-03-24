import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View, Image } from '@tarojs/components';
import { Grid } from 'tard'
import DocsHeader from '../../components/doc-header/index'
import './index.less';

const GridPage: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Grid'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <Grid>
            {
              new Array(4).fill('').map((_, i) => (
                <Grid.Item 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </Grid>
          <View className='doc-body-content-tip'>自定义列数</View>
          <Grid columnNum={ 3 }>
            {
              new Array(3).fill('').map((_, i) => (
                <Grid.Item 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </Grid>
          <View className='doc-body-content-tip'>边框</View>
          <Grid border>
            {
              new Array(8).fill('').map((_, i) => (
                <Grid.Item 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </Grid>
          <View className='doc-body-content-tip'>自定义图片大小</View>
          <Grid iconSize={ 40 }>
            {
              new Array(4).fill('').map((_, i) => (
                <Grid.Item 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </Grid>
          <View className='doc-body-content-tip'>自定义内容</View>
          <Grid>
            {
              new Array(4).fill('').map((_, i) => (
                <Grid.Item 
                  key={ i }
                  className="doc-grid-item-custom"
                >
                  <Image className="grid-image" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
                </Grid.Item>
              ))
            }
          </Grid>
          <View className='doc-body-content-tip'>内容横排</View>
          <Grid direction='left'>
            {
              new Array(4).fill('').map((_, i) => (
                <Grid.Item 
                  key={ i }
                  text="文字" 
                  url="http://storage.360buyimg.com/hishop-images/bumblebee-mobile/person/pay.png" 
                />
              ))
            }
          </Grid>
          
        </View>
      </View>
    </View>
  );
};

export default memo(GridPage);