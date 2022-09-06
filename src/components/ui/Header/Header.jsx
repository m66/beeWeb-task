import { useEffect } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import {
  collection,
  getDocs,
} from "firebase/firestore";

import { setUser, selectUser } from "../../../userSlice";
import { setBlocks } from "../../../blockSlice";
import { auth, db } from "../../../firebase-config";

import { activeStyle } from "../../../constants/const";

import styles from "./header.module.scss";

const Header = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const blocksCollectionRef = collection(db, "blocks");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      const user = currentUser?.toJSON();
      dispatch(setUser(user));
      //go main page
      navigate("/");
    });

    const getBlocks = async () => {
      const data = await getDocs(blocksCollectionRef);
      dispatch(setBlocks(
        data.docs
        .map((doc) => ({ ...doc.data(), id: doc.id }))
        .map(({ text, id }) => ({
            text: text.map(item=> ({
               type: 'paragraph',
               children: [
                { text: item },
              ],
            })),
            id,
        }))
      ));
    };

    getBlocks();
  }, []);

  async function handleLogout() {
    //logout
    signOut(auth);
  }

  return (
    <header className={styles.header}>
      {user ? (
        <Button onClick={handleLogout}>Logout</Button>
      ) : (
        <>
          <NavLink
            to="login"
            className={styles.navBtn}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Login
          </NavLink>
          <NavLink
            to="register"
            className={styles.navBtn}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Register
          </NavLink>
        </>
      )}
    </header>
  );
};

export default Header;