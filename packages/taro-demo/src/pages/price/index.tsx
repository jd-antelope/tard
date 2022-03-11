import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Price } from 'haw-ui-test'
import DocsHeader from '../../components/doc-header'
import './index.less';

const PricePage: FC = () => {
  return (
    <View className="container full-container">
      <DocsHeader title='Price 价格'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本用法</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price price="88.00" />
          </View>
          <View className='doc-body-content-tip'>小数位位数</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price className='doc-body-content__pr' price="88.00" fixedNum={ 0 } />
            <Price className='doc-body-content__pr' price="88.80" fixedNum={ 1 } />
            <Price className='doc-body-content__pr' price="88.88" fixedNum={ 2 } />
          </View>
          <View className='doc-body-content-tip'>价格区间</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price className='doc-body-content__pr' price={ ['88.00', '99.00', '188.00'] } fixedNum={ 2 } />
            <Price price={ ['88.00', '99.00', '188.00'] } fixedNum={ 2 } showAfterSymbol />
          </View>
          <View className='doc-body-content-tip'>自定义颜色</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price className='doc-body-content__pr' price="88.00" color="green" />
            <Price className='doc-body-content__pr' price="88.00" color="#496FF2" />
          </View>
          <View className='doc-body-content-tip'>划线价</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price price="88.00" originPrice="188.00" fixedNum={ 2 } />
          </View>
          <View className='doc-body-content-tip'>自定义价格前内容</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price price="88.00" beforeContent={ <View className='coupon-text'>优惠价</View> } />
          </View>
          <View className='doc-body-content-tip'>自定义价格后内容</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price price="88.00" afterContent={ <View className='coupon-text coupon-text-r'>优惠价</View> } />
          </View>
          <View className='doc-body-content-tip'>修改单位</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price price="88.00" priceUnit="$" />
          </View>
          <View className='doc-body-content-tip'>千分号形式显示</View>
          <View className='doc-body-content__info doc-body-content__row'>
            <Price price="883888888.00" thousands />
          </View>
          <View className='doc-body-content-tip'>单位价格大小对比</View>
          <View className='doc-body-content__info doc-body-content__row doc-body-content-bottom'>
            <Price className='doc-body-content__pr' price="88.00" type="small" />
            <Price className='doc-body-content__pr' price="88.00" type="smallMiddle" />
            <Price className='doc-body-content__pr' price="88.00" type="middle" />
            <Price className='doc-body-content__pr' price="88.00" type="largeMiddle" />
            <Price className='doc-body-content__pr' price="88.00" type="large" />
          </View>
          <View className='doc-body-content-tip'>单位价格小数点大小对比</View>
          <View className='doc-body-content__info doc-body-content__row doc-body-content-bottom'>
            <Price className='doc-body-content__pr' price="88.00" type="small" fixedNum={ 2 } />
            <Price className='doc-body-content__pr' price="88.00" type="smallMiddle" fixedNum={ 2 } />
            <Price className='doc-body-content__pr' price="88.00" type="middle" fixedNum={ 2 } />
            <Price className='doc-body-content__pr' price="88.00" type="largeMiddle" fixedNum={ 2 } />
            <Price price="88.00" type="large" fixedNum={ 2 } />
          </View>
        </View>
      </View>
    </View>
  );
};

export default memo(PricePage);