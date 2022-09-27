import React from "react";
import "./LoginForm.scss";
import { Button, Checkbox, Form, Input } from "antd";
import { useContext } from "react";
import { AuthContext } from "../../../Context/authContext/authContext";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const Navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const onFinish = (values) => {
    login(values, Navigate);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="LoginForm">
      <Form
        name="basic"
        labelCol={{
          span: 24,
        }}
        wrapperCol={{
          span: 24,
        }}
        initialValues={{
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="username"
          type="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            span: 24,
          }}
        >
          <Button
            style={{
              width: "100%",
              backgroundColor: "green",
              border: "none",
              margin: "10px  0",
            }}
            type="primary"
            htmlType="submit"
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
