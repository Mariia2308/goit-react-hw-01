// App.jsx

import Profile from './Profile/Profile'; 
import userData from "./Profile/userData.json";

import FriendList from './Friends/FriendsList'
import friends from "./Friends/friendsData.json";

import TransactionHistory from './Transactions/TransactionHistory'
import trans from './Transactions/transactions.json'


export default function App(){
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends.friends} />
      <TransactionHistory items={trans.transactions} />
    </>

  );
}


