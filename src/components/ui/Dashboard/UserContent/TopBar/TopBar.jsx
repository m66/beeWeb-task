import { Button, Select } from "antd";

import styles from "./topBar.module.scss";

const { Option } = Select;

const TopBar = ({ handleAdd, onSort }) => (
  <div className={styles.topBar}>
    <Select
      onChange={onSort}
      defaultValue="normal"
      style={{
        width: 120,
      }}
    >
      <Option value="normal">Normal</Option>
      <Option value="reverse">Reverse</Option>
    </Select>
    <Button onClick={handleAdd}>+</Button>
  </div>
);

export default TopBar;
