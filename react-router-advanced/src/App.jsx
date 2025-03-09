import { Routes, Route, Link } from 'react-router-dom';
import { RequireAuth } from './components/RequireAuth';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Post from './components/Post';

export default function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/posts/1">Post 1</Link> | 
        <Link to="/posts/2">Post 2</Link>
      </nav>

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts/:postId" element={<Post />} />

        {/* Protected routes */}
        <Route path="/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }>
          {/* Nested routes */}
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
      </Routes>
    </div>
  );
}