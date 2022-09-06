import UserAvatar from './UserAvatar/UserAvatar';
import UserInfoWrapper from './UserInfoWrapper/UserInfoWrapper';

import styles from './userCard.module.scss';

const UserCard = () => {
    return (
        <div className={styles.userCard}>
            <UserAvatar />
            <UserInfoWrapper />
        </div>
    )
}

export default UserCard;