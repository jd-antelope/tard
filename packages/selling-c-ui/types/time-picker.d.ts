
import SlComponent from './base'
import {ComponentClass} from "react";

export interface SlTimePickerProps extends SlComponent {
    /**
     * 是否有开始时间和结束时间两个时间选项
     * @default false
     */
    endTime?: boolean
    /**
     * 打开弹窗
     * @default false
     */
    isOpened: boolean
    /**
     * 关闭回调
     */
    onClose?:Function
    /**
     * 确认回调
     */
    onOk?:Function
    /**
     * 是否能点击遮罩层关闭
     * @default false
     */
    outClose: boolean
    /**
     *  左侧默认提示title
     * @default '选中时间'
     */
    title: string
    /**
     *  右侧默认提示title
     * @default '结束时间'
     */
    endTitle: string
    /**
     *  默认开始时间
     * @default 9999-1-1
     */
    timeStr: string
    /**
     *  默认结束时间
     * @default 9999-1-1
     */
    endTimeStr?: string
}

export interface SlTimePickerState {
    _isOpened: boolean, // 打开弹窗
    years: Array<number>, // 年份array
    year: number, // 左侧年份
    yearEndTime: number, // 右侧年份
    months: Array<number>, // 月份array
    month: number, // 左侧月份
    monthEndTime: number, // 右侧月份
    days: Array<number>, // 日期array
    day: number, // 左侧日期
    dayEndTime: number, // 右侧日期
    value: Array<number>, // 左侧时间选择器选中的值的index
    valueEndTime: Array<number> | undefined, // 右侧时间选择器选中的值的index
    active: number, // 当前激活了左侧时间还是右侧时间
    showToast: boolean // 是否现实toast提示
}

declare const SlTimePicker: ComponentClass<SlTimePickerProps>

export default SlTimePicker
