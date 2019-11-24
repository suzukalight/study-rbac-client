import React from 'react';

import LoginButton from '../../organisms/LoginButton';
import PostsList from '../../organisms/PostsList';
import Profile from '../../organisms/Profile';

const HomePage: React.FC = () => (
  <div>
    <h2>Welcome to React RBAC Tutorial.</h2>
    <LoginButton />
    <Profile />
    <PostsList />
  </div>
);

export default HomePage;
