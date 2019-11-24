import React from 'react';

import Can from '../../atoms/Can';
import { useAuth } from '../../contexts/Auth';

const Profile: React.FC = () => {
  const { user } = useAuth();

  return (
    <Can role={user.role} perform="users:getSelf">
      <div>
        <h2>User Profile</h2>
        <ul>
          <li>ID: {user.id}</li>
          <li>Email: {user.email}</li>
          <li>Role: {user.role}</li>
        </ul>
      </div>
    </Can>
  );
};

export default Profile;
