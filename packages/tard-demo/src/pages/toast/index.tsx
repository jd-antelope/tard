import React, { memo, useState, useCallback } from 'react';
import { FC } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { SlToast } from 'tard'
import { SlToastProps } from 'tard/types/toast'
import { SlIcon } from 'tard'
import DocsHeader from '../../components/doc-header'
import './index.less';

const Toast: FC = () => {
  const [toast, setToast] = useState<SlToastProps>({ visible: false });
  const list = [
    {
      title: '基础用法',
      children: [
        {
          label: '文字提示',
          key: 'text',
          params: { text: '普通提示' }
        }, {
          label: '长文案提示',
          key: 'longText',
          params: { text: 'Toast文案很长，最多支持两行文字显示', }
        }, {
          label: '加载提示',
          key: 'loading',
          params: { text: '加载中...',  status: 'loading' }
        }, {
          label: '成功提示',
          key: 'success',
          params: { text: '成功提示', status: 'success' }
        }, {
          label: '失败提示',
          key: 'fail',
          params: { text: '失败提示', status: 'error' }
        }
      ]
    }, {
      title: '自定义样式',
      children: [
        {
          label: '自定义图标',
          key: 'selfIcon',
          params: { text: '自定义图标', icon: 'bell', duration: 1000000 }
        },
        {
          label: '自定义图片',
          key: 'selfImage',
          params: { text: '自定义图片', image: 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png' }
        },
        {
          label: '自定义加载图标',
          key: 'selfLoading',
          params: { text: '自定义加载图标', status: 'loading', image: 'http://storage.360buyimg.com/mtd/home/group-21533885306540.png' }
        },
      ]

    },
    {
      title: '自定义位置',
      children: [
        {
          label: '顶部展示',
          key: 'selfPostionT',
          params: { text: '顶部提示', top: '20%' }
        }, {
          label: '底部展示',
          key: 'selfPositionB',
          params: { text: '底部提示', top: '80%' }
        }
      ]

    },

  ]
  const showSlToast = useCallback((toastParams) => {
    setToast({
      visible: true,
      ...toastParams,
      onClose: () => setToast({ visible: false, text: toastParams.text, status: toastParams.status })
    });
  }, []);

  const openToast = (params) => {
    showSlToast(params)
  }



  return (
    <View className="toast-container container">
      <DocsHeader title='Toast'></DocsHeader>
      <View className='doc-body toast-page'>
        <View className='doc-body-content'>
          {
            list.map((el, i) => {
              return <View key={i}>
                <View className='doc-body-content-tip'>{el.title}</View>
                {
                  el.children.map((child, k) => {
                    return <View className='comp-items' onClick={() => openToast(child.params)} key={k}>
                      <View className="comp-item-text">{child.label}</View>
                      <SlIcon value="chevron-right" color="#333" size={16}></SlIcon>
                    </View>
                  })
                }
              </View>
            })
          }
        </View>
      </View>

      <SlToast {...toast} />
    </View>
  );

};

export default memo(Toast);