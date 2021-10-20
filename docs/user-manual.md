# 使用手册
## 开发
```shell
yarn
cd packages/selling-c-ui
yarn build:weapp
```
开发新组件
```shell
npm run create
```
## 注意事项
+ 组件用class类的方式进行开发，因为rollup无法打包react-hooks抛出的事件。
+ less使用尽量使用默认配置
+ type一定要写全

## 项目间调用
```shell
cd packages/selling-c-ui
yarn link
```
另外的项目调用
```shell
yarn link @jd/selling-c-ui
```