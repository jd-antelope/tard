import CompCommon from '../../common/type'

export interface OverlayProps extends CompCommon {
    /**
    * 是否展示遮罩层
    * @default false
    */
    show: boolean
    /**
    * 点击时触发
    */
    onClick?: Function
}