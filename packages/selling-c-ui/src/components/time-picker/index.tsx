
import React from 'react'
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import { SlTimePickerProps, SlTimePickerState } from '../../../types/time-picker'
import PropTypes, {InferProps} from "prop-types";
import {CommonEvent} from "@tarojs/components/types/common";
import classNames from "classnames";
// import {SlPopupProps} from "../../../types/popup";
import SlToast from "../toast/index"

export default class SlTimePicker extends React.Component<SlTimePickerProps, SlTimePickerState> {
  public static defaultProps: SlTimePickerProps
  public static propTypes: InferProps<SlTimePickerProps>
  public constructor(props: SlTimePickerProps) {
    super(props)


    const { isOpened, timeStr, endTimeStr } = props
    const date = new Date()
    const years = []
    const months = []
    const days = []
    for (let i: any = 1990; i <= date.getFullYear(); i++) {
      // @ts-ignore
      years.push(i)
    }
    for (let i: any = 1; i <= 12; i++) {
      // @ts-ignore
      months.push(i)
    }
    for (let i: any = 1; i <= 31; i++) {
      // @ts-ignore
      days.push(i)
    }

    const getTimeArray = (input: any) => {
      const timeArray = input.split('-')
      const year = +timeArray[0] < date.getFullYear() ? +timeArray[0] : date.getFullYear()
      // @ts-ignore
      const yearIndex: any = +years.indexOf(year) !== -1 ? +years.indexOf(year) : years[years.length -1]
      // @ts-ignore
      const monthIndex: any = months.indexOf(+timeArray[1]) !== -1 ? months.indexOf(+timeArray[1]) : 1
      // @ts-ignore
      const dateIndex: any = days.indexOf(+timeArray[2]) !== -1 ? days.indexOf(+timeArray[2]) : 1
      return [yearIndex, monthIndex, dateIndex]
    }

    const getYear = (input: any) => {
      return input?.split('-')[0] || date.getFullYear()
    }

    const getMonth = (input: any) => {
      return input?.split('-')[1] || 1
    }

    const getDate = (input: any) => {
      return input?.split('-')[2] || 1
    }

    this.state = {
      _isOpened: isOpened,
      years: years,
      year: getYear(timeStr),
      yearEndTime: getYear(endTimeStr),
      months: months,
      month: getMonth(timeStr),
      monthEndTime: getMonth(endTimeStr),
      days: days,
      day: getDate(timeStr),
      dayEndTime: getDate(endTimeStr),
      value: getTimeArray(timeStr),
      valueEndTime: endTimeStr ? getTimeArray(endTimeStr) : [9999, 0, 0],
      active: 1, // 现在激活的tab
      showToast: false
    }
  }

