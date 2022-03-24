import React, { memo, useState, useCallback, Fragment } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import DatetimePickerProps from 'tard/lib/components/datetime-picker'
import { DatetimePicker, Icon } from 'tard'
import DocsHeader from '../../components/doc-header/index'
import { isWeb } from '../../utils'
import './index.less';

const DatetimePickerPage: FC = () => {
  const [datetimePicker, setDatetimePicker] = useState<DatetimePickerProps>({ visible: false });

  const showDatetimePicker = useCallback((toastParams = {}) => {
    setDatetimePicker({
      visible: true,
      ...toastParams,
      onOk: () => setDatetimePicker({ visible: false }),
      onClose: () => setDatetimePicker({ visible: false })
    });
  }, []);

  const list = [
    {
      title: '基础用法',
      children: [
        {
          label: '选择日期',
          key: 'date',
          params: {}
        }, {
          label: '选择时间',
          key: 'time',
          params: {
            value: '2020-09-09 10:20',
            type: "time"
          }
        }, {
          label: '选择日期时间',
          key: 'date-time',
          params: {
            value: '2020-09-09 10:20',
            type: "datetime"
          }
        }
      ]
    },
    {
      title: '拓展用法',
      children: [
        {
          label: '选择开始-结束时间',
          key: 'date',
          params: { showEndDate: true }
        }
      ]
    },
    {
      title: '自定义',
      children: [
        {
          label: '自定义内容',
          key: 'date',
          params: { 
            showEndDate: true,
            title: '自定义开始',
            endTitle: '自定义结束'
          }
        },
        {
          label: '倒角用法',
          key: 'date',
          params: { round: true }
        }
      ]
    }
  ]

  return (
    <View className="container datetime-container">
      <DocsHeader title='DatetimePicker 日期选择' />
      <View className='doc-body'>
        <View className='doc-body-content'>
          {
            isWeb ? <View className="doc-empty">h5暂不支持，敬请期待</View> :
            <Fragment>
              {
                list.map((el, i) => {
                  return <View key={i}>
                    <View className='doc-body-content-tip'>{el.title}</View>
                    {
                      el.children.map((child, k) => (
                        <View className='comp-items' onClick={() => showDatetimePicker(child.params)} key={k}>
                          <View className="comp-item-text">{child.label}</View>
                          <Icon value="chevron-right" color="#333" size={16}></Icon>
                        </View>
                      ))
                    }
                  </View>
                })
              }
            </Fragment>
          }
        </View>
      </View>
      { !isWeb && <DatetimePicker { ...datetimePicker } /> }
    </View>
  );
};

export default memo(DatetimePickerPage);
