import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlDropdownMenu, SlDropdownMenuItem } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const DropdownMenu: FC = () => {

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState('a')

  const option1 = [
    { text: '全部订单', value: 0 },
    { text: '订单类型1', value: 1 },
    { text: '订单类型2', value: 2 },
  ]

  const option2 = [
    { text: '全部商品', value: 'a' },
    { text: '商品类型1', value: 'b' },
    { text: '商品类型2', value: 'c' },
  ]

  return (
    <View className="container dropdown-menu-container">
      <DocsHeader title='DropdownMenu 下拉菜单'></DocsHeader>
      <View className='doc-body'>

        <View className='doc-body-content-tip'>基本用法</View>
        <SlDropdownMenu>
          <SlDropdownMenuItem value={value1} options={option1} onChange={(value) => { setValue1(value) }} />
          <SlDropdownMenuItem value={value2} options={option2} onChange={(value) => { setValue2(value) }} />
        </SlDropdownMenu>

        <View className='doc-body-content-tip'>自定义菜单标题</View>
        <SlDropdownMenu>
          <SlDropdownMenuItem title="订单类型" value={value1} options={option1} onChange={(value) => { setValue1(value) }} />
          <SlDropdownMenuItem title="商品类型" value={value2} options={option2} onChange={(value) => { setValue2(value) }} />
        </SlDropdownMenu>

        <View className='doc-body-content-tip'>自定义菜单内容</View>
        <SlDropdownMenu>
          <SlDropdownMenuItem value={value1} options={option1} onChange={(value) => { setValue1(value) }} />
          <SlDropdownMenuItem title="筛选" content={(<View>自定义菜单内容</View>)} />
        </SlDropdownMenu>

        <View className='doc-body-content-tip'>自定义菜单标题颜色</View>
        <SlDropdownMenu activeColor="blue">
          <SlDropdownMenuItem value={value1} options={option1} onChange={(value) => { setValue1(value) }} />
          <SlDropdownMenuItem value={value2} options={option2} onChange={(value) => { setValue2(value) }} />
        </SlDropdownMenu>

        <View className='doc-body-content-tip'>自定义标题对齐方式</View>
        <SlDropdownMenu titleAlign="left">
          <SlDropdownMenuItem value={value1} options={option1} onChange={(value) => { setValue1(value) }} />
          <SlDropdownMenuItem value={value2} options={option2} onChange={(value) => { setValue2(value) }} />
        </SlDropdownMenu>

        <View className='doc-body-content-tip'>自定义点击事件</View>
        <SlDropdownMenu>
          <SlDropdownMenuItem value={value1} options={option1} onChange={(value) => { setValue1(value) }} />
          <SlDropdownMenuItem title="自定义点击事件" onClick={() => { alert('自定义点击事件') }} />
        </SlDropdownMenu>

        <View className='doc-body-content-tip'>自定义布局</View>
        <SlDropdownMenu>
          <SlDropdownMenuItem title="占1" value={value1} options={option1} flex="1" onChange={(value) => { setValue1(value) }} />
          <SlDropdownMenuItem title="占2占2占2占2占2占2" value={value2} options={option2} flex="2" onChange={(value) => { setValue2(value) }} />
        </SlDropdownMenu>

      </View>
    </View>
  );
};

export default memo(DropdownMenu);