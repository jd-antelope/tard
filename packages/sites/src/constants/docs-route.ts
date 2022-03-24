import Button from '@ui/button/README.zh-CN.md?raw'
import DropdownMenu from '@ui/dropdown-menu/README.zh-CN.md?raw'
import Badge from '@ui/badge/README.zh-CN.md?raw'
import SearchBar from '@ui/search-bar/README.zh-CN.md?raw'
import ProgressCircle from '@ui/progress-circle/README.zh-CN.md?raw'
import Cell from '@ui/cell/README.zh-CN.md?raw'
import DatetimePicker from '@ui/datetime-picker/README.zh-CN.md?raw'
import Field from '@ui/field/README.zh-CN.md?raw'
import Form from '@ui/form/README.zh-CN.md?raw'
import InputNumber from '@ui/input-number/README.zh-CN.md?raw'
import Rate from '@ui/rate/README.zh-CN.md?raw'
import Switch from '@ui/switch/README.zh-CN.md?raw'
import Uploader from '@ui/uploader/README.zh-CN.md?raw'
import Loading from '@ui/loading/README.zh-CN.md?raw'
import Modal from '@ui/modal/README.zh-CN.md?raw'
import Popup from '@ui/popup/README.zh-CN.md?raw'
import Overlay from '@ui/overlay/README.zh-CN.md?raw'
import Grid from '@ui/grid/README.zh-CN.md?raw'
import Sort from '@ui/sort/README.zh-CN.md?raw'
import Empty from '@ui/empty/README.zh-CN.md?raw'
import Progress from '@ui/progress/README.zh-CN.md?raw'
import Canvas from '@ui/canvas/README.zh-CN.md?raw'
import Skeleton from '@ui/skeleton/README.zh-CN.md?raw'
import TagPrice from '@ui/tag-price/README.zh-CN.md?raw'
import NavBar from '@ui/nav-bar/README.zh-CN.md?raw'
import Tab from '@ui/tab/README.zh-CN.md?raw'
import FooterButton from '@ui/footer-button/README.zh-CN.md?raw'

const routes = [{
  nameEn: 'Basic Components',
  name: '基础组件',
  path: null,
  children: [{
    name: '按钮',
    nameEn: 'Button',
    path: '/button',
    component: Button // () => import('@ui/button/README.zh-CN.md?raw')
  }, {
    name: '单元格',
    nameEn: 'Cell',
    path: '/cell',
    component: Cell
  }, {
    name: '图标',
    nameEn: 'Icon',
    path: '/icon'
  }, {
    name: '图片',
    nameEn: 'Image',
    path: '/image'
  }, {
    name: '价格',
    nameEn: 'Price',
    path: '/price'
  }, {
    name: '轻提示',
    nameEn: 'Toast',
    path: '/toast'
  }]
}, {
  nameEn: 'Form Components',
  name: '表单组件',
  path: null,
  children: [{
    name: '日期选择',
    nameEn: 'DatetimePicker',
    path: '/datetime-picker',
    component: DatetimePicker
  }, {
    name: '输入框',
    nameEn: 'Field',
    path: '/field',
    component: Field
  }, {
    name: '表单',
    nameEn: 'Form',
    path: '/form',
    component: Form
  }, {
    name: '数字输入框',
    nameEn: 'InputNumber',
    path: '/input-number',
    component: InputNumber
  }, {
    name: '评分',
    nameEn: 'Rate',
    path: '/rate',
    component: Rate
  }, {
    name: '搜索框',
    nameEn: 'SearchBar',
    path: '/search-bar',
    component: SearchBar
  }, {
    name: '开关',
    nameEn: 'Switch',
    path: '/switch',
    component: Switch
  }, {
    name: '文件上传',
    nameEn: 'Uploader',
    path: '/uploader',
    component: Uploader
  }]
}, {
  nameEn: 'Action Components',
  name: '反馈组件',
  path: null,
  children: [{
    name: '下拉菜单',
    nameEn: 'DropdownMenu',
    path: '/dropdown-menu',
    component: DropdownMenu
  }, {
    name: '加载',
    nameEn: 'Loading',
    path: '/loading',
    component: Loading
  }, {
    name: '对话框',
    nameEn: 'Modal',
    path: '/modal',
    component: Modal
  }, {
    name: '遮罩层',
    nameEn: 'Overlay',
    path: '/overlay',
    component: Overlay
  }, {
    name: '弹出框',
    nameEn: 'Popup',
    path: '/popup',
    component: Popup
  }, {
    name: '排序',
    nameEn: 'Sort',
    path: '/sort',
    component: Sort
  }]
}, {
  nameEn: 'Display Components',
  name: '展示组件',
  path: null,
  children: [{
    name: '徽标',
    nameEn: 'Badge',
    path: '/badge',
    component: Badge
  }, {
    name: '空状态',
    nameEn: 'Empty',
    path: '/empty',
    component: Empty
  }, {
    name: '进度条',
    nameEn: 'Progress',
    path: '/progress',
    component: Progress
  }, {
    name: '圆形进度条',
    nameEn: 'ProgressCircle',
    path: '/progress-circle',
    component: ProgressCircle
  }, {
    name: '骨架屏',
    nameEn: 'Skeleton',
    path: '/skeleton',
    component: Skeleton
  }, {
    name: '价格标签',
    nameEn: 'TagPrice',
    path: '/tag-price',
    component: TagPrice
  }]
}, {
  nameEn: 'Navigation Components',
  name: '导航组件',
  path: null,
  children: [{
    name: '宫格',
    nameEn: 'Grid',
    path: '/grid',
    component: Grid
  }, {
    name: '头部导航',
    nameEn: 'NavBar',
    path: '/nav-bar',
    component: NavBar
  }, {
    name: '标签页',
    nameEn: 'Tab',
    path: '/tab',
    component: Tab
  }]
}, {
  nameEn: 'Characteristic Components',
  name: '特色组件',
  path: null,
  children: [{
    name: '海报',
    nameEn: 'Canvas',
    path: '/canvas',
    component: Canvas
  }, {
    name: '底部按钮',
    nameEn: 'FooterButton',
    path: '/footer-button',
    component: FooterButton
  }]
}]

export default routes
