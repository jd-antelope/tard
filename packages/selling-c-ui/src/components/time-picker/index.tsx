
import React, { Fragment } from 'react'
import classNames from "classnames";
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import {CommonEvent} from "@tarojs/components/types/common";
import { getDateUTC } from "../../common/utils"
import { SlTimePickerProps, SlTimePickerState } from '../../../types/time-picker'
import SlToast from "../toast/index"

export default class SlTimePicker extends React.Component<SlTimePickerProps, SlTimePickerState> {
  public static defaultProps: SlTimePickerProps
  public constructor(props: SlTimePickerProps) {
    super(props)

    const { isOpened, timeStr, endTimeStr = '' } = props
    const date = new Date()
    const years = []
    const months = []
    const days = []
    const hours = []
    const minutes = []
    for (let i: number = 1990; i <= date.getFullYear(); i++) {
      // @ts-ignore
      years.push(i)
    }
    for (let i: number = 1; i <= 12; i++) {
      // @ts-ignore
      months.push(i)
    }
    for (let i: number = 1; i <= 31; i++) {
      // @ts-ignore
      days.push(i)
    }
    for (let i: number = 1; i <= 24; i++) {
      // @ts-ignore
      hours.push(i)
    }
    for (let i: number = 1; i <= 60; i++) {
      // @ts-ignore
      minutes.push(i)
    }

    this.state = {
      _isOpened: isOpened,
      years,
      year: this.getYear(timeStr),
      yearEndTime: this.getYear(endTimeStr),
      months,
      month: this.getMonth(timeStr),
      monthEndTime: this.getMonth(endTimeStr),
      days,
      day: this.getDate(timeStr),
      dayEndTime: this.getDate(endTimeStr),
      value: this.getTimeArray(timeStr),
      valueEndTime: endTimeStr ? this.getTimeArray(endTimeStr) : [9999, 0, 0],
      active: 1, // 现在激活的tab
      showToast: false,
      hours,
      hour: this.getHour(timeStr),
      hourEndTime: this.getHour(endTimeStr),
      minutes,
      minute: this.getMinute(timeStr),
      minuteEndTime: this.getMinute(endTimeStr),
    }
  }

  private getTimeArray = (input: string) => {
    const { isShowTime } = this.props
    const date = new Date()
    const timeArray = [this.getYear(input), this.getMonth(input), this.getDate(input), this.getHour(input), this.getMinute(input)]
    const year = +timeArray[0] < date.getFullYear() ? +timeArray[0] : date.getFullYear()
    // @ts-ignore
    const yearIndex = +years.indexOf(year) !== -1 ? +years.indexOf(year) : years[years.length -1]
    // @ts-ignore
    const monthIndex = months.indexOf(+timeArray[1]) !== -1 ? months.indexOf(+timeArray[1]) : 1
    // @ts-ignore
    const dateIndex = days.indexOf(+timeArray[2]) !== -1 ? days.indexOf(+timeArray[2]) : 1
    if (isShowTime) {
      // @ts-ignore
      const hourIndex = hours.indexOf(+timeArray[3]) !== -1 ? hours.indexOf(+timeArray[3]) : 1
      // @ts-ignore
      const minuteIndex = minutes.indexOf(+timeArray[4]) !== -1 ? minutes.indexOf(+timeArray[4]) : 1
      return [yearIndex, monthIndex, dateIndex, hourIndex, minuteIndex]
    }
    return [yearIndex, monthIndex, dateIndex]
  }

  private getYear = (input: any) => {
    return getDateUTC(input).getFullYear()
  }

  private getMonth = (input: any) => {
    return getDateUTC(input).getMonth() + 1
  }

  private getDate = (input: any) => {
    return getDateUTC(input).getDate()
  }

  private getHour = (input: string) => {
    return getDateUTC(input).getHours()
  }

  private getMinute = (input: string) => {
    return getDateUTC(input).getMinutes()
  }

