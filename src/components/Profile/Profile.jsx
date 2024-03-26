// Profile.jsx
import css from '../Profile/Profile.module.css';
import PropTypes from 'prop-types';


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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: 
    PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired

};

export default Profile;
