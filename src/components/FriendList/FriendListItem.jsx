
import styles from './friendslist.module.css';

const FriendListItem = ({  friends: { avatar, name, isOnline } }) => (

<div>
<img src={avatar} alt="Friends image" width="48" className={styles.img}/>
 <p className={styles.title}>{name}</p>
 <p className={isOnline === "true" ? styles.statusOn : styles.statusOff}>{isOnline === "true" ? "Online" : "Offline"}</p>
</div>
  );

  export default FriendListItem;