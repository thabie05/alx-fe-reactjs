import { Link, Outlet } from 'react-router-dom';
import { useAuth } from './components/AuthContext';

export default function Profile() {
  const { logout } = useAuth();

  return (
    <div className="profile-layout">
      <h2>Profile Page</h2>
      <button onClick={logout}>Logout</button>
      
      <nav className="profile-nav">
        <Link to="details">Details</Link> | 
        <Link to="settings">Settings</Link>
      </nav>

      {/* Outlet for nested routes */}
      <div className="profile-content">
        <Outlet />
      </div>
    </div>
  );
}