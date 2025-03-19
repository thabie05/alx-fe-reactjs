import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const HomePage = () => {
    const [recipedata, setRecipeData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
        .then(response => response.json())
        .then(data => setRecipeData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);

return(
    <div className="grid gap-3
    sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {recipedata.map((recipe) => (
            <div className="
            bg-gray-200 
            p-3 m-5
            rounded-lg shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg" 
            key={recipe.id}>
                <h1 className="text-gray-700 text-2xl font-bold mb-3 ">{recipe.title}</h1>
                <img className="rounded-full shadow-md" src={recipe.image} alt={recipe.title} />
                <p className="text-gray-700 text-base mb-3 mt-3">{recipe.summary}</p>
                <Link
  to={`/recipe/${recipe.id}`}
  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
>
  View Recipe →
</Link>
            </div>
        ))}
    </div>
)
};
export default HomePage;