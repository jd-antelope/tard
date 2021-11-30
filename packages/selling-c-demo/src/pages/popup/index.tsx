import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlPopup, SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Popup: FC = () => {
const [isOpened, setIsOPend] = useState<Boolean>(true)
  return (
    <View className="container">
      <DocsHeader title='Popup'></DocsHeader>
      <View className='doc-body'>
      <SlPopup isOpened={isOpened} title="默认标题"/>
      </View>
    </View>
  );
};

export default memo(Popup);