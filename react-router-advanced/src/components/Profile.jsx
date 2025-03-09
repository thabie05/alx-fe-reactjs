import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Profile Page</h1>
      <button onClick={logout}>Logout</button>
      <nav>
        <Link to="details">Details</Link> | 
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}