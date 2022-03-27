
import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { pxTransform } from '../../utils'
import CompContainer from '../../common/comp-container'
import SlIcon from '../icon'
import SlButton from '../button'
import { CanvasProps } from './type'
import { cssPrefix } from '../../common'

const CanvasH5: FC<CanvasProps> = ({
  className = '',
  customizeStyle = '',
  width = 600,
  height = 800,
  visible = false,
  overlay = true,
  onClose = () => {},
}) => {
  const CssPrefix = cssPrefix()
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
          <View className={ cn(`${CssPrefix}-canvas`, {
            [`${CssPrefix}-canvas-show`] : open
          }) }>
            <View className={`${CssPrefix}-canvas-mask`}></View>
            <View 
              className={`${CssPrefix}-canvas-box`}
              style={ `width: ${pxTransform(width)};` }
            >
              <View className={`${CssPrefix}-canvas-icon`} onClick={ () => close() }>
                <SlIcon
                  value="close"
                  size="20"
                  color="#fff"
                />
              </View>
              <View 
                className={ cn(`${CssPrefix}-canvas-content ${CssPrefix}-canvas-contenth5`, className) } 
                canvas-id="canvas"
                style={ `width: ${pxTransform(width)}; height: ${pxTransform(height)};` }
              >
                商羚组件无敌~
              </View>
              <View className={ `${CssPrefix}-canvas-save` }>
                <SlButton 
                  type="success"
                  size="large"
                  className={ `${CssPrefix}-canvas-save__button` }
                  onClick={ () => saveFile() }
                >保存</SlButton>
              </View>
              
            </View>
          </View> :
          <View 
            className={ 
              cn(
                `${CssPrefix}-canvas-content ${CssPrefix}-canvas-contenth5 ${CssPrefix}-canvas-overlay`, 
                {
                  [`${CssPrefix}-canvas-overlay-show`]: open
                }, className) 
            } 
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
