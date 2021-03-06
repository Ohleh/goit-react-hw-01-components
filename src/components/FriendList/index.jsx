import propTypes from 'prop-types';
import FriendListItem from '../FriendListItem';
import cssFriendList from '../FriendList/FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={cssFriendList.friendList}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      avatar: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
    })
  ),
};

export default FriendList;
