import { Button, Form, Input, Select } from "antd";
import React from "react";
const { Option } = Select;
const User = () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="userpage_form"
      >
        <Form.Item
          name="fullname"
          label="ФИО специалиста"
          rules={[{ message: "Please,input your fullname", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="name"
          label="Имя пользователя"
          rules={[{ message: "Please,input your name", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Пароль"
          rules={[{ message: "Please,input your password", required: true }]}
        >
          <Input.Password type="password" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Подтвердить Пароль"
          rules={[{ message: "Please,input your password", required: true }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="phoneNumber"
          label="Телефонный номер"
          rules={[{ message: "Please,input your phone", required: true }]}
        >
          <Input addonBefore="+998" />
        </Form.Item>
        <Form.Item
          name="quality"
          label="Oпыт"
          rules={[{ message: "Please,input your quality", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="select"
          rules={[{ message: "Please,select your selection", required: true }]}
          label="Пол"
        >
          <Select
            style={{ width: "100%" }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onSearch={onSearch}
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
          >
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="tom">Tom</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="date_of_birth"
          label="Дата рождения"
          rules={[{ message: "Please,input your birthday", required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="userpage_btn">
          <Button type="primary">Сохранит</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default User;
