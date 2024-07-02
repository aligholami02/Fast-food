import { Layout, theme } from 'antd';
import { Outlet } from 'react-router-dom';
const { Content } = Layout;
const Contents = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
      <Content
        style={{
          margin: '24px 16px',
        }}
      >
        <div
          style={{
            padding: 24,
            minHeight: 533,
            background: colorBgContainer,
          //  height:'100%'
          }}
        >
          <Outlet />
        </div>
      </Content>
      
    </Layout>
  );
};
export default Contents;