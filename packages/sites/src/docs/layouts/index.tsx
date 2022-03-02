// import { useState } from 'react'
import { Layout } from 'antd'
import {  useLocation } from 'react-router-dom'
import LayoutMenu from './layout-menu'
import LayoutHeader from './layout-header'
import './index.less'

const { Content, Sider } = Layout
export default function LayoutComponent ({ children }: any) {
  const location = useLocation()
  // const [path] = useState<string>(location.pathname.split('/')[3] || 'home')

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
          <LayoutMenu postIframeMessage={ (title) => postIframeMessage(title) } />
        </Sider>
        <Content className="layout-md-contianer layout-h-100 pb-24 pl-12 layout-flex-row layout-over-flow-y layout-border-top ">
          {children}
          <div
            id="docs-frame"
          >
            {/* <iframe
              className="iframe-content"
              src={ `${process.env.API_IFRAME_URL}/#/pages/${path}/index` }
              frameBorder="0"
              id="iframeDemo"
            /> */}
            <iframe className="iframe-content" src="/demo.html" frameBorder="0" />
          </div>
          <div className="phone-pos" />
        </Content>
      </Layout>
    </LayoutHeader>
  )
}
