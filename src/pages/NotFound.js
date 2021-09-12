import React from "react";
import { Result, Button } from "antd";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();
  const returnHome = () => {
    history.push("/");
  };
  return (
    <Result
      status="404"
      title="404"
      subTitle="Kechirasiz siz tashrif buyurgan sahifa mavjud emas !"
      extra={
        <Button onClick={returnHome} type="primary">
          Bosh sahifaga qaytish
        </Button>
      }
    />
  );
};

export default NotFound;