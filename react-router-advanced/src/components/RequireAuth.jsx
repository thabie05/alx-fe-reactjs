import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export const RequireAuth = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};