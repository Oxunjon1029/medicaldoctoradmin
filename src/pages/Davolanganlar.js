import { Button, Pagination, Table } from "antd";
import React, { useState } from "react";
import DavolanganModal from "../Components/DavolanganModal";

const Davolanganlar = () => {
    const [davolanganvisible,setDavolanganVisible] = useState(false)
    const handleShowDavolanganModal = () =>{
        setDavolanganVisible(true)
    }
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
          title: "Bemor",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Xizmat nomi",
          dataIndex: "age",
          key: "age",
        },
        {
          title: "Vaqti",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "Sanasi",
          dataIndex: "address",
          key: "address",
        },
        {
          title: "MedKarta",
          dataIndex: "key",
          key: "key",
          render: (key) => (
            <Button onClick={() => handleShowDavolanganModal(key)}>Batafsil</Button>
          ),
        },
      ];
    const handleCancelDavolanganModal = () =>{
        setDavolanganVisible(false)
    }
  return (
    <div style={{position:"relative"}}>
      <Table dataSource={dataSource} columns={columns} pagination={false} />
      <Pagination
        className="buyum_pagination"
        total={dataSource.length}
        showTotal={(total) => `ВСЕ : ${total}`}
      />
      <DavolanganModal visible={davolanganvisible} onCancel={handleCancelDavolanganModal} />
    </div>
  );
};

export default Davolanganlar;
