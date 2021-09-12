import { Button, Table } from "antd";
import React, { useState } from "react";
const Dashboard = () => {
  const [bandword, setbandword] = useState([]);
  const BandBtn = (id) => {
    if (bandword.includes(id)) {
      let newband = bandword.filter((item) => item !== id);
      setbandword(newband);
    } else {
      setbandword([...bandword, id]);
    }
  };
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
      dataIndex: "key",
      key: "key",
      render: (key) => (
        <Button
          onClick={() => BandBtn(key)}
          type={bandword.includes(key)?"danger":"default"}
        >
          {bandword.includes(key) ? "Band" : "Bosh"}
        </Button>
      ),
    },
  ];
  const arr = [
    {
      key: "1",
      text: "11-Sep",
    },
    {
      key: "2",
      text: "12-Sep",
    },
    {
      key: "3",
      text: "13-Sep",
    },
    {
      key: "4",
      text: "14-Sep",
    },
    {
      key: "5",
      text: "15-Sep",
    },
    {
      key: "6",
      text: "16-Sep",
    },
    {
      key: "7",
      text: "17-Sep",
    },
  ];
  const [btnstate, setBtnState] = useState("");
  const BtnChange = (key) => {
    setBtnState(key);
  };

  return (
    <div>
      <div className="dashboard_changable_items">
        {arr.map((item) => (
          <Button
            onClick={() => BtnChange(item.key)}
            key={item.key}
            type={btnstate === item.key ? "primary" : "ghost"}
          >
            {item.text}
          </Button>
        ))}
      </div>
      <Table dataSource={dataSource} columns={columns} bordered />
    </div>
  );
};

export default Dashboard;
