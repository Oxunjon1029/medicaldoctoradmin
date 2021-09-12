import { Button, Form, Input, Modal } from "antd";
import React from "react";
const { TextArea } = Input;
const DavolanganModal = (props) => {
  return (
    <div>
      <Modal
        visible={props.visible}
        onCancel={props.onCancel}
        title="Medkarta ma'lumotlari"
      >
        <Form layout="vertical" style={{position:"relative",padding:"30px 0"}}>
          <Form.Item label="Ma'lumot" required>
            <TextArea placeholder="Kasallangan haqida batafsil ma'lumot"></TextArea>
          </Form.Item>
          <Form.Item style={{position:"absolute",right:"0"}}>
            <Button type="primary">Saqlash</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DavolanganModal;
