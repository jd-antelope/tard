import React, { memo, useState } from 'react';
import { FC } from '@tarojs/taro';
import { View, Button, Image } from '@tarojs/components';
import { Modal, ModalHeader, ModalContent, ModalAction, Icon } from 'haw-ui-test'
import DocsHeader from '../../components/doc-header/index'

const ModalPage: FC = () => {
  const [isOpened, setIsOpened] = useState(false)
  const [isOpened1, setIsOpened1] = useState(false)
  const [isOpened2, setIsOpened2] = useState(false)
  const [isOpened3, setIsOpened3] = useState(false)
  const [isOpened4, setIsOpened4] = useState(false)
  const [isOpened5, setIsOpened5] = useState(false)

  return (
    <View className="container">
      <DocsHeader title='Modal 对话框'></DocsHeader>
      <View className='doc-body'>
        <View className='doc-body-content-tip'>基本用法</View>
        <View className='comp-items' onClick={() => setIsOpened(true)}>
          <View className="comp-item-text">提示弹窗</View>
          <Icon value="chevron-right" color="#333" size={16} />
        </View>
        <Modal
          isOpened={isOpened}
          title='标题'
          confirmText='确认'
          onClose={() => setIsOpened(false)}
          onConfirm={() => setIsOpened(false)}
          content='弹框内容'
        />

        <View className='comp-items' onClick={() => setIsOpened1(true)}>
          <View className="comp-item-text">提示弹窗（无标题）</View>
          <Icon value="chevron-right" color="#333" size={16} />
        </View>
        <Modal
          isOpened={isOpened1}
          confirmText='确认'
          onClose={() => setIsOpened1(false)}
          onConfirm={() => setIsOpened1(false)}
          content='弹框内容'
        />

        <View className='comp-items' onClick={() => setIsOpened2(true)}>
          <View className="comp-item-text">确定弹窗</View>
          <Icon value="chevron-right" color="#333" size={16} />
        </View>
        <Modal
          title='标题'
          isOpened={isOpened2}
          confirmText='确认'
          cancelText='取消'
          onClose={() => setIsOpened2(false)}
          onConfirm={() => setIsOpened2(false)}
          onCancel={() => setIsOpened2(false)}
          content='弹框内容'
        />

        <View className='doc-body-content-tip'>自定义内容对齐方式</View>
        <View className='comp-items' onClick={() => setIsOpened3(true)}>
          <View className="comp-item-text">提示弹窗</View>
          <Icon value="chevron-right" color="#333" size={16} />
        </View>
        <Modal
          isOpened={isOpened3}
          title='标题'
          confirmText='确认'
          onClose={() => setIsOpened3(false)}
          onConfirm={() => setIsOpened3(false)}
          content='弹框内容'
          contentAlign='left'
        />

        <View className='doc-body-content-tip'>自定义弹框</View>
        <View className='comp-items' onClick={() => setIsOpened5(true)}>
          <View className="comp-item-text">自定义内容</View>
          <Icon value="chevron-right" color="#333" size={16} />
        </View>
        <Modal
          isOpened={isOpened5}
          title="标题"
          confirmText='确认'
          onClose={() => setIsOpened5(false)}
          onConfirm={() => setIsOpened5(false)}
          contentAlign='left'
        >
          <ModalContent>
            <Image style="width:100%; height:40px" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
          </ModalContent>
        </Modal>

        <View className='doc-body-content-tip'>自定义内容、标题、操作按钮</View>
        <View className='comp-items' onClick={() => setIsOpened4(true)}>
          <View className="comp-item-text">自定义内容</View>
          <Icon value="chevron-right" color="#333" size={16} />
        </View>
        <Modal isOpened={isOpened4}>
          <ModalHeader>标题</ModalHeader>
          <ModalContent>
            <Image style="width:100%; height:40px" src="https://storage.360buyimg.com/hawley-common/tard-image/logo.png" />
          </ModalContent>
          <ModalAction>
            <Button onClick={() => { setIsOpened4(false) }}>取消</Button>
            <Button onClick={() => { setIsOpened4(false) }}>确定</Button>
          </ModalAction>
        </Modal>

      </View>
    </View>
  );
};

export default memo(ModalPage);