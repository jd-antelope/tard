import React from 'react'
import classNames from 'classnames'
import PropTypes, { InferProps } from 'prop-types'
import { View, Text, Canvas } from '@tarojs/components'
import { createCanvasContext, getSystemInfoSync } from '@tarojs/taro';
import { pxTransform } from 'src/common/utils';
import { SlProgressProps, SlProgressState } from '../../../types/progress'

export default class SlProgress extends React.Component<SlProgressProps, SlProgressState> {
  public static defaultProps: SlProgressProps
  public static propTypes: InferProps<SlProgressProps>
  public constructor(props) {
    super(props)
  }

  public FacilCanvas = (id, r, dp, color) => {
    let query = createCanvasContext(id);
    const drawArc = (s, e) => {

      /*
          * x：X轴绘制点
          * y: y轴绘制点
          * 通过x,y轴绘制点来控制你画的弧形进度条位置
      */

      let x = r * dp, y = r * dp, radius = r * dp;
      query.setFillStyle(color);
      query.clearRect(x, y, r*2, r*2);
      query.draw();
      query.setLineWidth(8);
      query.setStrokeStyle(color);
      query.setLineCap('round');
      query.beginPath();
      query.arc(x, y, radius, s, e, false);
      query.stroke();
      query.draw();
    };

    /*
        * step : 个数据
        * n：总数据
        * 最终通过 step和n之间的比值来绘制进度
    */
    let step = 20, n = 60, startAngle = 1.5 * Math.PI, endAngle = 0;
    endAngle = step * 2 * Math.PI / n + 1.5 * Math.PI;
    drawArc(startAngle, endAngle);
  };

  componentDidMount() {
    if(this.props.type === 'circle'){
      let facility = getSystemInfoSync(); // 获取设备信息
      let facility_width = facility.windowWidth; // 设备宽度
      let dpr = facility_width / 750;
      this.FacilCanvas('visitor_canvas', dpr, this.props.color || '#346FC2');
    }

  }

  public render(): JSX.Element {
    const { color, radius } = this.props
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
    const circleStyle = {
      width: pxTransform(radius || 100),
      height: pxTransform(radius || 100),
    }

    return (
      type === 'circle' ?
        <View>
           <Canvas  style={circleStyle} id="visitor_canvas" canvasId="visitor_canvas"></Canvas> 
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


SlProgress.defaultProps = {
  type: 'line',
  radius: 100
}

SlProgress.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  status: PropTypes.string,
  percent: PropTypes.number,
  strokeWidth: PropTypes.number,
  isHidePercent: PropTypes.bool
}
