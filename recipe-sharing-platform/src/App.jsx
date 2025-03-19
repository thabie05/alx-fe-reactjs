import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomePage from "./components/HomePage";
import RecipesDetails from './components/RecipesDetails';

function App() {
  const Navbar = () => {
    return (
      <nav className='mx-auto px-4 m-5 text-center space-x-4 text-2xl font-bold'>
        <Link className='text-blue-500 hover:text-blue-700' to="/">HomePage</Link>
        <Link className='text-blue-500 hover:text-blue-700' to="/Recipes">Recipes</Link>
        <Link className='text-blue-500 hover:text-blue-700' to="/RecipesDetails">Recipe Details</Link>
      </nav>
    )
  }
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RecipesDetails" element={<RecipesDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
