import SlateEditor from "../../../SlateEditor/SlateEditor";
import styles from "./textList.module.scss";

const TextList = ({ blocks, onChange, deleteBlock }) => {
  return (
    <div className={styles.textList}>
      {blocks.map((block) => (
        <SlateEditor
          onChange={(val) => onChange(block.id, val)}
          deleteBlock={deleteBlock}
          blockId={block.id}
          initialValue={block.text}
          key={block.id}
        />
      ))}
    </div>
  );
};

export default TextList;
