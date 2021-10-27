import React from 'react'
import { SlTabPane } from '@jd/selling-c-ui'
import { View } from '@tarojs/components'
import DocsHeader from '../../components/doc-header'
import './index.less'

export default () => {
    
    return (
        <View className='container'>
            <DocsHeader title='sl-badge'/>
            <View className='doc-body'>
                <SlTabPane>按钮文案</SlTabPane>
            </View>
        </View>
    )

}
