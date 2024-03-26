import FriendListItem from './FriendsListItem';
import css from '../Friends/Friends.module.css';
const FriendsList = ({ friends }) => {
  return (
    <ul className= {css.wrapper}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
 
export default FriendsList;