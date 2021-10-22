import { Menu } from 'antd'
import { history } from 'umi';
import MenuObj from '../business/docs-route'

export default function DocsPage() {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
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