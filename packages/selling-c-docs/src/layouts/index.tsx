import { FC } from '@umijs/renderer-react/node_modules/@types/react';
import { IRouteComponentProps, history } from 'umi'
import { Layout, Menu } from 'antd';
import { menuData, logoUrl } from '@/business/layout'
import LayoutMenu from './menu'
import styles from './index.less';

const { Header, Content, Footer, Sider } = Layout;

export default function LayoutComponent({ children, location }: IRouteComponentProps) {
  if (location.pathname === '/') {
    return (
      <LayoutCommon>
        <Layout className="site-layout-background">
          <Content>{ children }</Content>
        </Layout>
      </LayoutCommon>
    )
  }
  return (
    <LayoutCommon>
      <Layout className="site-layout-background" style={{ padding: '0 0 24px' }}>
        <Sider className="site-layout-background" width={200}>
          <LayoutMenu />
        </Sider>
        <Content style={{ padding: '0 30px', backgroundColor: '#fff' }}>{ children }</Content>
      </Layout>
    </LayoutCommon>
  );
}

const LayoutCommon: FC = ({ children }) => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className={ styles.header } style={{ padding: '0 30px' }}>
        <div onClick={ () => history.push('/') }>
          <img 
            className={ styles.logo } 
            src={ logoUrl } 
          />
        </div>
        <Menu 
          theme="light" 
          mode="horizontal" 
          selectable
        >
          {
            menuData.map((v, i) => (
              <Menu.Item key={ i } onClick={ () => history.push(v.path) }>{ v.title }</Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Content style={{ padding: '10px 0 0' }}>
        { children }
      </Content>
      <Footer style={{ textAlign: 'center' }}>selling-c-com ©2021 Created by jd</Footer>
    </Layout>
  );
}
