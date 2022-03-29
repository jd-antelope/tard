import React, { memo, useState } from 'react'
import { FC } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Button, ConfigProvider, Switch } from 'tard'
import DocsHeader from '../../components/doc-header/index'

import './index.less'

const ButtonPage: FC = () => {
    const [value, setValue] = useState<boolean>(true);
    const changeTheme = () => {
        ConfigProvider.config({
            theme: {
                'color-primary': 'purple',
                // 'border-radius-md': '20px',
                "button-radius": '20px'
            }
        });
    }

    const changeThemeInit = () => {
        ConfigProvider.config({
            theme: {
                'color-primary': 'red',
            }
        })
    }

    return (
        <View className="container">
            <DocsHeader title="Button 按钮" />
            <View className="doc-body">
                <View className="doc-body-content-tip">切换主题</View>
                <View className="button-box">

                    <Button className="button-box__item" type="default" onClick={() => changeTheme()}>切换紫色圆角主题</Button>
                    <Button className="button-box__item" type="default" onClick={() => changeThemeInit()}>切换默认主题</Button>
                    <Button className="button-box__item" type="primary">主要按钮</Button>
                    <Button className="button-box__item" type="info">信息按钮</Button>
                    <Button className="button-box__item" type="default">默认按钮</Button>
                    <Button className="button-box__item" type="danger">危险按钮</Button>
                    <Button className="button-box__item" type="warning">警告按钮</Button>
                    <Button className="button-box__item" type="success">成功按钮</Button>

                    <Switch checked={value}
                        onChange={(v) => {
                            setValue(v);
                        }}
                    />
                </View>

                <View className="doc-body-content-tip">自定义局部样式</View>
                <ConfigProvider style={{ 'button-radius': '0px', 'color-primary': 'green' }}>
                    <Button className="button-box__item" type="primary">主要按钮</Button>
                </ConfigProvider>
            </View>
        </View>
    )
}

export default memo(ButtonPage)