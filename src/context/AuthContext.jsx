import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const login = (newToken) => {
    localStorage.setItem('token', newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken('');
    navigate('/login');
  };

  useEffect(() => {
    if (!token && window.location.pathname !== '/login') {
      navigate('/login');
    }
  }, [token]);

  return <AuthContext.Provider value={{
    login,
    logout,
    token
  }}>
    {children}
  </AuthContext.Provider>
}