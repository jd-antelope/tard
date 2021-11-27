
import React, { Fragment, CSSProperties } from 'react'
import classNames from "classnames";
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import {CommonEvent} from "@tarojs/components/types/common";
import SlToast from "../toast/index"
import { getDateUTC } from "../../common/utils"
import { 
  getYears, getDays, getMonths, getHours, getMinutes
} from "../../common/dateMap"
import { pxTransform } from '../../common/utils'
import { SlDatetimePickerProps, SlDatetimePickerState } from '../../../types/datetime-picker'

export default class SlDatetimePicker extends React.Component<SlDatetimePickerProps, SlDatetimePickerState> {
  public static defaultProps: SlDatetimePickerProps
  public constructor(props: SlDatetimePickerProps) {
    super(props)

    const { visible, timeStr = '', endTimeStr = '', minDate, maxDate } = props
    const years = getYears(minDate, maxDate)
    const months = getMonths(this.getYear(timeStr), minDate, maxDate) || []
    const days = getDays(this.getYear(timeStr), this.getMonth(timeStr), minDate, maxDate)
    const hours = getHours(this.getMonth(timeStr), this.getDate(timeStr), this.getYear(timeStr), minDate, maxDate)
    const minutes = getMinutes(
      this.getMonth(timeStr), this.getDate(timeStr), this.getYear(timeStr), this.getHour(timeStr),
      minDate, maxDate
    )

    this.state = {
      _isOpened: visible,
      years,
      months,
      days,
      hours,
      minutes,
      year: this.getYear(timeStr),
      yearEndTime: this.getYear(endTimeStr),
      month: this.getMonth(timeStr),
      monthEndTime: this.getMonth(endTimeStr),
      day: this.getDate(timeStr),
      dayEndTime: this.getDate(endTimeStr),
      value: this.getTimeArray(timeStr),
      valueEndTime: endTimeStr ? this.getTimeArray(endTimeStr) : [9999, 0, 0],
      active: 1, // 现在激活的tab
      showToast: false,
      hour: this.getHour(timeStr),
      hourEndTime: this.getHour(endTimeStr),
      minute: this.getMinute(timeStr),
      minuteEndTime: this.getMinute(endTimeStr),
    }
  }

  private getTimeArray = (input: string) => {
    const { type } = this.props
    const date = new Date()
    const timeArray = [this.getYear(input), this.getMonth(input), this.getDate(input), this.getHour(input), this.getMinute(input)]
    const year = +timeArray[0] < date.getFullYear() ? +timeArray[0] : date.getFullYear()
    // @ts-ignore
    const yearIndex = +years.indexOf(year) !== -1 ? +years.indexOf(year) : years[years.length -1]
    // @ts-ignore
    const monthIndex = months.indexOf(+timeArray[1]) !== -1 ? months.indexOf(+timeArray[1]) : 1
    // @ts-ignore
    const dateIndex = days.indexOf(+timeArray[2]) !== -1 ? days.indexOf(+timeArray[2]) : 1
    if (type === 'time') {
      // @ts-ignore
      const hourIndex = hours.indexOf(+timeArray[3]) !== -1 ? hours.indexOf(+timeArray[3]) : 1
      // @ts-ignore
      const minuteIndex = minutes.indexOf(+timeArray[4]) !== -1 ? minutes.indexOf(+timeArray[4]) : 1
      return [yearIndex, monthIndex, dateIndex, hourIndex, minuteIndex]
    }
    return [yearIndex, monthIndex, dateIndex]
  }

  private getYear = (input: string) => {
    return getDateUTC(input).getFullYear()
  }

  private getMonth = (input: string) => {
    return getDateUTC(input).getMonth() + 1
  }

  private getDate = (input: string) => {
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
    const { type, minDate, maxDate } = this.props
    const { hours, years, months, days } = this.state
    const val = e.detail.value
    const selectMonths = getMonths(years[val[0]], minDate, maxDate) || []
    const selectDays = getDays(years[val[0]], months[val[1]], minDate, maxDate)
    const selectHours = getHours(years[val[0]], months[val[1]], days[val[2]], minDate, maxDate)
    const selectMinutes = getMinutes(years[val[0]], months[val[1]], days[val[2]], hours[val[3]], minDate, maxDate)
    
    if (this.state.active === 1) {
      const obj = type === 'time' ? {
        hour: selectHours[val[3]],
        minute: selectMinutes[val[4]],
      } : {} as any
      this.setState({
        ...obj,
        year: years[val[0]],
        month: selectMonths[val[1]],
        day: selectDays[val[2]],
        months: selectMonths,
        days: selectDays,
        hours: selectHours,
        minutes: selectMinutes,
        value: val,
      })
    } else {
      const obj = type === 'time' ? {
        hourEndTime: selectHours[val[3]],
        minuteEndTime: selectMinutes[val[4]],
      } : {} as any
      this.setState({
        yearEndTime: years[val[0]],
        monthEndTime: selectMonths[val[1]],
        dayEndTime: selectDays[val[2]],
        valueEndTime: val,
        months: selectMonths,
        days: selectDays,
        hours: selectHours,
        minutes: selectMinutes,
        ...obj
      })
    }
  }

