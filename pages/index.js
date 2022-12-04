import React from "react";
import { Row, Col, Button} from "antd";
import Image from "next/image";
import ReactRotatingText from "react-rotating-text";
import { APP_DESC } from "../util/constants";
import { CheckCircleOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { useRouter } from "next/dist/client/router";

import logo from "../assets/human1.png";

const CHECKLIST_ITEMS = [
];

function Home(props) {
  const router = useRouter()

  const goToLogin = () => {
    router.push("/login");
  };
  return (
    <div className="hero-section">
      <Row>
        <Col span={12}>
          <div className="hero-slogan-section">
            <div className="hero-slogan">
              <p>
                {APP_DESC}.<br/>
              </p>
            </div>
            {/* // "#eb2f96" */}
            {CHECKLIST_ITEMS.map((item, i) => {
              return (
                <p>
                  <CheckCircleTwoTone twoToneColor="#00aa00" />
                  &nbsp;
                  {item}
                </p>
              );
            })}
            <br />

            <Button type="primary" size="large" onClick={goToLogin}>
                Get Started
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Image fill src={logo} className="hero-image" />
        </Col>
      </Row>
    </div>
  );
}

Home.propTypes = {};

export default Home;
