import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

import { auth } from "../../../firebase-config";

import styles from "./loginForm.module.scss";

const LoginForm = () => {
  const [form] = Form.useForm();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <Form
      className={styles.loginForm}
      form={form}
      name="horizontal_login"
      layout="inline"
      onFinish={onFinish}
    >
      <Form.Item className={styles.header}>
        <span>Login</span>
      </Form.Item>

      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          onChange={(e) => setLoginEmail(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item shouldUpdate>
        {() => (
          <Button
            type="primary"
            htmlType="submit"
            disabled={
              !form.isFieldsTouched(true) ||
              !!form.getFieldsError().filter(({ errors }) => errors.length)
                .length
            }
            onClick={login}
          >
            Log in
          </Button>
        )}
      </Form.Item>
      <Form.Item>
        <Link to="/register">Registration</Link>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
