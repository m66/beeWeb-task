import { Space, Spin } from "antd";

const RouteIf = ({ elem, showWhen }) => {
  if (showWhen) {
    return elem;
  }

  return (
    <Space size="middle">
      <Spin size="large" />
    </Space>
  );
};

export default RouteIf;
