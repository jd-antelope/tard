import React, { memo, useState, useCallback } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlDatetimePicker, SlButton } from '@test/selling-c-ui'
import { SlDatetimePickerProps } from '@test/selling-c-ui/types/datetime-picker'
import DocsHeader from '../../components/doc-header'
import './index.less';

const DatetimePicker: FC = () => {
  const [datetimePicker, setDatetimePicker] = useState<SlDatetimePickerProps>({ visible: false });

  const showSlDatetimePicker = useCallback((toastParams = {}) => {
    setDatetimePicker({
      visible: true,
      ...toastParams,
      onClose: () => setDatetimePicker({ visible: false })
    });
  }, []);
  return (
    <View className="container">
      <DocsHeader title='DatetimePicker'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content'>
          h5暂不支持，敬请期待
          {/* <View className='doc-body-content-tip'>基本案例</View>
          <SlButton 
            size="large"
            onClick={ () => showSlDatetimePicker() }
          >基础</SlButton> */}
        </View>
      </View>
      <SlDatetimePicker { ...datetimePicker } />
    </View>
  );
};

export default memo(DatetimePicker);