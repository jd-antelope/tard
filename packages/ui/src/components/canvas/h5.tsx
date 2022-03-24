
import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { pxTransform } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import SlIcon from '../icon'
import SlButton from '../button'
import { CanvasProps } from './type'

const CanvasH5: FC<CanvasProps> = ({
  className = '',
  customizeStyle = '',
  width = 600,
  height = 800,
  visible = false,
  overlay = true,
  onClose = () => {},
}) => {

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    setOpen(visible)
  }, [visible])

  const saveFile = async () => {
    return close();
  };

  const close = () => {
    setOpen(false)
    if (onClose) onClose()
  }

  return (
    <CompContainer customizeStyle={ customizeStyle }>
      {
        overlay ? 
          <View className={ cn('slc-canvas', {
            'slc-canvas-show': open
          }) }>
            <View className="slc-canvas-mask"></View>
            <View 
              className="slc-canvas-box"
              style={ `width: ${pxTransform(width)};` }
            >
              <View className="slc-canvas-icon" onClick={ () => close() }>
                <SlIcon
                  value="close"
                  size="20"
                  color="#fff"
                />
              </View>
              <View 
                className={ cn('slc-canvas-content slc-canvas-contenth5', className) } 
                canvas-id="canvas"
                style={ `width: ${pxTransform(width)}; height: ${pxTransform(height)};` }
              >
                商羚组件无敌~
              </View>
              <View className="slc-canvas-save">
                <SlButton 
                  type="success"
                  size="large"
                  className="slc-canvas-save__button" 
                  onClick={ () => saveFile() }
                >保存</SlButton>
              </View>
              
            </View>
          </View> :
          <View 
            className={ cn('slc-canvas-content slc-canvas-contenth5 slc-canvas-overlay', {
              'slc-canvas-overlay-show': open
            },className) } 
            canvas-id="canvas"
            style={ `width: ${pxTransform(width)}; height: ${pxTransform(height)};` }
          >
            商羚组件无敌~
          </View>
      }
    </CompContainer>
  )
}

export default CanvasH5
