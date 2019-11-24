import React, { useState, useContext, createContext, useCallback, useMemo } from 'react';

type User = Object | null;

interface AuthContextValues {
  authenticated: boolean;
  user: User;
  accessToken: string;
  login: Function;
  logout: Function;
}

const AuthContext = createContext<AuthContextValues>({
  authenticated: false,
  user: null,
  accessToken: '',
  login: () => {},
  logout: () => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<User>(null);
  const [accessToken, setAccessToken] = useState('');

  const login = useCallback(
    ({ email, password, role }) => {
      setAuthenticated(true);
      setUser({
        email,
        role,
      });
      setAccessToken('1234567890abcdef1234567890abcdef');
    },
    [setAuthenticated, setUser, setAccessToken],
  );

  const logout = useCallback(() => {
    setAuthenticated(false);
    setUser(null);
    setAccessToken('');
  }, [setAuthenticated, setUser, setAccessToken]);

  const contextValue = useMemo(() => ({ authenticated, user, accessToken, login, logout }), [
    authenticated,
    user,
    accessToken,
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
