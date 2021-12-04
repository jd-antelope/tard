import { FC, useState } from 'react'
import cn from 'classnames'
import { IRouteComponentProps, history } from 'umi'
import { Layout, Menu } from 'antd';
import { menuData, logoUrl } from '@/business/layout'
import LayoutMenu from './menu'
import './layout.less'
import styles from './index.less';

const { Header, Content, Sider } = Layout;
export default function LayoutComponent({ children, location }: IRouteComponentProps) {
  const [path] = useState<string>(history.location.pathname.split('/')[3] || 'home')

  const postIframeMessage = (path: string) => {
    const childFrameObj = document.getElementById('iframeDemo');
    (childFrameObj as any).contentWindow?.postMessage({ path }, '*');
  }

  if (location.pathname === '/') {
    return (
      <LayoutCommon>
        <Layout className="site-layout-background">
          <Content>{children}</Content>
        </Layout>
      </LayoutCommon>
    )
  }
  return (
    <LayoutCommon>
      <Layout className="site-layout-background site-main">
        <Sider className={ cn('site-layout-background', styles.siteSider) } width="260px">
          <LayoutMenu postIframeMessage={(title) => postIframeMessage(title)} />
        </Sider>
        <Content className="layout-md-contianer layout-h-100 pb-24 pl-12 layout-flex-row layout-over-flow-y ">
          {children}
          <div
            id='docs-frame'
          >
            <iframe
              className='iframe-content'
              src={ `${process.env.API_IFRAME_URL}/#/pages/${path}/index` }
              frameBorder='0'
              id='iframeDemo'
            />
            {/* <div className='iphone-frame'></div> */}
          </div>
          <div className='phone-pos'></div>
        </Content>
      </Layout>
    </LayoutCommon>
  );
}

const LayoutCommon: FC = ({ children }) => {
  return (
    <Layout className="layout-flex-col layout-h-100vh layout-w-100">
      <Header className={styles.header}>
        <div className={styles.logoBox} onClick={() => history.push('/')}>
          <img
            className={styles.logo}
            src={logoUrl}
          />
        </div>
        <Menu
          className={ styles.layoutTopMenu }
          theme="light"
          mode="horizontal"
          selectable
        >
          {
            menuData.map((v, i) => (
              <Menu.Item key={i} onClick={() => history.push(v.path)}>{v.title}</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Content className="layout-w-100 layout-h-100  layout-flex-col layout-flex-1">
        {children}
      </Content>
    </Layout>
  );
}
