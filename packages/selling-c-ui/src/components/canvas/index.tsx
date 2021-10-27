
import React, { Fragment } from 'react'
import cn from 'classnames'
import { View, Canvas, Button } from '@tarojs/components'
import Taro, {eventCenter, getCurrentInstance, showToast
} from '@tarojs/taro'
import { pxTransform } from '../../common/utils'
import SlIcon from '../icon'
import { SlCanvasProps, SlCanvasState } from '../../../types/canvas'

export default class SlCanvas extends React.Component<SlCanvasProps, SlCanvasState> {
  $instance = getCurrentInstance()
  public static defaultProps: SlCanvasProps

  state = {
    open: false
  }

  public componentDidMount(): void {
    const onShowEventId = (this.$instance as any).router.onShow
    // 监听
    eventCenter.on(onShowEventId, this.onShow)
  }

  public componentWillUnmount (): void {
    const onShowEventId = (this.$instance as any).router.onShow
    // 卸载
    eventCenter.off(onShowEventId, this.onShow)
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlCanvasProps): void {
    const { isOpen } = nextProps

    if (isOpen !== this.state.open) {
      this.setState({
        open: isOpen
      })
    }
  }

  onShow = () => {
    this.canvasShow()
    this.setState({
      open: this.props.isOpen
    })
  }

  private canvasShow (): void {
    try {
      const { width = 600, height = 800, contentCallback = () => {} } = this.props
      const { dpr } = this
      const ctx = Taro.createCanvasContext('canvas');
      // 白底
      ctx.beginPath();
      this.roundRect(ctx, '#fff', 0, 0, dpr(width), dpr(height), dpr(8));
      contentCallback(ctx, dpr)
      ctx.draw(true);
    } catch (e) {
      console.log(e)
    }
  }

  private roundRect (ctx, color, x, y, w, h, r) {
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

  private async saveFile () {
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

  private close () {
    this.setState({
      open: false
    })
    this.props.onClose()
  }

  private dpr (x) {
    const { windowWidth } = Taro.getSystemInfoSync();
    return windowWidth / 750 * x;
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { className, width = 600, height = 800, isMask } = this.props
    const { open } = this.state
    return (
      <Fragment>
        {
          isMask ? 
            <View className={ cn('slc-canvas', {
              'slc-canvas-show': open
            }) }>
              <View className="slc-canvas-mask"></View>
              <View 
                className="slc-canvas-box"
                style={ `width: ${pxTransform(width, 750)};` }
              >
                <View className="slc-canvas-icon" onClick={ () => this.close() }>
                  <SlIcon
                    value="close"
                    size="20"
                    color="#fff"
                  />
                </View>
                <Canvas 
                  className={ cn('slc-canvas-content', className) } 
                  canvas-id="canvas"
                  style={ `width: ${pxTransform(width, 750)}; height: ${pxTransform(height, 750)}` }
                />
                <Button 
                  className="slc-canvas-save" 
                  onClick={ () => this.saveFile() }
                >
                  保存
                </Button>
              </View>
            </View> :
            <Canvas 
              className={ cn('slc-canvas-content', className) } 
              canvas-id="canvas"
              style={ `width: ${pxTransform(width, 750)}; height: ${pxTransform(height, 750)}` }
            />
        }
        
      </Fragment>
    )
  }
}

SlCanvas.defaultProps = {
  className: '',
  width: 600,
  height: 800,
  isOpen: false,
  isMask: true,
  onClose: () => {},
  contentCallback: () => {}
}
