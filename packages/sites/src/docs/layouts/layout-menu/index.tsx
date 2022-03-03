import { useEffect, useState, FC } from 'react'
import { Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import routes from '../../../constants/docs-route'
import { introduceList } from '../../../constants/layout'
import { LayoutList } from '../../../interface/layout'


type Props = {
  postIframeMessage: (title: string) => void
}

const SideMenu: FC<Props> = ({ postIframeMessage }) => {
  const navigate = useNavigate()
    
  const list = [...introduceList, ...routes] as LayoutList[]
  const [selectedKeys, setSelectedKeys] = useState<string>(location.pathname.split('/')[3] || '/')

  const iframeListener = (e: any) => {
    const { path } = e.data
    routerPush(path)
  }

  const routerPush = (path: string) => {
    if (path) return navigate(`${path === '/' ? '' : '/comps'}${path === '/' ? '' : path}`)
  }

  useEffect(() => {
    window.addEventListener('message', iframeListener, false)
  }, [])

  useEffect(() => {
    const pathTitle = location.pathname.replace(/(\/docs\/comps\/|\/docs\/)/, '')
    setSelectedKeys(pathTitle)
  }, [location.pathname])

  return (
    <Menu
      mode="inline"
      selectedKeys={ [String(selectedKeys)] }
      style={ { height: '100%', overflowY:'scroll', background: '#F7F8FF' } }
    >
      {
        list.map((v, i) => (
          <Menu.ItemGroup key={ i } title={ v.name }>
            {
              v.children.map((val) => (
                <Menu.Item
                  key={ v.isDocs ? val.path.replace('/docs/', '') : val.path.substring(1) }
                  onClick={ () => {
                    if (v.isDocs) {
                      if (val.path) navigate(val.path)
                      postIframeMessage('/home')
                    } else {
                      if (val.path) routerPush(val.path)
                      postIframeMessage(val.path)
                    }
                  } }
                  style={ { paddingLeft: '20px' } }
                >
                  {val.nameEn || ''} {val.name}
                </Menu.Item>
              ))
            }
          </Menu.ItemGroup>
        ))
      }
    </Menu>
  )
}

export default SideMenu