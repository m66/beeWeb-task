import { useSelector, useDispatch } from "react-redux";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { selectBlocks, setBlocks } from "../../../../redux/blockSlice";
import { db } from "../../../../firebase-config";
import TextList from "./TextList/TextList";
import TopBar from "./TopBar/TopBar";

import styles from "./userContent.module.scss";

const UserContent = () => {
  const blocks = useSelector(selectBlocks);
  const blocksCollectionRef = collection(db, "blocks");
  const dispatch = useDispatch();

  async function handleAdd() {
    const data = await addDoc(blocksCollectionRef, { text: [""] });
    dispatch(
      setBlocks([
        ...blocks,
        {
          id: data.id,
          text: [
            {
              type: "paragraph",
              children: [{ text: "" }],
            },
          ],
        },
      ])
    );
  }

  const updateBlock = async (id, text) => {
    const blockDoc = doc(db, "blocks", id);
    await updateDoc(blockDoc, {
      text,
    });

    dispatch(
      setBlocks(
        blocks.map((block) =>
          block.id === id
            ? {
                id,
                text: text.map((item) => ({
                  type: "paragraph",
                  children: [{ text: item }],
                })),
              }
            : block
        )
      )
    );
  };

  const deleteBlock = async (id) => {
    const blockDoc = doc(db, "blocks", id);
    await deleteDoc(blockDoc);
    dispatch(setBlocks(blocks.filter((block) => block.id !== id)));
  };

  const handleSort = () => {
    dispatch(setBlocks([...blocks].reverse()));
  };

  return (
    <div className={styles.userContent}>
      <TopBar onSort={handleSort} handleAdd={handleAdd} />
      <TextList
        onChange={updateBlock}
        blocks={blocks}
        deleteBlock={deleteBlock}
      />
    </div>
  );
};

export default UserContent;
