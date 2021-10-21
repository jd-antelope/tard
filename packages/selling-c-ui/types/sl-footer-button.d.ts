
import SlComponent from './base'

export interface SlFooterButtonProps extends SlComponent {
    /**
     * 按钮名字
     * @default 按钮
     */
    btnName?: string
    /**
     * 点击事件
     */
    clickBtn?: CommonEventFunction
    /**
     * 自定义按钮内容
     */
    replaceContent?: any
}

export interface SlFooterButtonState {
}
