import { useAuth } from './components/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}