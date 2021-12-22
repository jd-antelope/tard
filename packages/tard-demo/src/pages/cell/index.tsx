import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCell, SlCellGroup, SlSwitch, SlButton } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Cell: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Cell'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基础用法</View>
        <SlCell title="单元格" value="相关内容" />
        <SlCell title="单元格" value="相关内容" label="描述信息" border={false} />

        <View className='doc-body-content-tip'>卡片用法</View>
        <SlCellGroup inset>
          <SlCell title="单元格" value="相关内容" />
          <SlCell title="单元格" value="相关内容" label="描述信息" border={false} />
        </SlCellGroup>

        <View className='doc-body-content-tip'>展示图标</View>
        <SlCell title="单元格" value="相关内容" icon="user" border={false} />

        <View className='doc-body-content-tip'>只设置value</View>
        <SlCell value="单元格" />

        <View className='doc-body-content-tip'>展示箭头</View>
        <SlCell title="单元格" isLink />
        <SlCell title="单元格" value="相关内容" isLink />
        <SlCell title="单元格" value="相关内容" isLink arrowDirection="down" />

        <View className='doc-body-content-tip'>页面导航</View>
        <SlCell title="URL 跳转" isLink />
        <SlCell title="路由跳转" isLink />

        <View className='doc-body-content-tip'>分组</View>
        <SlCellGroup title="分组一">
          <SlCell title="单元格" value="相关内容" />
        </SlCellGroup>
        <SlCellGroup title="分组二">
          <SlCell title="单元格" value="相关内容" />
          <SlCell title="单元格" value="相关内容" />
        </SlCellGroup>

        <View className='doc-body-content-tip'>垂直居中</View>
        <SlCell title="单元格" center value="相关内容" label="描述信息" border={false} />

        <View className='doc-body-content-tip'>使用插槽</View>
        <SlCell value="相关内容" leftContent={<View>单元格<SlButton size='mini'>标签</SlButton></View>} />
        <SlCell title="单元格" rightContent={<View><SlSwitch checked={true} /></View>} />

      </View>
    </View>
  );
};

export default memo(Cell);