import { FileOutlined, PieChartOutlined, UserOutlined, DesktopOutlined, TeamOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1',
    <PieChartOutlined />
  ),
  getItem('Option 2', '2',
    <DesktopOutlined />
  ),
  getItem('User', 'sub1',
    <UserOutlined />,
    [
      getItem('Alex', '3', <Link to='/AlexData' ></Link>),
      getItem('Bill', '4', <Link to='/BillData' ></Link>),
      getItem('Tom', '5', <Link to='/TomData' ></Link>),
    ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const Sidbars2 = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div>
      <Layout
        style={{
          minHeight: '100%',
        }}
      >

        <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>

          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
      </Layout>
    </div>
  );
};
export default Sidbars2;