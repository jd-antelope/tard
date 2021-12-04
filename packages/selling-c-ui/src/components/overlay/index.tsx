
import React from 'react'
import { View } from '@tarojs/components'
import { SlOverlayProps } from '../../../types/overlay'

export default class SlOverlay extends React.Component<SlOverlayProps> {
    public static defaultProps: SlOverlayProps
    public render(): JSX.Element {
        const { show, onClick } = this.props;
        return <View
            className="slc-overlay-wrapper"
            style={`display: ${show ? 'block' : 'none'} `}
            onClick={() => onClick()}
        >
            {this.props.children}
        </View>
    }
}

SlOverlay.defaultProps = {
    show: false
}
