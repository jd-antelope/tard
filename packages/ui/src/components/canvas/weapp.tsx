
import React, { FC, useState, useEffect } from 'react'
import cn from 'classnames'
import { View, Canvas } from '@tarojs/components'
import Taro, { showToast } from '@tarojs/taro'
import { pxTransform } from '../../common/utils'
import CompContainer from '../../common/comp-container'
import Icon from '../icon'
import Button from '../button'
import { CanvasProps } from './type'
import { CssPrefix } from '../../common'

const CanvasWeapp: FC<CanvasProps> = ({
  id = 'canvas',
  className = '',
  width = 600,
  height = 800,
  visible = false,
  overlay = true,
  onClose = () => {},
  customizeStyle = '',
  contentCallback = () => {}
}) => {

  const [open, setOpen] = useState<boolean>(false)

  useEffect(() => {
    canvasShow()
    setOpen(visible)
  }, [visible])

  const canvasShow = () => {
    try {
      const ctx = Taro.createCanvasContext(id);
      // 白底
      ctx.beginPath();
      roundRect(ctx, '#fff', 0, 0, dpr(width), dpr(height), dpr(8));
      contentCallback(ctx, dpr)
      ctx.draw(true);
    } catch (e) {
      console.log(e)
    }
  }

  const roundRect = (ctx, color, x, y, w, h, r) => {
    // 开始绘制
    ctx.beginPath();
    ctx.save();
    // 因为边缘描边存在锯齿，最好指定使用 transparent 填充
    // 这里是使用 fill 还是 stroke都可以，二选一即可
    ctx.setFillStyle(color);
    // ctx.setStrokeStyle('transparent')
    // 左上角
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);

    // border-top
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.lineTo(x + w, y + r);
    // 右上角
    ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);

    // border-right
    ctx.lineTo(x + w, y + h - r);
    ctx.lineTo(x + w - r, y + h);
    // 右下角
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);

    // border-bottom
    ctx.lineTo(x + r, y + h);
    ctx.lineTo(x, y + h - r);
    // 左下角
    ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);

    // border-left
    ctx.lineTo(x, y + r);
    ctx.lineTo(x + r, y);

    // 这里是使用 fill 还是 stroke都可以，二选一即可，但是需要与上面对应
    ctx.fill();
    // ctx.stroke()
    ctx.closePath();
    // 剪切
    //ctx.clip();
  };

  const saveFile = async () => {
    const { windowWidth } = Taro.getSystemInfoSync();
    const dpr = windowWidth / 375;
    const res = await Taro.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: dpr * 300,
      height: dpr * 400,
      destWidth: dpr * 300 * 6,
      destHeight: dpr * 400 * 6,
      canvasId: 'canvas',
      fileType: 'jpg',
      quality: 1,
    });
    if (!res.tempFilePath) return;
    await Taro.saveImageToPhotosAlbum({
      filePath: res.tempFilePath,
      success () {
        showToast({ title: '保存图片成功'});
      },
      fail () {
        showToast({ title: '保存图片失败'});
      }
    });
  };

  const close = () => {
    setOpen(false)
    if (onClose) onClose()
  }

  const dpr = (x) => {
    const { windowWidth } = Taro.getSystemInfoSync();
    return windowWidth / 750 * x;
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
                <Icon
                  value="close"
                  size="20"
                  color="#fff"
                />
              </View>
              <Canvas 
                className={ cn(`${CssPrefix}-canvas-content`, className) } 
                canvas-id={ id }
                style={ `width: ${pxTransform(width)}; height: ${pxTransform(height)}` }
              />
              <View className={ `${CssPrefix}-canvas-save` }>
                <Button 
                  size="large"
                  type="primary"
                  className={ `${CssPrefix}-canvas-save__button` }
                  onClick={ () => saveFile() }
                  color="#ffffff"
                >
                  保存
                </Button>
              </View>
            </View>
          </View> :
          <View className={ cn(`${CssPrefix}-canvas-overlay`, {
            [`${CssPrefix}-canvas-overlay-show`]: open
          }) }>
            <Canvas 
              className={ cn(`${CssPrefix}-canvas-content`, className) } 
              canvas-id={ id }
              style={ `width: ${pxTransform(width)}; height: ${pxTransform(height)}` }
            />
          </View>
      }
      
    </CompContainer>
  )
}

export default CanvasWeapp
