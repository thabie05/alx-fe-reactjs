import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import Post from './Post'
import { ProtectedRoute } from './ProtectedRoute'
import ProfileDetails from './ProfileDetails'
import ProfileSettings from './ProfileSettings'

function App() {
  return (
    <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/login">Login</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/posts/1">Post 1</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
            <Route index element={<ProfileDetails />} />
          </Route>
        </Route>
        {/* Added blog routes */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App