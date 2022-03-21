
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { OverlayProps } from './type'
import { CssPrefix } from '../../common'

const Overlay: FC<OverlayProps> = ({ show = false, onClick = () => {}, children }) => {
    return <View
        className={`${CssPrefix}-overlay-wrapper`}
        style={`display: ${show ? 'block' : 'none'} `}
        onClick={() => onClick()}
    >
        {children}
    </View>

}

export default Overlay