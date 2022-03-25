
import React, { FC } from 'react'
import { OverlayProps } from './type'
import { cssPrefix } from '../../common'
import CompContainer from '../../common/comp-container'

const Overlay: FC<OverlayProps> = ({ show = false, onClick = () => {}, children, customizeStyle }) => {
    const CssPrefix = cssPrefix()
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