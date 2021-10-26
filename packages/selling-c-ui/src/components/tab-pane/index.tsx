
import React from 'react'
import cn from 'classnames'
import { View } from '@tarojs/components'
import PropTypes, { InferProps } from 'prop-types'
import { SlTabPaneProps } from '../../../types/sl-tab-pane'

export default class SlTabPane extends React.Component<SlTabPaneProps> {
  public static defaultProps: SlTabPaneProps
  public static propTypes: InferProps<SlTabPaneProps>

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { customStyle, className, tabDirection, index, current } = this.props
    return (
      <View
      className={cn(
        {
          'slc-tab-pane': true,
          'slc-tab-pane--vertical': tabDirection === 'vertical',
          'slc-tab-pane--active': index === current,
          'slc-tab-pane--inactive': index !== current
        },
        className
      )}
      style={customStyle}
    >
      {this.props.children}
    </View>
    )
  }
}

SlTabPane.defaultProps = {
  customStyle: '',
  className: '',
  tabDirection: 'horizontal',
  index: 0,
  current: 0
}

SlTabPane.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  tabDirection: PropTypes.oneOf(['horizontal', 'vertical']),
  index: PropTypes.number,
  current: PropTypes.number
}
