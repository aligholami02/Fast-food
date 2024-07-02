import { Layout
  // ,theme 
} from 'antd';
const { Footer } = Layout;
const Footers = () => {
  // const {
  //   token: { colorBgContainer },
  // } = theme.useToken();
  return (
    <Layout>
      <Footer
        style={{
          textAlign: 'center',
          backgroundColor:'aqua',
          // position:'sticky',
          // bottom:'0px'
        }}
        
      >
        Ant Design ©2023 Created by Ant UED

      </Footer>
    </Layout>
  );
};
export default Footers;