  // 改变时间函数
  private onChange = (e) => {
    const { isShowTime } = this.props
    const { hours, minutes } = this.state
    const val = e.detail.value
    if (this.state.active === 1) {
      const obj = isShowTime ? {
        hour: hours[val[3]],
        minut: minutes[val[4]]
      } : {} as any
      this.setState({
        ...obj,
        year: this.state.years[val[0]],
        month: this.state.months[val[1]],
        day: this.state.days[val[2]],
        value: val,
      })
    } else {
      const obj = isShowTime ? {
        hourEndTime: hours[val[3]],
        minuteEndTime: minutes[val[4]],
      } : {} as any
      this.setState({
        yearEndTime: this.state.years[val[0]],
        monthEndTime: this.state.months[val[1]],
        dayEndTime: this.state.days[val[2]],
        valueEndTime: val,
        ...obj
      })
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlTimePickerProps): void {
    const { isOpened, timeStr, endTimeStr = '' } = nextProps
    if (isOpened !== this.state._isOpened) {
      this.setState({
        _isOpened: isOpened
      })
    }
    if (timeStr != this.props.timeStr) {
      this.setState({
        year: this.getYear(timeStr),
        month: this.getMonth(timeStr),
        day: this.getDate(timeStr),
        value: this.getTimeArray(timeStr),
        hour: this.getHour(timeStr),
        minute: this.getMinute(timeStr),
      })
    }
    if (endTimeStr != this.props.endTimeStr) {
      this.setState({
        yearEndTime: this.getYear(endTimeStr),
        monthEndTime: this.getMonth(endTimeStr),
        dayEndTime: this.getDate(endTimeStr),
        valueEndTime: endTimeStr ? this.getTimeArray(endTimeStr) : [9999, 0, 0],
        hourEndTime: this.getHour(endTimeStr),
        minuteEndTime: this.getMinute(endTimeStr),
      })
    }
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
  private transDate = (input) => {
    if (input < 10) return `0${input}`
    return input
  }

  // 确认回调
  handleConfirm = () => {
    const { isShowTime } = this.props
    const timeArr: Array<string> = []
    let startTime = `${this.state.year}-${this.transDate(this.state.month)}-${this.transDate(this.state.day)}`
    if (isShowTime) startTime += ` ${this.transDate(this.state.hour)}:${this.transDate(this.state.minute)}`
    timeArr.push(startTime)
    if (this.props.isEndDate) {
      let endTime = `${this.state.yearEndTime}-${this.transDate(this.state.monthEndTime)}-${this.transDate(this.state.dayEndTime)}`
      if (isShowTime) endTime += ` ${this.transDate(this.state.hourEndTime)}:${this.transDate(this.state.minuteEndTime)}`
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
    if (this.props.isEndDate && this.getArrayTime('start') > this.getArrayTime('end')) {
      this.setState({showToast: true})
      return
    }
    this.setState({_isOpened: false}, this.handleConfirm)
  }

  // 点击tab页面
  private handleClickTab = (tab: any): void => {
    this.setState({
      active: tab,
    })
  }

  private getArrayTime (isDown) {
    if (isDown === 'start') {
      const { year, month, day, hour, minute } = this.state
      return new Date(`${year}/${month}/${day} ${hour}:${minute}`).getTime()
    } else {
      const { yearEndTime, monthEndTime, dayEndTime, hourEndTime, minuteEndTime } = this.state
      return new Date(`${yearEndTime}/${monthEndTime}/${dayEndTime} ${hourEndTime}:${minuteEndTime}`).getTime()
    }
  }

  // eslint-disable-next-line no-undef
  public render (): JSX.Element | null {
    const { isShowTime } = this.props
    const { _isOpened, hours, minutes } = this.state
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
        'half': this.props.isEndDate,
        'active': this.state.active === 1
      },
    )

    const tabRightClass = classNames(
      'time-show-right',
      {
        'hidden': !this.props.isEndDate,
        'half': this.props.isEndDate,
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
                  <View className="time-show-left-content">
                    {this.state.year}.{this.transDate(this.state.month)}.{this.transDate(this.state.day)} {this.transDate(this.state.hour)}:{this.transDate(this.state.minute)}
                  </View>
                </View>
                <View className={tabRightClass} onClick={ () => this.setState({active: 2})}>
                  <View className="time-show-left-title">{this.props.endTitle}</View>
                  <View className="time-show-left-content">
                    {this.state.yearEndTime}.{this.transDate(this.state.monthEndTime)}.{this.transDate(this.state.dayEndTime)} {this.transDate(this.state.hourEndTime)}:{this.transDate(this.state.minuteEndTime)}
                  </View>
                </View>
              </View>
              <PickerView
                indicatorStyle='height: 50px;'
                className="picker-row"
                value={ this.state.active === 1 ? this.state.value : this.state.valueEndTime }
                onChange={this.onChange}
              >
                <PickerViewColumn
                  style='line-height: 50px; text-align: center;'
                >
                  {this.state.years.map(item => {
                    return <View>{item}年</View>;
                  })}
                </PickerViewColumn>
                <PickerViewColumn style='line-height: 50px; text-align: center;'>
                  {this.state.months.map(item => {
                    return <View>{item}月</View>
                  })}
                </PickerViewColumn>
                <PickerViewColumn style='line-height: 50px; text-align: center;'>
                  {this.state.days.map(item => {
                    return <View>{item}日</View>
                  })}
                </PickerViewColumn>
                {
                  isShowTime &&
                  <Fragment>
                    <PickerViewColumn style='line-height: 50px; text-align: center;'>
                      {hours.map(item => {
                        return <View>{item}时</View>
                      })}
                    </PickerViewColumn>
                    <PickerViewColumn style='line-height: 50px; text-align: center;'>
                      {minutes.map(item => {
                        return <View>{item}分</View>
                      })}
                    </PickerViewColumn>
                  </Fragment>
                }
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
  isEndDate: false, // 默认不显示
  isOpened: false,
  outClose: true, // 是否能点击遮罩层关闭
  title: '选中时间',
  endTitle: '结束时间',
  isShowTime: false,
  timeStr: '9999-1-1',
  endTimeStr: '9999-1-1'
}
