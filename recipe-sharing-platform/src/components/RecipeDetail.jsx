import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(res => res.json())
      .then(data => {
        const foundRecipe = data.find(r => r.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  if (!recipe) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg"
      />
      <p className="text-gray-600 mt-4 mb-6">{recipe.summary}</p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Ingredients</h2>
        <ul className="list-disc pl-5 space-y-2">
          {recipe.ingredients.map((ingredient, i) => (
            <li key={i} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-3">Instructions</h2>
        <ol className="list-decimal pl-5 space-y-3">
          {recipe.instructions.map((step, i) => (
            <li key={i} className="text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;