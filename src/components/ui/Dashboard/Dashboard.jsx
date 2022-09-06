import { auth } from "../../../firebase-config";
import { onAuthStateChanged, signOut } from "firebase/auth";

import Sidebar from "./Sidebar/Sidebar";
import UserContent from "./UserContent/UserContent";

import styles from "./dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <UserContent />
    </div>
  );
};

export default Dashboard;
