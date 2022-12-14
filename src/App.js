import React from 'react';
import './App.css';
import {
  Row, Col, Card, Button, Form, Input,
} from 'antd';


function App() {
  // const onFinish = (values) => {
  //   console.log('Received values of form: ', values);
  // };

  return (
    <div>
     <img src="."alt="Login"/>
    <section className="app-section" >

      <Row justify="left">

        <Col xl={6} lg={8} md={10} sm={12} xs={24}>
          <Card style={{ marginTop: 45 }}>
            <Col span={24} className="typo-grey typo-center">
              <h2>Welcome Back !</h2>
            </Col>
            <Form layout="vertical">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: 'Email is required' },
                  { type: 'email', message: 'Must be in email format' },
                ]}
                style={{ marginBottom: 15 }}
              >
                <Input name="email" type="email" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Password is required' }]}
                style={{ marginBottom: 15 }}
              >
                <Input.Password name="password" />
              </Form.Item>

              <Row gutter={[8, 8]} style={{ marginTop: 15 }} justify="end">

                <Col xl={12} lg={12} md={12} sm={12} xs={12} className="typo-right">
                  <Button type="primary" htmlType="submit">
                    Log in
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card>
        </Col>
      </Row>
      </section>
      
    </div>

  );
}

export default App;