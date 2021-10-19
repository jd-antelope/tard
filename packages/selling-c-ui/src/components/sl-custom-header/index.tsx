
import React from 'react'
import { View, Text } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import { getSystemInfoSync, getMenuButtonBoundingClientRect } from '@tarojs/taro';
import cn from 'classnames';
import { SlCustomHeaderProps } from '../../../types/sl-custom-header'
export default class SlCustomHeader extends React.Component<SlCustomHeaderProps> {
    public static defaultProps: SlCustomHeaderProps
    public static propTypes: InferProps<SlCustomHeaderProps>

    public constructor(props: SlCustomHeaderProps) {
        super(props)
        this.state = {}
    }

    private handleBack() {
        this.props.onBack && this.props.onBack(arguments as any)
    }

    public render(): JSX.Element {
        const { back, bgStyle, children } = this.props

        const { statusBarHeight } = getSystemInfoSync();
        const { height: boundHeight } = getMenuButtonBoundingClientRect()
        const statusStyle = {
            'height': statusBarHeight + 'px',
        };

        const contentStyle = {
            'height': boundHeight + 10 + 'px',
        };

        statusStyle

        return (
            <View className="slc-custom-header" style={bgStyle}>
                <View className={cn('slc-custom-header-fixed')}>
                    {/* 状态栏 */}
                    <View className="status-height" style={{ ...statusStyle }} />
                    {back ?
                        <View className="slc-custom-header-content" style={{ ...contentStyle }} >
                            <View className="slc-custom-header-content-back">
                                <View className="slc-custom-header-content-back-btn" onClick={this.handleBack.bind(this)}>
                                    <Text className='slc-icon slc-icon-chevron-left' style={{ fontSize: 20 }}></Text>
                                </View>
                                {children}
                            </View>
                        </View> :
                        <View className="slc-custom-header-content" style={{ ...contentStyle }} >{children}</View>
                    }

                </View>

                <View className="slc-custom-header-height">
                    <View className="slc-custom-header-height-status" style={{ ...statusStyle }} />
                    <View className="slc-custom-header-height-seat" style={{ ...contentStyle }} />
                </View>

            </View>
        )
    }
}

SlCustomHeader.defaultProps = {
    back: false,
}

SlCustomHeader.propTypes = {
    bgStyle: PropTypes.string,
    back: PropTypes.bool,
    onBack: PropTypes.func,
}