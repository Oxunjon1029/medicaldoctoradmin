import { Button, Table, Tabs } from "antd";
import React, { useState } from "react";
const { TabPane } = Tabs;
const Dashboard = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Vaqti",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Xizmati",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Holati",
      render:(holat)=>(
          <Button>
              Bosh
          </Button>
      )
    },
  ];

  return (
    <div>
      <div className="dashboard_changable_items">
        <Tabs tabPosition="top">
          <TabPane tab="11-Sep" key="1"></TabPane>
          <TabPane tab="12-Sep" key="2"></TabPane>
          <TabPane tab="13-Sep" key="3"></TabPane>
          <TabPane tab="14-Sep" key="4"></TabPane>
          <TabPane tab="15-Sep" key="5"></TabPane>
          <TabPane tab="16-Sep" key="6"></TabPane>
          <TabPane tab="17-Sep" key="7"></TabPane>
        </Tabs>
      </div>
      <Table dataSource={dataSource} columns={columns} bordered />
    </div>
  );
};

export default Dashboard;
