import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Input, Typography, Form, message } from "antd";
import React, { useState } from "react";
import { loginUser } from "../config/HttpRequestHub";
import { TOKEN } from "../constants/constants";
import { setCookie } from "../Cookie/useCookies";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginForm] = Form.useForm();
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const handleUsernameChange = (e) => setPhoneNumber(e.target.value);

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const onFinish = () => {
    setLoading(true);
    loginUser({
      phoneNumber,
      password,
    }).then((res) => {
      if (res && res.status === 200 && res.data) {
        setCookie(TOKEN, res.data.token);
        window.location = "/dashboard";
      } else {
        setCookie(TOKEN, "abs");
        window.location = "/dashboard";
        message.error(
          "Ошибка логина или пароля! Пожалуйста, попробуйте еще раз :))"
        );
        loginForm.resetFields();
        setLoading(false);
      }
    });
  };

  return (
    <div className="doctoradmin_loginpage">
      <Form onFinish={onFinish} className="loginpage_form">
        <Form.Item>
          <Typography className="doctor_login_typography">
            Войдите в свой кабинет на сайте
          </Typography>
        </Form.Item>
        <Form.Item
          required
          rules={[{ message: "Please,input your password", required: true }]}
          name="name"
        >
          <Input
            disabled={loading}
            prefix={<UserOutlined />}
            onChange={handleUsernameChange}
            placeholder="Пожалуйста, введите ваш логин"
          />
        </Form.Item>
        <Form.Item
          required
          rules={[{ message: "Please,input your password", required: true }]}
          name="password"
        >
          <Input.Password
            type="password"
            disabled={loading}
            prefix={<LockOutlined />}
            onChange={handlePasswordChange}
            placeholder="Пожалуйста, введите пароль"
          />
        </Form.Item>
        <Form.Item className="loginpage_btn">
          <Button
            htmlType="submit"
            disabled={loading}
            type="primary"
            loading={loading}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
