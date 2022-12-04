import { useRouter } from "next/router";
import { APP_DESC, APP_NAME } from "util/constants";
import Head from "next/head";
import Image from "next/image"
import { FormOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import logo from 'assets/logo_trans.png';

import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const navigate = (p) => router.push(p);

  const path = router.pathname;

  return <div className="App">
    <Head>
      <title>{APP_NAME}</title>
      <meta name="description" content={APP_DESC} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Layout className="layout">
      <Header>
        <Menu
          mode="horizontal"
          selectedKeys={[path]}
        >
          <Menu.Item key={0}>
            <Image
              src={logo}
              alt="CareerBridge Logo"
              layout="responsive"
              className="header-logo pointer"
              onClick={() => navigate("/")}
            />
          </Menu.Item>
          <>
            <Menu.Item key={'/manage'} onClick={() => navigate("/manage")}>
              <FormOutlined /> Manage Students
            </Menu.Item>

            <Menu.Item key={'/connect'} onClick={() => navigate("/connect")}>
              <FormOutlined /> Connect
            </Menu.Item>

            <Menu.Item key={'/resources'} onClick={() => navigate("/resources")}>
              <FormOutlined /> Resources
            </Menu.Item>

            <Menu.Item key={'/about'} onClick={() => navigate("/about")}>
              <QuestionCircleOutlined /> About
            </Menu.Item>
          </>
        </Menu>
      </Header>
      <Content>
        <div className="container">
          <Component {...pageProps} />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        {APP_NAME} ©2022
      </Footer>
    </Layout>
  </div>
}

export default MyApp
