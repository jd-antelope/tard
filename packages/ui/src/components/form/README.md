# Form 表单
### 介绍
用于数据录入、校验，支持输入框、单选框、复选框、文件上传等类型，需要与 Field 输入框 组件搭配使用。2.5 版本开始支持此组件。
### 引入
```js
import { Form } from 'tard'
```
## 代码演示
### 基础用法
```js
const [form, setForm] = useState({
  shopName |  ''
})

const onSubmit = (event) => {
  console.log(event)
}

const change = (res) => {
  setForm({
    ...form,
    ...res
  })
}
return (
  <View className="container">
    <Form onSubmit={onSubmit}>
      <SlField
        name='name' 
        label='账号' 
        type='text' 
        placeholder='请输入账号' 
        value={form.name} 
        onChange={(e) => change({ name |  e })} 
      />
    </Form>
    <SlButton formType='submit'>提交</SlButton>
  </View>
);
```

### 卡片用法
增加属性 `round` 添加卡片用法
```js
<Form onSubmit={onSubmit} round>
  ...
</Form>
```

## API
### Props
|  属性   | 说明  | 类型 | 默认值 |
|  ----  | ----  | ---- | ---- |
| reportSubmit | 是否返回formId用于发送模板消息 | boolean | false |
| border | 是否需要border | boolean | false |
| round | 卡片模式 | boolean | false |

### Events
|  事件名   | 说明  | 回调参数 |
|  ----  | ----  | ---- |
| onSubmit | 携带form中的数据触发submit事件，由于小程序组件化的限制，onSubmit事件获得的event中的event.detail.value始终为空对象，开发者要获取数据，可以自行在页面的state中获取 | event |
| onReset | 表单重置时会触发reset事件 | event |

### 样式变量
|  属性   | 默认值 |
|  ----  | ---- |
|  --form-round |  16px |
|  --form-round-bg |  var(--color-white) |
|  --form-bg-color |  transparent |
