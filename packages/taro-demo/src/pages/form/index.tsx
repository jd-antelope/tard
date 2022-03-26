import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { Form, Field, Button } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const FormPage: FC = () => {
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
          <Form onSubmit={onSubmit} className='input-group'>
            <Field
              name='name' 
              label='账号' 
              type='text' 
              placeholder='请输入账号' 
              value={form.name} 
              onChange={(e) => change({ name: e })} 
            />
            <Field
              name='password' 
              label='密码' 
              type='password' 
              placeholder='请输入密码' 
              value={form.password} 
              onChange={(e) => change({ password: e })} 
            />
            <View className='form-submit pd-0'>
              <Button 
                className='form-submit-button' 
                full 
                formType='submit'
              >
                提交
              </Button>
            </View>
            
          </Form>

          <View className='doc-body-content-tip'>卡片用法</View>
          <Form round onSubmit={onSubmit} className='input-group'>
            <Field
              name='name' 
              label='账号' 
              type='text' 
              placeholder='请输入账号'
              value={form.name} 
              onChange={(e) => change({ name: e })} 
            />
            <Field
              name='password' 
              label='密码' 
              type='password' 
              placeholder='请输入密码' 
              value={form.password} 
              onChange={(e) => change({ password: e })} 
            />
            <View className='form-submit'>
              <Button 
                className='form-submit-button' 
                full 
                formType='submit'
              >
                提交
              </Button>
            </View>
          </Form>
          <View className='doc-body-content-tip'>表单项类型</View>
          <Form onSubmit={onSubmit}>
            <View className='form-submit'>
              <Button 
                className='form-submit-button' 
                full 
                formType='submit'
              >
                提交
              </Button>
            </View>
          </Form>
        </View>
      </View>
    </View>
  );
};

export default memo(FormPage);