import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlForm, SlField, SlButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Field: FC = () => {
  const [form, setForm] = useState<any>({
    value: '',
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

  const clear = (res) => {
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
          <SlForm onSubmit={onSubmit}>
            <View className='doc-body-content-tip'>基本案例</View>
            <SlField
              name='textName' 
              label='文本' 
              type='text' 
              placeholder='请输入文本' 
              value={form.shopName} 
              onChange={(e) => change({ shopName: e })} 
            />

            <View className='doc-body-content-tip'>卡片用法</View>
            <SlField
              name='text1Name' 
              label='文本' 
              type='text' 
              placeholder='请输入文本' 
              value={form.cardName} 
              card
              onChange={(e) => change({ cardName: e })} 
            />

            <View className='doc-body-content-tip'>自定义类型</View>
            <View className='input-group'>
              <SlField
                name='phone' 
                label='手机号' 
                type='phone' 
                placeholder='请输入手机号' 
                value={form.phone} 
                onChange={(e) => change({ phone: e })} 
              />
              <SlField
                name='password' 
                label='密码' 
                type='password' 
                placeholder='请输入文本' 
                value={form.password} 
                onChange={(e) => change({ password: e })} 
              />
              <SlField
                name='number' 
                label='数字' 
                type='number' 
                placeholder='请输入数字（支持小数）' 
                value={form.number} 
                onChange={(e) => change({ number: e })} 
              />
              <SlField
                name='digit' 
                label='整数' 
                type='digit' 
                placeholder='请输入整数' 
                value={form.digit} 
                onChange={(e) => change({ digit: e })} 
              />
            </View>

            <View className='doc-body-content-tip'>只读</View>
            <SlField
              name='readonly' 
              label='文本' 
              type='text'
              value='输入框只读'
              readonly
            />
          
            <View className='doc-body-content-tip'>禁用输入框</View>
            <SlField
              name='disabled' 
              label='文本' 
              type='text'
              value='输入框已禁用'
              disabled
            />

            <View className='doc-body-content-tip'>带图标输入框</View>
            <View className='input-group'>
              <SlField
                name='icon1' 
                label='文本' 
                type='text'
                value={form.icon1}
                placeholder='请输入文本' 
                leftIcon='user'
                iconColor='red'
                onChange={(e) => change({ icon1: e })} 
              />
              <SlField
                name='icon2' 
                label='文本' 
                type='text'
                value={form.icon2}
                placeholder='显示图标' 
                leftIcon='user'
                rightIcon='alert-circle'
                iconSize={18}
                onChange={(e) => change({ icon2: e })} 
              />
              <SlField
                name='icon3' 
                label='文本' 
                type='text'
                value={form.icon3}
                placeholder='输入文本后显示清除图标' 
                leftIcon='user'
                clear
                onChange={(e) => change({ icon3: e })} 
              />
            </View>

            <View className='doc-body-content-tip'>必填</View>
            <SlField
              name='required' 
              label='文本' 
              type='text' 
              placeholder='请输入文本' 
              value={form.required} 
              required
              onChange={(e) => change({ required: e })} 
            />

            <View className='doc-body-content-tip'>错误提示</View>
            <View className='input-group'>
              <SlField
                name='phone1' 
                label='手机号' 
                type='phone' 
                placeholder='请输入手机号' 
                value={form.uesrName}
                required
                error
                onChange={(e) => change({ uesrName: e })} 
              />
              <SlField
                name='phone2' 
                label='手机号' 
                type='phone' 
                placeholder='请输入手机号' 
                value={form.phoneNum}
                error
                required
                errorMessage='手机号格式错误'
                onChange={(e) => change({ phoneNum: e })} 
              />
            </View>

            <View className='doc-body-content-tip'>插入按钮</View>
            <SlField
              name='authCode' 
              label='短信验证码' 
              type='text' 
              placeholder='请输入验证码' 
              value={form.authCode} 
              onChange={(e) => change({ authCode: e })} 
            >
              <SlButton size='small' type='primary' className='inner-btn'>
                发送验证码
              </SlButton>
            </SlField>

            <View className='doc-body-content-tip'>显示字数统计</View>
            <SlField
              name='comment' 
              type='textarea'
              maxlength={50}
              textareaHeight={160}
              showWordLimit
              label='留言'
              value={form.comment} 
              onChange={(e) => change({ comment: e })}
            />

            <View className='doc-body-content-tip'>输入框内容右对齐</View>
            <SlField
              name='textRight' 
              label='文本' 
              value={form.textRight} 
              placeholder="输入框内容右对齐"
              valueAlign='right'
              labelAlign='right'
              onChange={(e) => change({ textRight: e })} 
            />
          </SlForm>
        </View>
      </View>
    </View>
  );
};

export default memo(Field);