import React, { memo, useState, FC } from 'react'
import { View } from '@tarojs/components'
import { DropdownMenu } from 'haw-ui-test'
import DocsHeader from '../../components/doc-header/index'

const DropdownMenuDemo: FC = () => {

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
      <DocsHeader title="DropdownMenu 下拉菜单"></DocsHeader>
      <View className="doc-body">

        <View className="doc-body-content-tip">基本用法</View>
        <DropdownMenu>
          <DropdownMenu.Item value={ value1 } options={ option1 } onChange={ (value: any) => { setValue1(value) } } />
          <DropdownMenu.Item value={ value2 } options={ option2 } onChange={ (value: any) => { setValue2(value) } } />
        </DropdownMenu>

        <View className="doc-body-content-tip">自定义菜单标题</View>
        <DropdownMenu>
          <DropdownMenu.Item title="订单类型" value={value1} options={option1}
onChange={(value: any) => { setValue1(value) }} />
          <DropdownMenu.Item title="商品类型" value={value2} options={option2}
onChange={(value: any) => { setValue2(value) }} />
        </DropdownMenu>

        <View className="doc-body-content-tip">自定义菜单内容</View>
        <DropdownMenu>
          <DropdownMenu.Item value={ value1 } options={ option1 } onChange={ (value: any) => { setValue1(value) } } />
          <DropdownMenu.Item title="筛选" content={ <View>自定义菜单内容</View> } />
        </DropdownMenu>

        <View className="doc-body-content-tip">自定义菜单标题颜色</View>
        <DropdownMenu activeColor="blue">
          <DropdownMenu.Item value={ value1 } options={ option1 } onChange={ (value: any) => { setValue1(value) } } />
          <DropdownMenu.Item value={ value2 } options={ option2 } onChange={ (value: any) => { setValue2(value) } } />
        </DropdownMenu>

        <View className="doc-body-content-tip">自定义标题对齐方式</View>
        <DropdownMenu titleAlign="left">
          <DropdownMenu.Item value={ value1 } options={ option1 } onChange={ (value: any) => { setValue1(value) } } />
          <DropdownMenu.Item value={ value2 } options={ option2 } onChange={ (value: any) => { setValue2(value) } } />
        </DropdownMenu>

        <View className="doc-body-content-tip">自定义点击事件</View>
        <DropdownMenu>
          <DropdownMenu.Item value={ value1 } options={ option1 } onChange={ (value: any) => { setValue1(value) } } />
          <DropdownMenu.Item title="自定义点击事件" onClick={ () => { alert('自定义点击事件') } } />
        </DropdownMenu>

        <View className="doc-body-content-tip">自定义布局</View>
        <DropdownMenu>
          <DropdownMenu.Item title="占1" value={value1} options={option1}
flex="1" onChange={(value: any) => { setValue1(value) }} />
          <DropdownMenu.Item title="占2占2占2占2占2占2" value={value2} options={option2}
flex="2" onChange={(value: any) => { setValue2(value) }} />
        </DropdownMenu>

      </View>
    </View>
  )
};

export default memo(DropdownMenuDemo)