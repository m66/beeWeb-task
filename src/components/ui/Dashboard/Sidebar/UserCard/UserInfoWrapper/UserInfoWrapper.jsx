import { useSelector } from "react-redux";
import { selectUser } from "../../../../../../redux/userSlice";

import styles from "./userInfoWrapper.module.scss";

const UserInfoWrapper = () => {
  const user = useSelector(selectUser);

  return (
    <div className={styles.mt25}>
      <ul>
        <li>
          <span className={styles.infoTitle}>Mail:</span> {user.email}
        </li>
      </ul>
    </div>
  );
};

export default UserInfoWrapper;
