import { Routes, Route, Link } from 'react-router-dom';
import { RequireAuth } from './components/AuthContext.js/RequireAuth';
import Home from './components/AuthContext.js/Home';
import Login from './components/AuthContext.js/Login';
import Profile from './components/AuthContext.js/Profile';
import ProfileDetails from './components/AuthContext.js/ProfileDetails';
import ProfileSettings from './components/AuthContext.js/ProfileSettings';
import Post from './components/AuthContext.js/Post';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/posts/1">Post 1</Link> | 
        <Link to="/posts/2">Post 2</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/profile" element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </div>
  );
}