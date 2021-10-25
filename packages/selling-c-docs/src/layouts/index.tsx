import { FC } from 'react'
import { IRouteComponentProps, history } from 'umi'
import { Layout, Menu } from 'antd';
import { menuData, logoUrl } from '@/business/layout'
import LayoutMenu from './menu'
import './layout.less'
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;
export default function LayoutComponent({ children, location }: IRouteComponentProps) {
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
      <Layout className="site-layout-background">
        <Sider className="site-layout-background">
          <LayoutMenu />
        </Sider>
<<<<<<< Updated upstream
        <Content className="layout-md-contianer layout-h-100 pb-24 pl-12 layout-flex-row layout-over-flow-y ">
          {children}
          <div>
            <div
              id='J-demo-frame'
            >
              <iframe
                className='iframe-content'
                src={`/h5/index.html#/pages/tabBar/index/index`}
                frameBorder='0'
              />
              <div className='iphone-frame'></div>
            </div>
            <div className='phone-pos'></div>
          </div>
        </Content>
=======
        <Content  style={{ padding: '0 30px', backgroundColor: '#fff', background: '#f7f8fa' }}>
          <div className={styles.doc}>
            {children}
          </div>
          <div className={styles.demo}></div>
          </Content>
>>>>>>> Stashed changes
      </Layout>
    </LayoutCommon>
  );
}

const LayoutCommon: FC = ({ children }) => {
  return (
<<<<<<< Updated upstream
    <Layout className="layout-flex-col layout-h-100vh layout-w-100">
      <Header className={styles.header}>
=======
    <Layout style={{ height: '100vh' }}>
      <Header className={styles.header} style={{ padding: '0 30px' }}>
>>>>>>> Stashed changes
        <div onClick={() => history.push('/')}>
          <img
            className={styles.logo}
            src={logoUrl}
          />
        </div>
        <Menu
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
<<<<<<< Updated upstream
      <Content className="layout-w-100 layout-h-100  layout-flex-col layout-flex-1 pt-12">
=======
      <Content style={{ padding: '10px 0 0' }}>
>>>>>>> Stashed changes
        {children}
      </Content>
    </Layout>
  );
}
