import { MouseEvent, ComponentClass } from "react";
import { CommonEventFunction } from "@tarojs/components/types/common";
import SlComponent from "./base";

export interface SlRateProps extends SlComponent {
  /**
   * 评分星星大小
   * @default 20
   */
  size?: number;
  /**
   * 当前评分,开发者需要通过 onChange 事件来更新 value 值，必填
   */
  value?: number;
  /**
   * 最大评分
   * @default 5
   */
  max?: number;
  /**
   * 元素间隔,单位根据环境自动转为 rpx 或 rem
   * @default 5
   */
  margin?: number;
  /**
   * 选中元素的颜色
   */
     activeColor?: string
  /**
   * 输入框值改变时触发的事件，开发者需要通过 onChange 事件来更新 value 值变化，但不填写 onChange 函数时，该组件只读
   */
  onChange?: CommonEventFunction;

}

export interface SlRateState {}
 declare const SlRate: ComponentClass<SlRateProps>;
 export default SlRate
