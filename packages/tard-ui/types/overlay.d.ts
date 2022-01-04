import SlComponent from './base'


export interface SlOverlayProps extends SlComponent {
    /**
    * 是否展示遮罩层
    * @default false
    */
    show: boolean
    /**
    * 点击时触发
    */
    onClick?: function
}

declare const SlOverlay: ComponentClass<SlOverlayProps>

export default SlOverlay