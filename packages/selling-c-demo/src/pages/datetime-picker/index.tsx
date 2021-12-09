import React, { memo, useState, useCallback, Fragment } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlDatetimePicker, SlButton } from 'tard'
import { SlDatetimePickerProps } from 'tard/types/datetime-picker'
import DocsHeader from '../../components/doc-header'
import './index.less';

const DatetimePicker: FC = () => {
  const [datetimePicker, setDatetimePicker] = useState<SlDatetimePickerProps>({ visible: false });

  const showSlDatetimePicker = useCallback((toastParams = {}) => {
    setDatetimePicker({
      visible: true,
      ...toastParams,
      onClose: () => setDatetimePicker({ visible: false })
    });
  }, []);
  return (
    <View className="container">
      <DocsHeader title='DatetimePicker'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          {
            process.env.TARO_ENV === 'h5' ?
            <View className="doc-empty">h5暂不支持，敬请期待</View> :
            <Fragment>
              <View className='doc-body-content-tip'>基本案例</View>
              <SlButton 
                size="large"
                onClick={ () => showSlDatetimePicker() }
              >基础</SlButton>
              <View className='doc-body-content-tip'>默认时间</View>
              <SlButton 
                size="large"
                onClick={ () => showSlDatetimePicker({
                  value: '2020-09-09'
                }) }
              >默认时间</SlButton>
              <View className='doc-body-content-tip'>时间选择器</View>
              <SlButton 
                size="large"
                onClick={ () => showSlDatetimePicker({
                  value: '2020-09-09',
                  type: "time"
                }) }
              >时间选择器</SlButton>
              <View className='doc-body-content-tip'>显示结束时间</View>
              <SlButton 
                size="large"
                onClick={ () => showSlDatetimePicker({
                  showEndDate: true
                }) }
              >显示结束时间</SlButton>
              <View className='doc-body-content-tip'>修改头部名称</View>
              <SlButton 
                size="large"
                onClick={ () => showSlDatetimePicker({
                  showEndDate: true,
                  title: '自定义开始',
                  endTitle: '自定义结束'
                }) }
              >修改头部名称</SlButton>
              <View className='doc-body-content-tip'>点击遮罩层不关闭</View>
              <SlButton 
                size="large"
                onClick={ () => showSlDatetimePicker({
                  closeOnclickOverlay: false
                }) }
              >点击遮罩层不关闭</SlButton>
              <View className='doc-body-content-tip'>设置最小值和最大值</View>
              <SlButton 
                size="large"
                onClick={ () => showSlDatetimePicker({
                  minDate: "2015-01-01",
                  maxDate: "2022-01-01"
                }) }
              >设置最小值和最大值</SlButton>
            </Fragment>
          }
        </View>
      </View>
      <SlDatetimePicker { ...datetimePicker } />
    </View>
  );
};

export default memo(DatetimePicker);