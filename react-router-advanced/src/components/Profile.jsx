import { Outlet, Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <nav>
      <Routes>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
      </Routes>
      </nav>
      <Outlet />
    </div>
  )
}
export default Profile