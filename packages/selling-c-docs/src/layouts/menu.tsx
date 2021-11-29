import { useEffect, useState, FC, Fragment } from 'react'
import { Menu } from 'antd'
import { history } from 'umi';
import MenuObj from '../business/docs-route'

type Props = {
  postIframeMessage: (title: string) => void
}

const list = [{
  nameEn: 'Guide',
  name: '开发指南',
  path: null,
  children: [{
    name: '介绍',
    nameEn: '',
    path: '/'
  }, {
    name: '快速上手',
    nameEn: '',
    path: '/'
  }, {
    name: '主题定制',
    nameEn: '',
    path: '/'
  }, {
    name: '设计资源',
    nameEn: '',
    path: '/'
  }]
}]

const SideMenu: FC<Props> = ({ postIframeMessage }) => {
  const [selectedKeys, setSelectedKeys] = useState<string>(history.location.pathname.split('/')[-1] || 'badge')

  const iframeListener = (e: any) => {
    const path = e.data.path
    if (path) {
      history.push(`/docs${path}`);
    }
  }

  useEffect(() => {
    window.addEventListener("message", iframeListener, false);
  }, [])

  useEffect(() => {
    const pathTitle = history.location.pathname.replace('/docs/', '')
    setSelectedKeys(pathTitle)
  }, [history.location.pathname])

  return (
    <Menu
      mode="inline"
      selectedKeys={[String(selectedKeys)]}
      style={{ height: '100%',overflowY:'scroll' }}
    >
      {
        [...list, ...MenuObj.routes].map((v, i) => (
          <Fragment key={i} >
            <Menu.Item
              key={v.name}
              onClick={() => {
                if (v.path) history.push(v.path);
              }}
            >{v.name}</Menu.Item>
            {
              v.children.map((val) => (
                <Menu.Item
                  style={{ color: '#999' }}
                  key={val.path.substring(1)}
                  onClick={() => {
                    if (val.path) history.push(`/docs${val.path}`);
                    postIframeMessage(val.path)
                  }}
                >
                  {val.nameEn || ''} {val.name}
                </Menu.Item>
              ))
            }
          </Fragment>
        ))
      }
    </Menu>
  );
}

export default SideMenu