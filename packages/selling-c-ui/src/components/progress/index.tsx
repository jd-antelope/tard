import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View, Text } from '@tarojs/components'
import { getSystemInfoSync, getCurrentInstance, eventCenter } from '@tarojs/taro';
// import { pxTransform } from 'src/common/utils';
import { SlProgressProps, SlProgressState } from '../../../types/progress'

export default class SlProgress extends React.Component<SlProgressProps, SlProgressState> {
  $instance = getCurrentInstance()
  public static defaultProps: SlProgressProps
  public static propTypes: InferProps<SlProgressProps>
  public constructor(props) {
    super(props)
  }


  public componentDidMount(): void {
    const onShowEventId = (this.$instance as any).router.onShow
    // 监听
    eventCenter.on(onShowEventId, this.onReady)
  }

  onReady = () => {
    // if (this.props.type === 'circle') {
    let facility = getSystemInfoSync(); // 获取设备信息
    let facility_width = facility.windowWidth; // 设备宽度
    let dpr = facility_width / 750;
    console.log(dpr)

    // this.FacilCanvas();
    // this.drawCircle(2)
    // }
    // let context = createCanvasContext('visitor_canvas');
    // console.log(context)
    // context.fillRect(50, 50, 200, 200);  // x轴 y轴 宽 和 高 ,绘制“被填充”的矩形
    // context.fillStyle = "green";  // 设置或返回用于填充绘画的颜色、渐变或模式
    // context.draw()
  }

  // private FacilCanvas() {
  //   let ctx = createCanvasContext('visitor_canvas', this);
  //   console.log(ctx)
  //   ctx.setLineWidth(4);// 设置圆环的宽度
  //   ctx.setStrokeStyle('#ffffff'); // 设置圆环的颜色
  //   ctx.setLineCap('round') // 设置圆环端点的形状
  //   ctx.beginPath();//开始一个新的路径
  //   ctx.arc(110, 110, 100, 0, 2 * Math.PI, false);
  //   //设置一个原点(110,110)，半径为100的圆的路径到当前路径
  //   ctx.stroke();//对当前路径进行描边
  //   ctx.draw(true);
  //   /*
  //       * step : 个数据
  //       * n：总数据
  //       * 最终通过 step和n之间的比值来绘制进度
  //   */
  // };

  // private drawCircle(step) {
  //   var context = createCanvasContext('visitor_canvas', this);
  //   // 设置渐变
  //   var gradient = context.createLinearGradient(200, 100, 100, 200);
  //   gradient.addColorStop(0, "#2661DD");
  //   gradient.addColorStop(0.5, "#40ED94");
  //   gradient.addColorStop(1.0, "#5956CC");

  //   context.setLineWidth(10);
  //   context.setStrokeStyle(gradient);
  //   context.setLineCap('round')
  //   context.beginPath();
  //   // 参数step 为绘制的圆环周长，从0到2为一周 。 -Math.PI / 2 将起始角设在12点钟位置 ，结束角 通过改变 step 的值确定
  //   context.arc(110, 110, 100, -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
  //   context.stroke();
  //   context.draw(true)
  // }


  public render(): JSX.Element {
    const { color } = this.props
    let { percent } = this.props
    const { strokeWidth, status, isHidePercent, type } = this.props

    if (typeof percent !== 'number') {
      percent = 0
    }

    if (percent < 0) {
      percent = 0
    } else if (percent > 100) {
      percent = 100
    }

    const rootClass = classNames(
      'slc-progress',
      {
        [`slc-progress--${status}`]: !!status
      },
      this.props.className
    )
    const iconClass = classNames('slc-icon', {
      'slc-icon-close-circle': status === 'error',
      'slc-icon-check-circle': status === 'success'
    })

    const progressStyle = {
      width: percent && `${+percent}%`,
      height: strokeWidth && `${+strokeWidth}px`,
      backgroundColor: color
    }
    // const circleStyle = {
    //   width: pxTransform(radius || 100),
    //   height: pxTransform(radius || 100),
    // }

    return (
      type === 'circle' ?
        <View className={rootClass}>
          {/* <Canvas style={circleStyle} canvasId="visitor_canvas"></Canvas> */}
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle id="circleBg" cx="100" cy="100" r="50" fill="transparent" strokeWidth="10" stroke="gray" />
            <circle id="circle" cx="100" cy="100" r="50" fill="transparent" strokeWidth="10" stroke="red" strokeDasharray="314 314" strokeDashoffset="100"></circle>
          </svg>
        </View> :
        <View className={rootClass}>
          <View className='slc-progress__outer'>
            <View className='slc-progress__outer-inner'>
              <View
                className='slc-progress__outer-inner-background'
                style={progressStyle}
              />
            </View>
          </View>

          {!isHidePercent && (
            <View className='slc-progress__content'>
              {!status || status === 'progress' ? (
                `${percent}%`
              ) : (
                <Text className={iconClass}></Text>
              )}
            </View>
          )}
        </View>

    )
  }
}

SlProgress.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool
}
