
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
    _isOpened: boolean,
    years: Array<any>,
    year: number,
    yearEndTime: number,
    months: Array<any>,
    month: number,
    monthEndTime: number,
    days: Array<any>,
    day: number,
    dayEndTime: number,
    value: Array<any>,
    valueEndTime: Array<any> | undefined,
    active: number,
    showToast: boolean
}

declare const SlTimePicker: ComponentClass<SlTimePickerProps>

export default SlTimePicker
