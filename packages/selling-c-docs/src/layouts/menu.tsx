import { useEffect, useState, FC } from 'react'
import { Menu } from 'antd'
import { history } from 'umi';
import MenuObj from '../business/docs-route'
import { introduceList } from '../business/layout'
import { LayoutList } from '../interface/layout'

type Props = {
  postIframeMessage: (title: string) => void
}

const SideMenu: FC<Props> = ({ postIframeMessage }) => {
  const list = [...introduceList, ...MenuObj.routes] as LayoutList[]
  const [selectedKeys, setSelectedKeys] = useState<string>(history.location.pathname.split('/')[3] || '/')

  const iframeListener = (e: any) => {
    const path = e.data.path
    routerPush(path)
  }

  const routerPush = (path: string) => {
    if (path) return history.push(`/docs${path === '/' ? '' : '/comps'}${path === '/' ? '' : path}`)
  }

  useEffect(() => {
    window.addEventListener("message", iframeListener, false);
  }, [])

  useEffect(() => {
    const pathTitle = history.location.pathname.replace(/(\/docs\/comps\/|\/docs\/)/, '')
    setSelectedKeys(pathTitle)
  }, [history.location.pathname])

  return (
    <Menu
      mode="inline"
      selectedKeys={[String(selectedKeys)]}
      style={{ height: '100%',overflowY:'scroll' }}
    >
      {
        list.map((v, i) => (
          <Menu.ItemGroup key={ i } title={ v.name }>
            {
              v.children.map((val) => (
                <Menu.Item
                  key={ v.isDocs ? val.path.replace('/docs/', ''): val.path.substring(1)}
                  onClick={() => {
                    if (v.isDocs) {
                      if (val.path) history.push(val.path);
                      postIframeMessage('/home')
                    } else {
                      if (val.path) routerPush(val.path);
                      postIframeMessage(val.path)
                    }
                  }}
                >
                  {val.nameEn || ''} {val.name}
                </Menu.Item>
              ))
            }
          </Menu.ItemGroup>
        ))
      }
    </Menu>
  );
}

export default SideMenu