import './App.css';
import { Layout } from 'antd';
import AppHeader from './component/pages/header';
import AppHome from './views/home';
import AppFooter from './component/pages/footer';
const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout className="ant-layout-mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <AppHome />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
