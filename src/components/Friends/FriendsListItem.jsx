
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


export default FriendsListItem;
