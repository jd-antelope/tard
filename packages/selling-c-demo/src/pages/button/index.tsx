import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlButton } from '@test/selling-c-ui'
import DocsHeader from '../../components/doc-header'
import './index.less';


const Button: FC = () => {
  const [score, setScore] = useState<number>(1.5)
  function handleChange(v:number) {
      setScore(v)
  }

  return (
    <View className="container">
      <DocsHeader title='Button'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-header'>button</View>
        <SlRate
          value= { score }
          max= { 5 }
          onChange = { handleChange }
          size = { 105 }
          activeColor = 'pink'
        />
        <SlBadge
          value = { 10 }
          maxValue = { 99 }  
        > aaaa </SlBadge>
      </View>
    </View>
  );
};

export default memo(Button);