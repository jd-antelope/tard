
import React, { Fragment } from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import { pxTransform } from '../../common/utils'
import SlIcon from '../icon'
import SlButton from '../button'
import { SlCanvasProps, SlCanvasState } from '../../../types/canvas'

class SlCanvasH5 extends React.Component<SlCanvasProps, SlCanvasState> {
  public static defaultProps: SlCanvasProps

  state = {
    open: false
  }

  public componentDidShow(): void {
    this.setState({
      open: this.props.isOpened
    })
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlCanvasProps): void {
    const { isOpened } = nextProps

    if (isOpened !== this.state.open) {
      this.setState({
        open: isOpened
      })
    }
  }

  private async saveFile () {
    return this.close();
  };

  private close () {
    this.setState({
      open: false
    })
    const { onClose } = this.props
    if (onClose) onClose()
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
                style={ `width: ${pxTransform(width)};` }
              >
                <View className="slc-canvas-icon" onClick={ () => this.close() }>
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
                    size="large"
                    className="slc-canvas-save__button" 
                    onClick={ () => this.saveFile() }
                    borderColor="#FF2929"
                    color="#ffffff"
                  >
                    保存
                  </SlButton>
                </View>
                
              </View>
            </View> :
            <View 
              className={ cn('slc-canvas-content slc-canvas-contenth5', className) } 
              canvas-id="canvas"
              style={ `width: ${pxTransform(width)}; height: ${pxTransform(height)};` }
            >
              商羚组件无敌~
            </View>
        }
        
      </Fragment>
    )
  }
}

SlCanvasH5.defaultProps = {
  className: '',
  width: 600,
  height: 800,
  isOpened: false,
  isMask: true,
  onClose: () => {},
  contentCallback: () => {}
}

export default SlCanvasH5
