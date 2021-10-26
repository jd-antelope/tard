import React from 'react'
import { SlButton } from '@jd/selling-c-ui'
import { View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.less'

interface BadgePageState {
}

export default class ButtonPage extends React.Component<{}, BadgePageState> {

    public render(): JSX.Element {

        return (
            <View className='container'>
                <DocsHeader title='sl-button'></DocsHeader>
                {/* S Body */}
                <View className='doc-body'>
                    {/* <SlButton>按钮文案</SlButton> */}
                    {/* E Body */}
                </View>
            </View>
        )
    }
}
