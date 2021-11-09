import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Form: FC = () => {
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
      <DocsHeader title='Form'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>form</View>
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
            <SlField
              name='imgDes' 
              title='图片描述' 
              type='text' 
              placeholder='单行文本' 
              value={form.value} 
              required
              onChange={(e) => change({ imgDes: e })} 
            />
            <SlField
              name='s' 
              title='图片描述' 
              type='text'
              value='323'
              required
              readonly
              onChange={(e) => change({ imgDes: e })} 
            />
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
            <SlField
              name='v' 
              title='图片描述' 
              value='3232'
              required
              readonly
              isLink
              linkText='322f'
              onLink={ () => { console.log(111) } }
            />
            <SlField
              name='h' 
              title='图片描述' 
              value='3232'
              required
              readonly
              contentColor="red"
              onLink={ () => { console.log(111) } }
            />

            <SlField
              name='o' 
              type='textarea'
              title='图片' 
              value='3232'
              placeholder="fsdfsdf"
            />

            <SlField
              name='o' 
              type='textarea'
              value='3232'
              placeholder="fsdfsdf"
            />

            <SlButton formType='submit'>提交</SlButton>
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
        </View>
      </View>
    </View>
  );
};

export default memo(Form);