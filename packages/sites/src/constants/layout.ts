import introduce from '../docs/pages/markdown/introduce.md?raw'
import design from '../docs/pages/markdown/design.md?raw'
import quickstart from '../docs/pages/markdown/quickstart.md?raw'
import theme from '../docs/pages/markdown/theme.md?raw'

export const menuData = [
  {
    title: '指南',
    path: '/introduce'
  }, {
    title: '组件',
    path: '/comps/button'
  },
  {
    title: '示例',
    path: '/demo.html'
  }, {
    title: '资源',
    path: '/docs'
  }, {
    title: '加入我们',
    path: '/docs'
  }]

export const introduceList = [{
  nameEn: 'Guide',
  name: '开发指南',
  path: null,
  isDocs: true,
  children: [{
    name: '介绍',
    nameEn: '',
    path: '/introduce',
    component: introduce
  }, {
    name: '快速上手',
    nameEn: '',
    path: '/quickstart',
    component: quickstart
  }, {
    name: '主题定制',
    nameEn: '',
    path: '/theme',
    component: theme
  }, {
    name: '设计资源',
    nameEn: '',
    path: '/design',
    component: design
  }]
}]

export const logoUrl = 'https://storage.360buyimg.com/hawley-common/tard-image/logo.png'