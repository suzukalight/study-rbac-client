import React, { useState, useContext, createContext, useCallback, useMemo } from 'react';

const visitor: User = {
  id: '',
  email: '',
  role: 'visitor',
};

interface AuthContextValues {
  authenticated: boolean;
  user: User;
  accessToken: string;
  login: (email: string, password: string, options: Object) => void;
  logout: Function;
}

const AuthContext = createContext<AuthContextValues>({
  authenticated: false,
  user: visitor,
  accessToken: '',
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<User>(visitor);
  const [accessToken, setAccessToken] = useState('');

  const login = useCallback(
    (email, password, { id, role }) => {
      setAuthenticated(true);
      setUser({ id, email, role });
      setAccessToken('1234567890abcdef1234567890abcdef');
    },
    [setAuthenticated, setUser, setAccessToken],
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUser(visitor);
    setAccessToken('');
  }, [setAuthenticated, setUser, setAccessToken]);

  const contextValue = useMemo(() => ({ authenticated, user, accessToken, login, logout }), [
    authenticated,
    user,
    accessToken,
    login,
    logout,
  ]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const { authenticated, user, accessToken, login, logout } = useContext(AuthContext);

  return {
    authenticated,
    user,
    accessToken,
    login,
    logout,
  };
};
