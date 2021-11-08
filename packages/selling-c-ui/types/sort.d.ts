
import SlComponent from './base'

interface ListProps {
  /**
   * 
   * 排序的key
   * 
   */
  key: string;
  /**
   * 
   * 排序key对应的文字
   * 
   */
  text: string;
}
export interface SlSortProps extends SlComponent {
  /**
   * 
   * 排序列表
   * 
   */
  list: ListProps[];
  /**
   * 
   * 当前排序
   * 
   */
  activeKey?: string;
  /**
   * 
   * 升序/降序
   * 
   */
  activeSort?: 'asc' | 'desc';

  /**
   * 
   * 排序改变，回调函数
   * 
   */
  onChange?: CommonEventFunction;

  /**
   * 
   * 是否滚动
   * 
   */
  scroll?: boolean;
  /**
   * 
   * 文字颜色
   * 
   */
  textColor?: string;
  /**
   * 
   * 升序/降序箭头颜色
   * 
   */
  arrowColor?: string;
  /**
   * 
   * 选中项的颜色
   * 
   */
  activeColor?: string;
  /**
   * 
   * 是否有border
   * 
   */
  border: boolean;
}


export interface SlSortState {
  /**
   * 
   * 当前排序
   * 
   */
  activeKey?: string;
  /**
   * 
   * 升序/降序
   * 
   */
  activeSort?: 'asc' | 'desc';
}

declare const SlSort: ComponentClass<SlSortProps>
