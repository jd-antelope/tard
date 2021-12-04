import MarkDown from '@/components/markdown'

const markdown = `# Canvas
### 介绍
该组件是为了给海报功能提供方便，里面有关闭和保存图片功能。目前该组件不支持h5，后续会进行优化。

## 代码演示
### 引入
~~~js
import { SlCanvas } from 'tard'
~~~

### 基础用法
通过 ~contentCallback~ 函数进行补充 ~canvas~ 内容，里面有两个参数，第一个是微信方法 ~createCanvasContext~ 的实例，第二个是换算单位，按750的设计去计算数据。
~~~js
const Canvas: FC = () => {
  const [canvasProps, setCanvasProps] = useState<SlCanvasProps>({ 
    visible: false,
    onClose: () => setCanvasProps({ visible: false })
  });

  const showSlCanvas = useCallback((toastParams) => {
    setCanvasProps({
      visible: true,
      ...toastParams,
      onClose: () => setCanvasProps({ visible: false })
    });
  }, []);

  return (
    <View className="container">
      <SlButton 
        size="large"
        onClick={ 
          () => showSlCanvas({ 
            contentCallback: (ctx, dpr) => {
              ctx.setFontSize(8 * dpr);
              ctx.setFillStyle('#333');
              ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
            } 
          }) 
        }
      >基本案例</SlButton>
      <SlCanvas { ...canvasProps } />
    </View>
  );
};
~~~

### 自定义宽高
通过属性 ~width height~ 可以自定义 ~canvas~ 的宽高
~~~js
showSlCanvas({ 
  width: 500,
  height: 400,
  contentCallback: (ctx, dpr) => {
    ctx.setFontSize(8 * dpr);
    ctx.setFillStyle('#333');
    ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
  } 
})
~~~

### 无遮照展示
通过属性 ~overlay~ 可以将外面遮照去掉，只留canvas本身内容
~~~js
<SlCanvas 
  visible
  overlay={ false }
  contentCallback={(ctx, dpr) => {
    ctx.setFontSize(8 * dpr);
    ctx.setFillStyle('#333');
    ctx.fillText('商羚组件无敌~', 46 * dpr, 36 * dpr);
  } }
/>
~~~

## Api
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| width | 宽度 | number | - |
| height | 高度 | number | - |
| overlay | 是否有遮照 | boolean | true |
| visible | 是否打开 | boolean | - |

### DropdownItem Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onClose | 关闭回调 | - |
| contentCallback | 内容填写方法 | ctx: canvas实例, dpr: 数字计算 |`

export default function DocsPage() {
  return (
    <MarkDown markdown={ markdown } />
  );
}