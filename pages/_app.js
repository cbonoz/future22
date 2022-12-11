import { useRouter } from "next/router";
import { APP_DESC, APP_NAME } from "util/constants";
import Head from "next/head";
import Image from "next/image"
import { UserOutlined, SearchOutlined, GlobalOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import { useState } from "react";
import { Avatar, Button, Layout, Menu } from 'antd';
const { Header, Content, Footer } = Layout;

import logo from 'assets/logo_trans.png';

import 'styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [user, setUser] = useState({})
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
            {/* <Menu.Item key={'/manage'} onClick={() => navigate("/manage")}>
              <UserOutlined /> Manage Students
            </Menu.Item>

            <Menu.Item key={'/connect'} onClick={() => navigate("/connect")}>
              <GlobalOutlined /> Connect
            </Menu.Item>

            <Menu.Item key={'/resources'} onClick={() => navigate("/resources")}>
              <SearchOutlined /> Resources
            </Menu.Item> */}

            <Menu.Item key={'/about'} onClick={() => navigate("/about")}>
              <QuestionCircleOutlined /> About
            </Menu.Item>

            <span style={{ marginLeft: '0' }}>
                <span className="pointer">
                  <Button type="primary" onClick={() => navigate("/signup")}>SignUp</Button>
                  {/* <Avatar size="large" src={user.photoURL} /> */}
                  {/* &nbsp;{user.displayName}&nbsp; */}
                </span>
              &nbsp;
            </span>
          </>
        </Menu>
      </Header>
      <Content>
        <div className="main-container">
          <Component {...pageProps} />
        </div>
      </Content>

      <Footer style={{ textAlign: "center" }}>
        {/* <footer class="bg-gray-100 text-center lg:text-left">
          <div class="container p-6 text-gray-800">
            <div class="grid lg:grid-cols-2 gap-4">
              <div class="mb-6 md:mb-0">
                <h5 class="font-medium mb-2 uppercase">Footer text</h5>

                <p class="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                  molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                  aliquam voluptatem veniam, est atque cumque eum delectus sint!
                </p>
              </div>

              <div class="mb-6 md:mb-0">
                <h5 class="font-medium mb-2 uppercase">Footer text</h5>

                <p class="mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
                  molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
                  aliquam voluptatem veniam, est atque cumque eum delectus sint!
                </p>
              </div>
            </div>
          </div>

          <div class="text-center text-gray-700 p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            {APP_NAME} ©2022
          </div>
        </footer> */}

        <div>
          {APP_NAME} ©2022
        </div>
      </Footer>
    </Layout>
  </div>
}

export default MyApp
