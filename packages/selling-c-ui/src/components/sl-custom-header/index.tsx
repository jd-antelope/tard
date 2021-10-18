
import React, { memo } from 'react'
import { View, Text } from '@tarojs/components'
import { FC, getSystemInfoSync, getCurrentPages, navigateBack, reLaunch } from '@tarojs/taro';
import cn from 'classnames';
import '../../style/components/sl-custom-header.less'

interface CustomerProps {
    // 是否需要返回按钮
    backUp?: boolean
    // 头部背景央视
    bgStyle?: any
    // H5回到首页
    returnHome?: () => {}
    isApp: string
}

const SlCustomHeader: FC<CustomerProps> = ({ isApp, backUp = false, bgStyle = { background: '#fff' }, returnHome = () => { }, children }) => {
    const { statusBarHeight: statusbarheight } = getSystemInfoSync();
    const customStyle = {
        'height': statusbarheight * 2 + 'rpx',
    };
    const handleBack = () => {
        try {
            const pages = getCurrentPages();
            const currentPage = pages[pages.length - 1];
            if (process.env.TARO_ENV === 'h5') {
                if (currentPage.path.indexOf('index/index') === -1) {
                    navigateBack();
                } else {
                    returnHome();
                }
            } else {
                pages.length > 1 ? navigateBack() : reLaunch({ url: '/pages/index/index' });
            }
        } catch (e) {
            if (process.env.TARO_ENV === 'weapp') {
                reLaunch({ url: '/pages/index/index' });
            } else {
                returnHome();
            }
        } finally {
        }
    };

    return (
        <View className="hs-custom-header" style={bgStyle}>
            <View className={cn('custom-header', { 'custom-header-app': isApp })}>
                <View className="status-height" style={{ ...customStyle, ...bgStyle }} />
                {backUp ?
                    <View className="custom-header-content flex-row" style={bgStyle}>
                        <View className="custom-header-content-back flex-center">
                            <View className="header-return" onClick={handleBack}>
                                <Text className='at-icon at-icon-close'></Text>
                            </View>
                            {children}
                        </View>
                    </View> :
                    <View className="custom-header-content flex-row" style={bgStyle}>{children}</View>
                }

            </View>
            <View className="status-height" style={{ ...customStyle, ...bgStyle }} />
            <View className="seat-height" />
        </View>
    );
};

export default memo(SlCustomHeader);