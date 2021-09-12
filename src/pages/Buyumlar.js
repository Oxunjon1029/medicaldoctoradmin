import { Table, Input, Button, Pagination } from "antd";
import React, { useState } from "react";
import ModalComponent from "../Components/ModalComponent";
const { Search } = Input;
const Buyumlar = () => {
  const [buyumvisible, setBuyumVisible] = useState(false);
  const handleShowModal = () => {
    setBuyumVisible(true);
  };
  const handleCancelModal = () => {
    setBuyumVisible(false);
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
        <Button onClick={() => handleShowModal(key)}>To'ldirish</Button>
      ),
    },
  ];

  return (
    <div className="Buyumlar">
      <div className="searchbox_buyumlar">
        <Search style={{ width: "15%" }} placeholder='Поиск' />
      </div>
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
      />
      <Pagination className="buyum_pagination" total={dataSource.length} showTotal={total=>`ВСЕ : ${total}`} />
      <ModalComponent visible={buyumvisible} onCancel={handleCancelModal} />
    </div>
  );
};

export default Buyumlar;
