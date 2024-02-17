import styles from './friendslist.module.css';
import FriendListItem from "./FriendListItem"

const FriendList = ({ friends }) => (
	<ul className={styles.common}>
	  {friends.map(friend => (
		<li key={friend.id} className={styles.li}>
		  <FriendListItem friends={friend} />
		</li>
	  ))}
	</ul>
  );

  export default FriendList;
