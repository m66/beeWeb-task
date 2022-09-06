import { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import { CloseOutlined } from "@ant-design/icons";

import styles from "./slateEditor.module.scss";

const SlateEditor = ({ initialValue, onChange, deleteBlock, blockId }) => {
  const [editor] = useState(() => withReact(createEditor()));
  const [value, setValue] = useState([]);

  function handleChange(val) {
    setValue(val);
  }

  function handleBlur() {
    onChange(value.map(({ children: [{ text }] }) => text));
  }

  return (
    <div className={styles.slateEditor}>
      <CloseOutlined
        className={styles.deleteEditorBtn}
        onClick={() => deleteBlock(blockId)}
      />
      <Slate editor={editor} value={initialValue} onChange={handleChange}>
        <Editable onBlur={handleBlur} />
      </Slate>
    </div>
  );
};

export default SlateEditor;
