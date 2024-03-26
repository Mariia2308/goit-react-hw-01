// Profile.jsx
import css from '../Profile/Profile.module.css';


const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div >
      <div className={css.profileMain}>
        <img src={avatar} alt={username} className={css.profileImage} />
        <p className={css.profileName}>
          {username}</p>
        <p className={css.profileTag}>@{tag}</p>
        <p className={css.profileLocation}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileLabel}>Followers</span>
          <span className={css.profileQuant}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileLabel}>Views</span>
          <span className={css.profileQuant}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileLabel}>Likes</span>
          <span className={css.profileQuant}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};



export default Profile;
