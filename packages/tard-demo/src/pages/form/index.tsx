import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from 'tard'
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
    <View className="container form-container full-container">
      <DocsHeader title='Form' />
      <View className='doc-body'>
        <View className='doc-body-content'>
          <View className='doc-body-content-tip'>基本案例</View>
          <SlForm onSubmit={onSubmit} className='input-group'>
            <SlField
              name='name' 
              label='账号' 
              type='text' 
              placeholder='请输入账号' 
              value={form.name} 
              onChange={(e) => change({ name: e })} 
            />
            <SlField
              name='password' 
              label='密码' 
              type='password' 
              placeholder='请输入密码' 
              value={form.password} 
              onChange={(e) => change({ password: e })} 
            />
            <View className='form-submit pd-0'>
              <SlButton 
                className='form-submit-button' 
                full 
                type='danger' 
                formType='submit'
              >
                提交
              </SlButton>
            </View>
            
          </SlForm>

          <View className='doc-body-content-tip'>卡片用法</View>
          <SlForm round onSubmit={onSubmit} className='input-group'>
            <SlField
              name='name' 
              label='账号' 
              type='text' 
              placeholder='请输入账号' 
              value={form.name} 
              onChange={(e) => change({ name: e })} 
            />
            <SlField
              name='password' 
              label='密码' 
              type='password' 
              placeholder='请输入密码' 
              value={form.password} 
              onChange={(e) => change({ password: e })} 
            />
            <View className='form-submit'>
              <SlButton 
                className='form-submit-button' 
                full 
                type='danger' 
                formType='submit'
              >
                提交
              </SlButton>
            </View>
          </SlForm>
          <View className='doc-body-content-tip'>表单项类型</View>
          <SlForm onSubmit={onSubmit}>
            <View className='form-submit'>
              <SlButton 
                className='form-submit-button' 
                full 
                type='danger' 
                formType='submit'
              >
                提交
              </SlButton>
            </View>
          </SlForm>
        </View>
      </View>
    </View>
  );
};

export default memo(Form);