  // 改变时间函数
  private onChange = (e: any) => {
    const val = e.detail.value
    if (this.state.active === 1) {
      this.setState({
        year: this.state.years[val[0]],
        month: this.state.months[val[1]],
        day: this.state.days[val[2]],
        value: val
      })
    } else {
      this.setState({
        yearEndTime: this.state.years[val[0]],
        monthEndTime: this.state.months[val[1]],
        dayEndTime: this.state.days[val[2]],
        valueEndTime: val
      })
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlTimePickerProps): void {
    const { isOpened } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
  }

  componentDidMount() {
  }

  // 点击mask关闭
  private outClick = () => {
    this.props.outClose && this.close()
  }

  // 阻止冒泡
  private handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  // 关闭回调
  private handleClose = (): void => {
    if (typeof this.props.onClose === 'function') {
      this.props.onClose()
    }
  }

  // 确定函数函数
  private transDate = (input: any) => {
    if (input < 10) return `0${input}`
    return input
  }

  // 确认回调
  handleConfirm = () => {
    const timeArr: Array<any> = []
    const startTime = `${this.state.year}-${this.transDate(this.state.month)}-${this.transDate(this.state.day)}`
    timeArr.push(startTime)
    if (this.props.endTime) {
      const endTime = `${this.state.yearEndTime}-${this.transDate(this.state.monthEndTime)}-${this.transDate(this.state.dayEndTime)}`
      timeArr.push(endTime)
    }
    if (typeof this.props.onOk === 'function') {
      this.props.onOk(timeArr)
    }
  }

  // 关闭函数
  private close = (): void => {
    this.setState(
        {
          _isOpened: false
        },
        this.handleClose
    )
  }

  // 确定函数函数
  private confirm = (): void => {
    if (
        this.props.endTime &&
        (this.state.year >= this.state.yearEndTime) &&
        (this.state.month >= this.state.monthEndTime) &&
        (this.state.day >= this.state.dayEndTime)
    ) {
      this.setState({showToast: true})
      return
    }
    this.setState(
        {
          _isOpened: false
        },
        this.handleConfirm
    )
  }

  // 点击tab页面
  private handleClickTab = (tab: any): void => {
    this.setState({
      active: tab,
    })
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { _isOpened } = this.state
    const rootClass = classNames(
        'slc-time',
        {
          'slc-time__active': _isOpened
        },
    )

    const containerClass = classNames(
        'slc-time__container',
        {
          'slc-time__container__active': _isOpened
        },
    )

    const tabLeftClass = classNames(
        'time-show-left',
        {
          'half': this.props.endTime,
          'active': this.state.active === 1
        },
    )

    const tabRightClass = classNames(
        'time-show-right',
        {
          'hidden': !this.props.endTime,
          'half': this.props.endTime,
          'active': this.state.active === 2
        },
    )

    return (
        <View className={rootClass} onTouchMove={this.handleTouchMove}>
          <View className="slc-time__mask" onClick={this.outClick} />
          <View className={containerClass}>
            <View className="time-picker-container">
              <View className="time-show-container">
                <View className={tabLeftClass} onClick={ () => this.handleClickTab(1) }>
                  <View className="time-show-left-title">{this.props.title}</View>
                  <View className="time-show-left-content">{this.state.year}.{this.transDate(this.state.month)}.{this.transDate(this.state.day)}</View>
                </View>
                <View className={tabRightClass} onClick={ () => this.setState({active: 2})}>
                  <View className="time-show-left-title">{this.props.endTitle}</View>
                  <View className="time-show-left-content">{this.state.yearEndTime}.{this.transDate(this.state.monthEndTime)}.{this.transDate(this.state.dayEndTime)}</View>
                </View>
              </View>
              <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={ this.state.active === 1 ? this.state.value : this.state.valueEndTime } onChange={this.onChange}>
                <PickerViewColumn style='line-height: 50px; text-align: center;'>
                  {this.state.years.map(item => {
                    return (
                        <View>{item}年</View>
                    );
                  })}
                </PickerViewColumn>
                <PickerViewColumn style='line-height: 50px; text-align: center;'>
                  {this.state.months.map(item => {
                    return (
                        <View>{item}月</View>
                    )
                  })}
                </PickerViewColumn>
                <PickerViewColumn style='line-height: 50px; text-align: center;'>
                  {this.state.days.map(item => {
                    return (
                        <View>{item}日</View>
                    )
                  })}
                </PickerViewColumn>
              </PickerView>
            </View>
            <View className="time-bottom">
              <View className="cancel-btn" onClick={ () => this.close() }>取消</View>
              <View className="confirm-btn" onClick={ () => this.confirm() }>确定</View>
            </View>
          </View>

          <SlToast
              isOpened={ this.state.showToast}
              text="结束时间不能小于开始时间"
              onClose={ () => this.setState({showToast: false})}
          />
        </View>
    )
  }
}

SlTimePicker.defaultProps = {
  endTime: false, // 默认不显示
  isOpened: false,
  outClose: false, // 是否能点击遮罩层关闭
  title: '选中时间',
  endTitle: '结束时间',
  timeStr: '9999-1-1',
  endTimeStr: '9999-1-1'
}

SlTimePicker.propTypes = {
  endTime: PropTypes.bool,
  isOpened: PropTypes.bool,
  onClose: PropTypes.func,
  onOk: PropTypes.func,
  outClose: PropTypes.bool,
  title: PropTypes.string,
  endTitle: PropTypes.string,
  timeStr: PropTypes.string,
  endTimeStr: PropTypes.string
}
