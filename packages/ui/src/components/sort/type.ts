
import CompCommon from '../../common/type'

interface ListProps {
  /**
   * 排序的key
   */
  key: string;
  /**
   * 排序key对应的文字
   */
  text: string;
}

export interface SortProps extends CompCommon {
  /**
   * 排序列表
   */
  list: ListProps[];

  /**
   * 当前排序
   */
  activeKey?: string;

  /**
   * 升序/降序
   * @default 'asc'
   */
  activeSort?: 'asc' | 'desc';

  /**
   * 排序改变，回调函数
   */
  onChange?: Function;

  /**
   * 是否滚动 
   * @default false
   */
  scroll?: boolean;
  /**
   * 文字颜色
   * @default '#333333'
   */
  textColor?: string;
  /**
   * 升序/降序箭头颜色
   * @default '#CCCCCC'
   */
  arrowColor?: string;
  /**
   * 选中项的颜色
   * @default '#FF2929'
   */
  activeColor?: string;
  /**
   * 是否有border
   * @default false
   */
  border: boolean;
}

export type ActiveSort = 'asc' | 'desc';


