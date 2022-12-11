import React from "react";
import { Row, Col, Button} from "antd";
import Image from "next/image";
import ReactRotatingText from "react-rotating-text";
import { APP_DESC } from "../util/constants";
import { CheckCircleOutlined, CheckCircleTwoTone } from "@ant-design/icons";
import { useRouter } from "next/dist/client/router";

import logo from "../assets/human1.png";

const CHECKLIST_ITEMS = [
    "Match with a compatible learning partner to help you stay on track",
    "Create a personalized career plan that you can carry with you throughout your career",
    "Hit Milestones and earn rewards along the way",
    "Maintain relationships with your partner even after your classes end",
];

function Home(props) {
  const router = useRouter()

  const goToLogin = () => {
    alert('Coming soon!')
    // TODO: Implement login
    // router.push("/login");
  };

  return (
    <div className="hero-section">
      <Row>
        <Col span={12}>
          <div className="hero-slogan-section">
            <div className="hero-slogan">
              <h5>
                {APP_DESC}.
              </h5>
              <br/>
            </div>
            {/* // "#eb2f96" */}
            {CHECKLIST_ITEMS.map((item, i) => {
              return (
                <p key={i}>
                  <CheckCircleTwoTone twoToneColor="#00aa00" />
                  &nbsp;
                  {item}
                </p>
              );
            })}
            <br />

            <Button type="primary" size="large" onClick={() => router.push('/signup')}>
                Create profile
            </Button>
          </div>
        </Col>
        <Col span={12}>
          <Image alt={"CareerBridge"} fill src={logo} className="hero-image" />
        </Col>
      </Row>
    </div>
  );
}

Home.propTypes = {};

export default Home;
