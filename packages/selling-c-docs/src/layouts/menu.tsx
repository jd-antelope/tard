import { useEffect, useState } from 'react'
import { Menu } from 'antd'
import { history } from 'umi';
import MenuObj from '../business/docs-route'

export default function DocsPage() {
  const [selectedKeys, setSelectedKeys] = useState<number>(() => {
    let key = 0
    MenuObj.map((v, i) => {
      if (v.path === history.location.pathname) {
        key = i + 1
      }
    })
    return key
  })

  const getSelentDefault = () => {
    let key = 0
    MenuObj.map((v, i) => {
      if (v.path === history.location.pathname) {
        key = i + 1
      }
    })
    return key
  }

  useEffect(() => {
    setSelectedKeys(getSelentDefault())
  }, [history.location.pathname])

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={[String(selectedKeys)]}
      style={{ height: '100%' }}
    >
      {
        MenuObj.map((v, i) => (
          <Menu.Item 
            key={ String(i + 1) }
            onClick={ () => history.push(v.path) }
          >{ v.title }</Menu.Item>
        ))
      }
    </Menu>
  );
}