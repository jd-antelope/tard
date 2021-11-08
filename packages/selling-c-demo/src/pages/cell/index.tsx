import React, { memo } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlCell } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Cell: FC = () => {
  return (
    <View className="container">
      <DocsHeader title='Cell'></DocsHeader>
      <View className='doc-body'>
        <SlCell onClick={() => { console.log("触发点击事件") }}  title={"左侧标题"} value={"右侧内容"} />
      </View>
    </View>
  );
};

export default memo(Cell);