
import React, { Fragment, CSSProperties, FC, useState, useEffect } from 'react'
import classNames from "classnames";
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import {CommonEvent} from "@tarojs/components/types/common";
import SlToast from "../toast/index"
import { 
  getYears, getDays, getMonths, getHours, getMinutes, 
  getYear, getMonth, getDate, getHour, getMinute, 
} from "./dateMap"
import CompContainer from '../../common/comp-container'
import { pxTransform } from '../../common/utils'
import { DatetimePickerProps } from './type'
import { cssPrefix } from '../../common'

const DatetimePicker: FC<DatetimePickerProps> = (props) => {
  const { 
    showEndDate = false, // 默认不显示
    visible = false,
    closeOnclickOverlay = true, // 是否能点击遮罩层关闭
    title = '选中时间',
    endTitle = '结束时间',
    type = 'date',
    value = '',
    endValue = '',
    minDate = '1990-01-01',
    maxDate = `${new Date().getFullYear() + 5}-01-01`,
    round = false,
    customizeStyle = ''
  } = props
  const CssPrefix = cssPrefix()
  // 第一次进入判断
  const getTimeArray = (input: string, type = 'date') => {
    const date = new Date()
    if (type === 'time') {
      const timeArray = [getHour(input), getMinute(input)]
      const hourIndex = hours.indexOf(+timeArray[0]) !== -1 ? hours.indexOf(+timeArray[0]) : 1
      const minuteIndex = minutes.indexOf(+timeArray[1]) !== -1 ? minutes.indexOf(+timeArray[1]) : 1
      return [hourIndex, minuteIndex]
    }
    const timeArray = [getYear(input), getMonth(input), getDate(input), getHour(input), getMinute(input)]
    const year = +timeArray[0] < date.getFullYear() ? +timeArray[0] : date.getFullYear()
    // @ts-ignore
    const yearIndex = +years.indexOf(year) !== -1 ? +years.indexOf(year) : years[years.length -1]
    // @ts-ignore
    const monthIndex = months.indexOf(+timeArray[1]) !== -1 ? months.indexOf(+timeArray[1]) : 1
    // @ts-ignore
    const dateIndex = days.indexOf(+timeArray[2]) !== -1 ? days.indexOf(+timeArray[2]) : 1
    if (type === 'datetime') {
      // @ts-ignore
      const hourIndex = hours.indexOf(+timeArray[3]) !== -1 ? hours.indexOf(+timeArray[3]) : 1
      // @ts-ignore
      const minuteIndex = minutes.indexOf(+timeArray[4]) !== -1 ? minutes.indexOf(+timeArray[4]) : 1
      return [yearIndex, monthIndex, dateIndex, hourIndex, minuteIndex]
    }
    return [yearIndex, monthIndex, dateIndex]
  }

  const [isOpened, setIsOpened] = useState<boolean>(visible);
  const [years, setYears] = useState<number[]>(getYears(minDate, maxDate))
  const [months, setMonths] = useState<number[]>(getMonths(getYear(value), minDate, maxDate) || [])
  const [days, setDays] = useState<number[]>(getDays(getYear(value), getMonth(value), minDate, maxDate))
  const [hours, setHours] = useState<number[]>(getHours(getMonth(value), getDate(value), getYear(value), minDate, maxDate))
  const [minutes, setMinutes] = useState<number[]>(
    getMinutes(
      getMonth(value), getDate(value), getYear(value), getHour(value),
      minDate, maxDate
    )
  )
  const [year, setYear] = useState<number>(getYear(value))
  const [yearEndTime, setYearEndTime] = useState<number>(getYear(endValue))
  const [month, setMonth] = useState<number>(getMonth(value))
  const [monthEndTime, setMonthEndTime] = useState<number>(getMonth(endValue))
  const [day, setDay] = useState<number>(getDate(value))
  const [dayEndTime, setDayEndTime] = useState<number>(getDate(endValue))
  const [hour, setHour] = useState<number>(getHour(value))
  const [hourEndTime, setHourEndTime] = useState<number>(getHour(endValue))
  const [minute, setMinute] = useState<number>(getMinute(value))
  const [minuteEndTime, setMinuteEndTime] = useState<number>(getMinute(endValue))
  const [valueStartTime, setValueStartTime] = useState<number[] | undefined>(getTimeArray(value, props.type))
  const [valueEndTime, setValueEndTime] = useState<number[] | undefined>(endValue ? getTimeArray(endValue, props.type) : [9999, 0, 0])
  const [active, setActive] = useState<number>(1)
  const [showToast, setShowToast] = useState<boolean>(false)

  // 改变时间函数
  const onChange = (e) => {
    const { type, minDate, maxDate } = props
    const val = e.detail.value
    if (type === 'time') {
      if (active === 1) {
        setHour(hours[val[0]])
        setMinute(minutes[val[1]])
        setValueStartTime(val)
      } else {
        setHourEndTime(hours[val[0]])
        setMinuteEndTime(minutes[val[1]])
        setValueStartTime(val)
      }
      return
    }
    const selectMonths = getMonths(years[val[0]], minDate, maxDate) || []
    const selectDays = getDays(years[val[0]], months[val[1]], minDate, maxDate)
    const selectHours = getHours(years[val[0]], months[val[1]], days[val[2]], minDate, maxDate)
    const selectMinutes = getMinutes(years[val[0]], months[val[1]], days[val[2]], hours[val[3]], minDate, maxDate)
    
    setMonths(selectMonths)
    setDays(selectDays)
    setHours(selectHours)
    setMinutes(selectMinutes)
    if (active === 1) {
      setYear(years[val[0]])
      setMonth(selectMonths[val[1]])
      setDay(selectDays[val[2]])
      setValueStartTime(val)
      if (type === 'datetime') {
        setHour(selectHours[val[3]])
        setMinute(selectMinutes[val[4]])
      }
    } else {
      setYearEndTime(years[val[0]])
      setMonthEndTime(selectMonths[val[1]])
      setDayEndTime(selectDays[val[2]])
      setValueEndTime(val)
      if (type === 'datetime') {
        setHourEndTime(selectHours[val[3]])
        setMinuteEndTime(selectMinutes[val[4]])
      }
    }
  }

  useEffect(() => {
    setIsOpened(visible)
  }, [visible])

  useEffect(() => {
    if (type !== 'date') {
      setValueStartTime(getTimeArray(value, type))
    }
  }, [type, value])

  useEffect(() => {
    setYear(getYear(value))
    setMonth(getMonth(value))
    setDay(getDate(value))
    setValueStartTime(getTimeArray(value, type))
    setHour(getHour(value))
    setMinute(getMinute(value))
  }, [value])

  useEffect(() => {
    setYearEndTime(getYear(endValue))
    setMonthEndTime(getMonth(endValue))
    setDayEndTime(getDate(endValue))
    setValueEndTime(endValue ? getTimeArray(endValue, type) : [9999, 0, 0])
    setHourEndTime(getHour(endValue))
    setMinuteEndTime(getMinute(endValue))
  }, [endValue])

  useEffect(() => {
    const years = getYears(minDate, maxDate)
    const months = getMonths(getYear(value), minDate, maxDate) || []
    const days = getDays(getYear(value), getMonth(value), minDate, maxDate)
    const hours = getHours(getMonth(value), getDate(value), getYear(value), minDate, maxDate)
    const minutes = getMinutes(
      getMonth(value), getDate(value), getYear(value), getHour(value),
      minDate, maxDate
    )
    setYears(years)
    setMonths(months)
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
  }, [minDate, maxDate])

  // 点击mask关闭
  const outClick = () => {
    closeOnclickOverlay && close()
  }

  // 阻止冒泡
  const handleTouchMove = (e: CommonEvent): void => {
    e.stopPropagation()
  }

  // 关闭回调
  const handleClose = (): void => {
    if (typeof props.onClose === 'function') {
      props.onClose()
    }
  }

  // 确定函数函数
  const transDate = (input) => {
    if (input < 10) return `0${input}`
    return input
  }

  // 确认回调
  const handleConfirm = () => {
    const { type } = props
    const timeArr: Array<string> = []
    let startTime = ''
    if (type === 'datetime') {
      startTime += `${year}-${transDate(month)}-${transDate(day)}`
      startTime += ` ${transDate(hour)}:${transDate(minute)}`
    } else if (type === 'date') {
      startTime += `${year}-${transDate(month)}-${transDate(day)}`
    } else {
      startTime += `${transDate(hour)}:${transDate(minute)}`
    }
    timeArr.push(startTime)
    if (showEndDate) {
      let endTime = `${yearEndTime}-${transDate(monthEndTime)}-${transDate(dayEndTime)}`
      if (type === 'datetime') {
        endTime = `${yearEndTime}-${transDate(monthEndTime)}-${transDate(dayEndTime)}`
        endTime += ` ${transDate(hourEndTime)}:${transDate(minuteEndTime)}`
      } else if (type === 'date') {
        endTime = `${yearEndTime}-${transDate(monthEndTime)}-${transDate(dayEndTime)}`
      } else {
        endTime += `${transDate(hourEndTime)}:${transDate(minuteEndTime)}`
      }
      timeArr.push(endTime)
    }
    if (typeof props.onOk === 'function') {
      props.onOk(timeArr)
    }
  }

  // 关闭函数
  const close = (): void => {
    setIsOpened(false)
    handleClose()
  }

  // 确定函数函数
  const confirm = (): void => {
    if (showEndDate && getArrayTime('start') > getArrayTime('end')) {
      setShowToast(true)
      return
    }
    setIsOpened(false)
    handleConfirm()
  }

  // 点击tab页面
  const handleClickTab = (tab: any): void => {
    setActive(tab)
  }

  const getArrayTime = (isDown) => {
    if (isDown === 'start') {
      return new Date(`${year}/${month}/${day} ${hour}:${minute}`).getTime()
    } else {
      return new Date(`${yearEndTime}/${monthEndTime}/${dayEndTime} ${hourEndTime}:${minuteEndTime}`).getTime()
    }
  }

  const rootClassMask = classNames(
    `${CssPrefix}-datetime__mask`,
    {
      [`${CssPrefix}-datetime__mask-active`]: isOpened
    },
  )

  const containerClass = classNames(
    `${CssPrefix}-datetime__container`,
    {
      [`${CssPrefix}-datetime__container-active`]: isOpened,
      [`${CssPrefix}-datetime__container-round`]: round
    },
  )

  const tabLeftClass = classNames(
    'time-show-left',
    {
      'half': showEndDate,
      'active': active === 1
    },
  )

  const tabRightClass = classNames(
    'time-show-right',
    {
      'hidden': !showEndDate,
      'half': showEndDate,
      'active': active === 2
    },
  )

  const columnStyle = {
    'line-height': pxTransform(50),
    'text-align': 'center'
  } as CSSProperties

  return (
    <CompContainer 
      className={ `${CssPrefix}-datetime` }
      onTouchMove={handleTouchMove}
      customizeStyle={ customizeStyle }
    >
      <View className={rootClassMask} onClick={outClick} />
      <View className={containerClass}>
        <View className="time-picker-container">
          <View className="time-show-container">
            <View className={tabLeftClass} onClick={ () => handleClickTab(1) }>
              <View className="time-show-left-title">{title}</View>
              <View className="time-show-left-content">
                {
                  type !== 'time' &&
                  <Fragment>{year}.{transDate(month)}.{transDate(day)}</Fragment>
                }
                {
                  type !== 'date' && 
                  <Fragment> {transDate(hour)}:{transDate(minute)}</Fragment>
                }
              </View>
            </View>
            <View className={tabRightClass} onClick={ () => setActive(2)}>
              <View className="time-show-left-title">{endTitle}</View>
              <View className="time-show-left-content">
                {
                  type !== 'time' &&
                  <Fragment>{yearEndTime}.{transDate(monthEndTime)}.{transDate(dayEndTime)}</Fragment>
                }
                {
                  type !== 'date' && 
                  <Fragment> {transDate(hourEndTime)}:{transDate(minuteEndTime)}</Fragment>
                }
              </View>
            </View>
          </View>
          <PickerView
            indicatorClass="picker-column"
            className="picker-row"
            value={ active === 1 ? valueStartTime : valueEndTime }
            onChange={onChange}
          >
            {
              type !== 'time' &&
              <Fragment>
                <PickerViewColumn
                  style={ columnStyle }
                >
                  {years.map(item => {
                    return <View className={ `${CssPrefix}-datetime-picker__label` }>{item}年</View>;
                  })}
                </PickerViewColumn>
                <PickerViewColumn style={ columnStyle }>
                  {months.map(item => {
                    return <View className={ `${CssPrefix}-datetime-picker__label` }>{item}月</View>
                  })}
                </PickerViewColumn>
                <PickerViewColumn style={ columnStyle }>
                  {days.map(item => {
                    return <View className={ `${CssPrefix}-datetime-picker__label` }>{item}日</View>
                  })}
                </PickerViewColumn>
              </Fragment>
            }
            {
              type !== 'date' && 
              <Fragment>
                <PickerViewColumn style={ columnStyle }>
                  {hours.map(item => {
                    return <View className={ `${CssPrefix}-datetime-picker__label` }>{item}时</View>
                  })}
                </PickerViewColumn>
                <PickerViewColumn style={ columnStyle }>
                  {minutes.map(item => {
                    return <View className={ `${CssPrefix}-datetime-picker__label` }>{item}分</View>
                  })}
                </PickerViewColumn>
              </Fragment>
            }
          </PickerView>
        </View>
        <View className="time-bottom">
          <View className="cancel-btn" onClick={ () => close() }>取消</View>
          <View className="confirm-btn" onClick={ () => confirm() }>确定</View>
        </View>
      </View>

      <SlToast
        visible={ showToast}
        text="结束时间不能小于开始时间"
        onClose={ () => setShowToast(false)}
      />
    </CompContainer>
  )
}

export default DatetimePicker
