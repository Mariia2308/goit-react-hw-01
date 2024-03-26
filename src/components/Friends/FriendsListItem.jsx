import PropTypes from 'prop-types';
import css from '../Friends/Friends.module.css';

const FriendsListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendsList}>
      <img src={avatar} alt={name} width="48" className={css.friendsImage}  />
      <p className={css.friendsName}>{name}</p>
      <span className={isOnline ? css.online : css.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsListItem;
