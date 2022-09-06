import UserCard from './UserCard/UserCard';
import Settings from './Settings/Settings';

import styles from './sidebar.module.scss';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <UserCard />
            <Settings />
        </div>
    )
}

export default Sidebar;