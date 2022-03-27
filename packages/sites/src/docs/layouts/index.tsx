import { useState } from 'react'
import { Fragment } from 'react'
import { Layout } from 'antd'
import { Route, Routes, useLocation } from 'react-router-dom'
import MdToReact from '../components/md-to-react'
import LayoutMenu from './layout-menu'
import LayoutHeader from './layout-header'
import routes from '../../constants/docs-route'
import { introduceList } from '../../constants/layout'
import './index.less'

const { Content, Sider } = Layout
export default function LayoutComponent({ children }: any) {
  console.log(import.meta.env.MODE)
  const location = useLocation()
  const [path] = useState<string>(location.pathname.split('/')[3] || 'home')

  const postIframeMessage = (path: string) => {
    const childFrameObj = document.getElementById('iframeDemo');
    (childFrameObj as any).contentWindow?.postMessage({ path }, '*')
  }

  if (location.pathname === '/') {
    return (
      <LayoutHeader >
        <Content className="layout-md-contianer layout-h-100 layout-over-flow-y ">{children}</Content>
      </LayoutHeader>
    )
  }
  return (
    <LayoutHeader fullHeader>
      <Layout className="site-layout-background site-main">
        <Sider className="site-layout-background site-sider" width="260px">
          <LayoutMenu postIframeMessage={(title) => {
            postIframeMessage(title)
          }} />
        </Sider>
        <Content className="layout-md-contianer layout-h-100 pb-24 pl-12 layout-flex-col layout-over-flow-y layout-border-top ">
          <div className="doc-document">
            <div style={{ paddingRight: '10px' }}>
              <Routes>
                {introduceList[0].children.map(
                  route => (
                    <Route
                      key={route.path}
                      path={`${route.path}`}
                      element={<MdToReact route={route} />} />
                  )
                )}

                {
                  routes.map(routeItem => (
                    <Fragment key={routeItem.nameEn}>
                      {
                        routeItem.children.map(route =>
                          <Fragment key={route.path}>
                            {
                              <Route
                                path={`comps${route.path}`}
                                element={<MdToReact route={route} />}
                              />

                            }
                          </Fragment>
                        )
                      }
                    </Fragment>
                  ))
                }
              </Routes>
            </div>
          </div>

          <div
            id="docs-frame"
          >
            <iframe
              className="iframe-content"
              src={`${import.meta.env.MODE === 'development' ? 'http://localhost:10086' : '/h5'}/#/pages/${path}/index`}
              frameBorder="0"
              id="iframeDemo"
            />
            {/* <iframe className="iframe-content" src="/demo.html" frameBorder="0" /> */}
          </div>
        </Content>
      </Layout>
    </LayoutHeader>
  )
}
