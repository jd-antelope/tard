import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Field: FC = () => {
  const [form, setForm] = useState<any>({
    value: ''
  })

  const onSubmit = (event) => {
    console.log(event)
  }

  const change = (res) => {
    setForm({
      ...form,
      ...res
    })
  }
  return (
    <View className="container">
      <DocsHeader title='Field'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='shopName' 
              label='商品名称' 
              type='text' 
              placeholder='单行文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>必填</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='imgDes' 
              label='图片描述' 
              type='text' 
              placeholder='单行文本' 
              value={form.value} 
              required
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>
          <View className='doc-body-content-tip'>边框</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='shopName' 
              label='商品名称' 
              type='text' 
              border={ false }
              placeholder='单行文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>只读</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='s' 
              label='图片描述' 
              type='text'
              value='信息'
              readonly
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>内容区域文字颜色</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='h' 
              label='图片描述' 
              value='信息'
              contentColor="red"
              onLink={ () => { console.log(111) } }
            />
          </SlForm>

          <View className='doc-body-content-tip'>自定义跳转内容</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='a' 
              label='图片描述' 
              value='信息'
              isLink
              linkSlot={'自定义'}
              readonly
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>左侧文本额外类名</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='a' 
              label='图片描述' 
              value='信息'
              isLink
              linkSlot={'自定义'}
              readonly
              labelClass="fsdf"
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>左侧文本宽度</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='a' 
              label='图' 
              value='信息'
              isLink
              linkSlot={'自定义'}
              readonly
              labelWidth={ 50 }
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>左侧文本对齐方式</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='a' 
              label='图' 
              value='信息'
              isLink
              linkSlot={'自定义'}
              readonly
              labelAlign='right'
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>多行输入框</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='o' 
              type='textarea'
              label='图片' 
              value='信息'
              placeholder="多行文本"
            />
          </SlForm>

          <View className='doc-body-content-tip'>多行输入框无标题</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='o' 
              type='textarea'
              value='信息'
              placeholder="多行文本"
            />
          </SlForm>
          
        </View>
      </View>
    </View>
  );
};

export default memo(Field);