  public UNSAFE_componentWillReceiveProps(nextProps: SlDatetimePickerProps): void {
    const { visible, timeStr = '', endTimeStr = '', minDate, maxDate } = nextProps
    if (visible !== this.state._isOpened) {
      this.setState({
        _isOpened: visible
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
    if (minDate != this.props.minDate || maxDate != this.props.maxDate) {
      const years = getYears(minDate, maxDate)
      const months = getMonths(this.getYear(timeStr), minDate, maxDate) || []
      const days = getDays(this.getYear(timeStr), this.getMonth(timeStr), minDate, maxDate)
      const hours = getHours(this.getMonth(timeStr), this.getDate(timeStr), this.getYear(timeStr), minDate, maxDate)
      const minutes = getMinutes(
        this.getMonth(timeStr), this.getDate(timeStr), this.getYear(timeStr), this.getHour(timeStr),
        minDate, maxDate
      )
      this.setState({
        years,
        months,
        days,
        hours,
        minutes,
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
    const { type } = this.props
    const timeArr: Array<string> = []
    let startTime = `${this.state.year}-${this.transDate(this.state.month)}-${this.transDate(this.state.day)}`
    if (type === 'time') startTime += ` ${this.transDate(this.state.hour)}:${this.transDate(this.state.minute)}`
    timeArr.push(startTime)
    if (this.props.isEndDate) {
      let endTime = `${this.state.yearEndTime}-${this.transDate(this.state.monthEndTime)}-${this.transDate(this.state.dayEndTime)}`
      if (type === 'time') endTime += ` ${this.transDate(this.state.hourEndTime)}:${this.transDate(this.state.minuteEndTime)}`
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
    const { type } = this.props
    const { _isOpened, hours, minutes } = this.state
    const rootClass = classNames(
      'slc-datetime',
      {
        'slc-datetime__active': _isOpened
      },
    )

    const containerClass = classNames(
      'slc-datetime__container',
      {
        'slc-datetime__container__active': _isOpened
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

    const columnStyle = {
      'line-height': pxTransform(50),
      'text-align': 'center'
    } as CSSProperties

    return (
      <View className={rootClass} onTouchMove={this.handleTouchMove}>
        <View className="slc-datetime__mask" onClick={this.outClick} />
        <View className={containerClass}>
          <View className="time-picker-container">
            <View className="time-show-container">
              <View className={tabLeftClass} onClick={ () => this.handleClickTab(1) }>
                <View className="time-show-left-title">{this.props.title}</View>
                <View className="time-show-left-content">
                  {this.state.year}.{this.transDate(this.state.month)}.{this.transDate(this.state.day)} 
                  {
                    type === 'time' && 
                    <Fragment> {this.transDate(this.state.hour)}:{this.transDate(this.state.minute)}</Fragment>
                  }
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
              indicatorStyle={ `'height: ${pxTransform(50)}` }
              className="picker-row"
              value={ this.state.active === 1 ? this.state.value : this.state.valueEndTime }
              onChange={this.onChange}
            >
              <PickerViewColumn
                style={ columnStyle }
              >
                {this.state.years.map(item => {
                  return <View className="slc-datetime-picker__label">{item}年</View>;
                })}
              </PickerViewColumn>
              <PickerViewColumn style={ columnStyle }>
                {this.state.months.map(item => {
                  return <View className="slc-datetime-picker__label">{item}月</View>
                })}
              </PickerViewColumn>
              <PickerViewColumn style={ columnStyle }>
                {this.state.days.map(item => {
                  return <View className="slc-datetime-picker__label">{item}日</View>
                })}
              </PickerViewColumn>
              {
                type === 'time' &&
                <Fragment>
                  <PickerViewColumn style={ columnStyle }>
                    {hours.map(item => {
                      return <View className="slc-datetime-picker__label">{item}时</View>
                    })}
                  </PickerViewColumn>
                  <PickerViewColumn style={ columnStyle }>
                    {minutes.map(item => {
                      return <View className="slc-datetime-picker__label">{item}分</View>
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
          visible={ this.state.showToast}
          text="结束时间不能小于开始时间"
          onClose={ () => this.setState({showToast: false})}
        />
      </View>
    )
  }
}

SlDatetimePicker.defaultProps = {
  isEndDate: false, // 默认不显示
  visible: false,
  outClose: true, // 是否能点击遮罩层关闭
  title: '选中时间',
  endTitle: '结束时间',
  type: 'date',
  timeStr: '',
  endTimeStr: '',
  minDate: '1990-01-01',
  maxDate: `${new Date().getFullYear() + 5}-01-01`
}
