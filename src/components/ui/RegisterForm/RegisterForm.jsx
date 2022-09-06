import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from 'react-redux';

import { formItemLayout, tailFormItemLayout } from '../../../constants/const'

import { auth } from "../../../firebase-config";
import { setUser } from '../../../userSlice'

import styles from "./registerForm.module.scss";

const { Option } = Select;

const RegisterForm = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // dispatch(setUser(user));
      // navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        prefix: "86",
      }}
      scrollToFirstError
    >
      <Form.Item className={styles.header}>
        <span>Registration</span>
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            message: "The input is not valid E-mail!",
            type: "email",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input onChange={(e) => setRegisterEmail(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password onChange={(e) => setRegisterPassword(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The two passwords that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="nickname"
        label="Nickname"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" onClick={register}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
