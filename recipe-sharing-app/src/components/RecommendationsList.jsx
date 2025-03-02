import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import useRecipeStore from '../store/recipeStore';

const RecommendationsList = () => {
  const { recommendations, generateRecommendations } = useRecipeStore();
  
  useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  return (
    <div className="recommendations-section">
      <div className="header">
        <h2>🍴 Recommended For You</h2>
        <button onClick={generateRecommendations} className="refresh-button">
          ↻ Refresh Recommendations
        </button>
      </div>
      {recommendations.length === 0 ? (
        <p>Start favoriting recipes to get personalized recommendations!</p>
      ) : (
        recommendations.map(recipe => (
          <div key={recipe.id} className="recipe-item recommendation">
            <Link to={`/recipes/${recipe.id}`}>
              <h3>{recipe.title}</h3>
              <p>{recipe.description.substring(0, 100)}...</p>
            </Link>
          </div>
        ))
      )}
    </div>
  );
};