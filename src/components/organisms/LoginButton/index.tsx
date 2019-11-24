import React from 'react';

import { useAuth } from '../../contexts/Auth';

const Login = () => {
  const { authenticated, login, logout } = useAuth();

  if (authenticated)
    return (
      <button className="btn btn-sm btn-primary" onClick={() => logout()}>
        Logout
      </button>
    );

  return (
    <div>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => login('one@test.com', 'password', { id: '1', role: 'writer' })}
      >
        Writer 1 Login
      </button>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => login('two@test.com', 'password', { id: '2', role: 'writer' })}
      >
        Writer 2 Login
      </button>
      <button
        className="btn btn-sm btn-primary"
        onClick={() => login('admin@test.com', 'password', { id: '999', role: 'admin' })}
      >
        Admin Login
      </button>
    </div>
  );
};

export default Login;
