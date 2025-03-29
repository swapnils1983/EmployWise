import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import UserList from './components/Users/UserList';
import EditUser from './components/Users/EditUser';
import { useContext } from 'react';
import AuthProvider, { AuthContext } from './context/AuthContext';

function App() {
  return (

    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/users" element={<PrivateRoute><UserList /></PrivateRoute>} />
      <Route path="/users/edit/:id" element={<PrivateRoute><EditUser /></PrivateRoute>} />
      <Route path="/" element={<Navigate to="/login" />} />
    </Routes>
  );
}

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext);
  return token ? children : <Navigate to="/login" />;
}

export default App;