import { FC, useState } from 'react'
import cn from 'classnames'
import { IRouteComponentProps, history } from 'umi'
import { Layout, Menu } from 'antd';
import { menuData, logoUrl } from '@/business/layout'
import LayoutMenu from './menu'
import LayoutHeader from './layoutheader';
import './layout.less'

const { Header, Content, Sider } = Layout;
export default function LayoutComponent({ children, location }: IRouteComponentProps) {
  const [path] = useState<string>(history.location.pathname.split('/')[3] || 'home')

  const postIframeMessage = (path: string) => {
    const childFrameObj = document.getElementById('iframeDemo');
    (childFrameObj as any).contentWindow?.postMessage({ path }, '*');
  }

  if (location.pathname === '/') {
    return (
      <LayoutHeader >
        <Content>{children}</Content>
      </LayoutHeader>
    )
  }
  return (
    <LayoutHeader fullHeader>
      <Layout className="site-layout-background site-main">
        <Sider className="site-layout-background site-sider" width="260px">
          <LayoutMenu postIframeMessage={(title) => postIframeMessage(title)} />
        </Sider>
        <Content className="layout-md-contianer layout-h-100 pb-24 pl-12 layout-flex-row layout-over-flow-y layout-border-top ">
          {children}
          <div
            id='docs-frame'
          >
            <iframe
              className='iframe-content'
              src={`${process.env.API_IFRAME_URL}/#/pages/${path}/index`}
              frameBorder='0'
              id='iframeDemo'
            />
            {/* <div className='iphone-frame'></div> */}
          </div>
          <div className='phone-pos'></div>
        </Content>
      </Layout>
    </LayoutHeader>
  );
}
