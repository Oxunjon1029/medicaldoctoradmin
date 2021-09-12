import { Button, Modal, Tabs } from "antd";
import React, { useState } from "react";
const { TabPane } = Tabs;
const ModalComponent = (props) => {
  const [buyumstate, setBuyumstate] = useState();
  
  const StandartBtns = [
    {
      text: "Birinchi",
      id: "1",
    },
    {
      text: "Ikkinchi",
      id: "2",
    },
    {
      text: "Uchinchi",
      id: "3",
    },
    {
      text: "To'rtinchi",
      id: "4",
    },
  ];
  const SaveBtns = [
    {
      text: "Beshinchi",
      id: "5",
    },
    {
      text: "Oltinchi",
      id: "6",
    },
  ];
  const BuyumlarBtnChange = (id) => {
    setBuyumstate(id);
  };
  
  return (
    <div>
      <Modal
        title="Медицинская карта пациента"
        visible={props.visible}
        onCancel={props.onCancel}
        width={1000}
      >
        <div className="buyumlar_modal_tabs">
          <Tabs className="things_tabs">
            <TabPane tab="Стандарт" key="1">
              {StandartBtns.map((item) => (
                <Button
                  onClick={() => BuyumlarBtnChange(item.id)}
                  key={item.id}
                  type={buyumstate === item.id?"primary":"default"}
                >
                  {item.text}
                </Button>
              ))}
            </TabPane>
            <TabPane tab="Сохранено" key="2">
              {SaveBtns.map((item) => (
                <Button
                  onClick={() => BuyumlarBtnChange(item.id)}
                  key={item.id}
                  type={buyumstate === item.id?"primary":"default"}
                >
                  {item.text}
                </Button>
              ))}
            </TabPane>
          </Tabs>
        </div>
      </Modal>
    </div>
  );
};

export default ModalComponent;
