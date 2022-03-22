
import React, { FC } from 'react'
import { View } from '@tarojs/components'
import { OverlayProps } from './type'
import { CssPrefix } from '../../common'
import CompContainer from '../../common/comp-container'

const Overlay: FC<OverlayProps> = ({ show = false, onClick = () => {}, children, customizeStyle }) => {
    return <CompContainer
        className={`${CssPrefix}-overlay-wrapper`}
        style={`display: ${show ? 'block' : 'none'} `}
        customizeStyle={customizeStyle}
        onClick={() => onClick()}
    >
        {children}
    </CompContainer>

}

export default Overlay