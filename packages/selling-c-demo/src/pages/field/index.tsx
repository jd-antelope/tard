import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from '@test/selling-c-ui'
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
        <View className='doc-body-header'>Field</View>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlForm onSubmit={onSubmit}>
            <SlField
              name='shopName' 
              title='商品名称' 
              type='text' 
              placeholder='单行文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />
            <SlButton formType='submit'>提交</SlButton>
          </SlForm>

          <View className='doc-body-content-tip'>required</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='imgDes' 
              title='图片描述' 
              type='text' 
              placeholder='单行文本' 
              value={form.value} 
              required
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>
          <View className='doc-body-content-tip'>border 属性</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='shopName' 
              title='商品名称' 
              type='text' 
              placeholder='单行文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>readonly</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='s' 
              title='图片描述' 
              type='text'
              value='323'
              required
              readonly
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>contentColor</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='h' 
              title='图片描述' 
              value='3232'
              required
              readonly
              contentColor="red"
              onLink={ () => { console.log(111) } }
            />
          </SlForm>

          <View className='doc-body-content-tip'>isLink linkSlot</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='a' 
              title='图片描述' 
              value='323'
              required
              isLink
              linkSlot={'fdf'}
              readonly
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>labelClass</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='a' 
              title='图片描述' 
              value='323'
              required
              isLink
              linkSlot={'fdf'}
              readonly
              labelClass="fsdf"
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>labelWidth</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='a' 
              title='图' 
              value='323'
              required
              isLink
              linkSlot={'fdf'}
              readonly
              labelWidth={ 50 }
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>labelAlign</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='a' 
              title='图' 
              value='323'
              required
              isLink
              linkSlot={'fdf'}
              readonly
              labelAlign='right'
              onChange={(e) => change({ imgDes: e })} 
            />
          </SlForm>

          <View className='doc-body-content-tip'>type='textarea' title</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='o' 
              type='textarea'
              title='图片' 
              value='3232'
              placeholder="fsdfsdf"
            />
          </SlForm>

          <View className='doc-body-content-tip'>textarea</View>
          <SlForm onSubmit={onSubmit} border>
            <SlField
              name='o' 
              type='textarea'
              value='3232'
              placeholder="fsdfsdf"
            />
          </SlForm>
          
        </View>
      </View>
    </View>
  );
};

export default memo(Field);