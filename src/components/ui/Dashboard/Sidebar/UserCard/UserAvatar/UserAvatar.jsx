import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

import styles from "./userAvatar.module.scss";

const UserAvatar = () => {
  return <Avatar size={100} icon={<UserOutlined />} />;
};

export default UserAvatar;
