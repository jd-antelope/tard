import MarkDown from '@/components/markdown'

const markdown = `# Sort 排序
### 介绍
排序项组件，支持元素换行或滚动展示。
### 引入
~~~js
import { SlSort } from 'tard'
~~~
## 代码演示
### 基础用法
~~~js
<SlSort 
  list={ [
    {key: 'sort1', text:'排序1'},
  ] 
  }
/>
<SlSort 
  list={ [
    {key: 'sort1', text:'自定义排序1'}, 
    {key: 'sort2', text:'自定义排序2'}, 
    {key: 'sort3', text:'自定义排序3'}, 
    {key: 'sort4', text:'自定义排序4'}, 
    {key: 'sort5', text:'自定义排序5'}
  ] 
  }
/>
~~~
### 一个选项时，可设置border
~~~js
 <SlSort 
  list={ [
    {key: 'sort1', text:'排序1'},
  ] 
  }
  border={ true }
/>
~~~

### 元素不换行，滚动展示
~~~js
<SlSort 
  list={ [
    {key: 'sort1', text:'自定义排序1'}, 
    {key: 'sort2', text:'自定义排序2'}, 
    {key: 'sort3', text:'自定义排序3'}, 
    {key: 'sort4', text:'自定义排序4'}, 
    {key: 'sort5', text:'自定义排序5'}
  ] 
  scroll={true}
  }
/>
~~~

### 多参数设置，箭头默认色、文字颜色、选中颜色、选中排序项
~~~js
<SlSort 
  list={ [
    {key: 'sort1', text:'自定义排序1'}, 
    {key: 'sort2', text:'自定义排序2'}, 
    {key: 'sort3', text:'自定义排序3'}, 
    {key: 'sort4', text:'自定义排序4'}, 
    {key: 'sort5', text:'自定义排序5'}
  ] 
  }
  activeKey="sort3"
  arrowColor="#CCC"
  textColor="#333"
  activeColor="#36D57D"
/>
~~~

## API
### Props
|  参数   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| list | 排序列表 | array | [] |
| activeKey | 当前排序的key | string | '' |
| activeSort | 升序/降序 | string | 'asc' |
| onChange | 排序改变的回调 | function | '' |
| scroll | 是否滚动展示 | boolean | false |
| textColor | 文字颜色 | string | '' |
| arrowColor | 升序/降序箭头颜色 | string | '' |
| activeColor | 选中的颜色 | string | '' |

### Events
|  事件名称   | 说明  | 返回参数 |
|  ----      | ---- |   ----  |
|  onChange  | 排序改变的回调 | value |


### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
|@slc-sort-arrow-color | @color-grey-3|
|@slc-sort-text-default-color | @color-text-base|
|@slc-sort-text-active-color | #FF2929|`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}