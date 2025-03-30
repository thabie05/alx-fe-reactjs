import React from 'react';
import UserCard from '../UserCard/UserCard';

const UserList = ({ users }) => {
  return (
    <div className="results">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;