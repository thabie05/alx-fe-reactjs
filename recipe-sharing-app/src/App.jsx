import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <nav>
          <Link to="/" className="brand">
            <h1>🍳 Recipe Hub</h1>
          </Link>
          <div className="nav-links">
            <Link to="/favorites">Favorites</Link>
            <Link to="/recommendations">Recommendations</Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={
            <>
              <SearchBar />
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
        </Routes>
      </div>
    </Router>
  );
}