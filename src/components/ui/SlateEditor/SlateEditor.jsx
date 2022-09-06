import { useState } from "react";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";

import styles from "./slateEditor.module.scss";

const SlateEditor = ({ initialValue, onChange }) => {
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
      <Slate editor={editor} value={initialValue} onChange={handleChange}>
        <Editable onBlur={handleBlur} />
      </Slate>
    </div>
  );
};

export default SlateEditor;
