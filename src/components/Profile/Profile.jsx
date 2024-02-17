import styles from './Profile.module.css';

const Profile = ({name, tag, location, avatar, stats }) => 
   <div className={styles.common}>
  <div className={styles.description}>
  <img src={avatar} alt={name} className={styles.avatar}/>
    <p className={styles.name}> {name} </p>
    <p className={styles.tag}> @{tag} </p>
    <p className={styles.location}> {location} </p>
  </div>

  <ul className={styles.list}>
    <li className={styles.li}>
      <span className={styles.label}> Followers </span>
      <span className={styles.number}> {stats.followers}  </span>
    </li>
    <li className={styles.li}>
      <span className={styles.label}> Views </span>
      <span className={styles.number}> {stats.views} </span>
    </li>
    <li className={styles.li}>
      <span className={styles.label}> Likes </span>
      <span className={styles.number}> {stats.likes} </span>
    </li>
  </ul>
</div>


Profile.defaultProps = {
  
  name: 'Petra Marica',
  tag: '@pmarica',
  location: 'Salvador, Brasil',
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: {
    followers: 1000,
    views: 2000,
    likes: 3000,
  },
};

export default Profile;

