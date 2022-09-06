import SlateEditor from '../../../SlateEditor/SlateEditor';
import styles from './textList.module.scss';

const TextList = ({ blocks, onChange }) => {

    return (
        <div className={styles.textList}>
            {blocks.map((block) => (
                <SlateEditor
                    onChange={val => onChange(block.id, val)}
                    initialValue={block.text}
                    key={block.id}
                />
            ))}
        </div>
    )
}

export default TextList;