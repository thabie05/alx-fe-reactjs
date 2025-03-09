// App.jsx
import { useState } from 'react'
import { Routes, Route, Link, Navigate, Outlet } from 'react-router-dom'

// Authentication context
const AuthContext = React.createContext()

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const login = () => setIsAuthenticated(true)
  const logout = () => setIsAuthenticated(false)

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/profile">Profile</Link> | 
        <Link to="/posts">Posts</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<Post />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>
        
        <Route path="*" element={<h2>404 Not Found</h2>} />
      </Routes>
    </AuthContext.Provider>
  )
}

// Protected Route Component
const ProtectedRoute = () => {
  const { isAuthenticated } = React.useContext(AuthContext)
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />
}

// Home Component
const Home = () => <h1>Home Page</h1>

// Login Component
const Login = () => {
  const { login } = React.useContext(AuthContext)
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={login}>Log In</button>
    </div>
  )
}

// Posts Component
const Posts = () => {
  const posts = [1, 2, 3]
  return (
    <div>
      <h1>Posts</h1>
      {posts.map(postId => (
        <div key={postId}>
          <Link to={`/posts/${postId}`}>Post {postId}</Link>
        </div>
      ))}
    </div>
  )
}

// Single Post Component (Dynamic Routing)
const Post = () => {
  const { postId } = useParams()
  return <h2>Post #{postId}</h2>
}

// Profile Components
const Profile = () => {
  const { logout } = React.useContext(AuthContext)
  return (
    <div>
      <h1>Profile Page</h1>
      <nav>
        <Link to="details">Details</Link> | 
        <Link to="settings">Settings</Link>
      </nav>
      <Outlet />
      <button onClick={logout}>Log Out</button>
    </div>
  )
}

const ProfileDetails = () => <h3>Profile Details</h3>
const ProfileSettings = () => <h3>Profile Settings</h3>