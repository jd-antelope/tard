import { useEffect, useState, FC } from 'react'
import { Menu } from 'antd'
import { history } from 'umi';
import MenuObj from '../business/docs-route'

type Props = {
  postIframeMessage: (title: string) => void
}

const SideMenu: FC<Props> = ({ postIframeMessage }) => {
  const [selectedKeys, setSelectedKeys] = useState<string>(history.location.pathname.split('/')[-1] || 'badge')

  const iframeListener = (e: any) => {
    const title = e.data.title
    if (title) {
      history.push(`/docs/${title}`);
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
        MenuObj.map((v) => (
          <Menu.Item
            key={v.title}
            onClick={() => {
              history.push(v.path);
              postIframeMessage(v.title)
            }}
          >{v.title}</Menu.Item>
        ))
      }
    </Menu>
  );
}

export default SideMenu