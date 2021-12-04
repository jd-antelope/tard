import { IRouteComponentProps, history } from 'umi'
import { Layout, Menu, Input } from 'antd';
import { menuData, logoUrl } from '@/business/layout'
import cn from 'classnames'
import styles from './index.less';
import '../layout.less'
const { Header, Content, } = Layout;
export default function LayoutFull({ children, fullHeader = false } : any ) {

    return (
        <Layout className="layout-flex-col layout-h-100vh layout-w-100">
            <Header className={cn([styles.header, fullHeader? styles.fullHeader : styles.centerHeader ])}>
                <div className={styles.topLeft}>
                    <div className={styles.logoBox} onClick={() => history.push('/')}>
                        <img
                            className={styles.logo}
                            src={logoUrl}
                        />
                    </div>
                    {/* <div className={styles.splitLine}></div>
                    <Input className={styles.inputSearch} placeholder='搜索' /> */}
                </div>
                <Menu
                    className={styles.layoutTopMenu}
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
