import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <ul>
          <li>
            <Link to="/profile/details">Details</Link>
          </li>
          <li>
            <Link to="/profile/settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}

export default Profile;