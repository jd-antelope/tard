import { IMG_PREFIX } from '@/business/constants'
import { FooterResources } from '@/interface/index'

export const FOOTTER_RESOURCES = [{
  title: '相关产品',
  children: [{
    title: 'Taro',
    url: 'https://docs.taro.zone/'
  }, {
    title: 'React',
    url: 'https://zh-hans.reactjs.org/'
  }, {
    title: 'Relay',
    url: 'https://relay.jd.com/'
  }, {
    title: 'Typescript',
    url: 'https://www.tslang.cn/'
  }]
}, {
  title: '社区',
  children: [{
    title: 'GitHub',
    url: 'https://github.com/jd-antelope/tard'
  }]
}, {
  title: '相关产品',
  children: [{
    title: '加入我们',
    url: 'https://github.com/jd-antelope/tard'
  }, {
    title: '意见反馈',
    url: 'https://github.com/jd-antelope/tard/issues'
  }, {
    title: '京东前端',
    url: 'http://fe.jd.com/'
  }]
}] as FooterResources[]

export const COMPS_LIST = [{
  title: '前沿技术',
  content: '',
  des: 'React \n Typescript',
  url: `${IMG_PREFIX}/frond.png`
}, {
  title: '适配多端',
  content: '轻松开发小程序',
  des: 'Taro',
  url: `${IMG_PREFIX}/multi.png`
}, {
  title: '自定义主题',
  content: '内置主题变量数',
  des: '400+',
  url: `${IMG_PREFIX}/theme.png`
}, {
  title: '组件丰富',
  content: '支持常用组件数',
  des: '30+',
  url: `${IMG_PREFIX}/comps.png`,
  isTip: true
}]