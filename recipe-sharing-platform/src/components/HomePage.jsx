import { useEffect, useState } from "react";


const HomePage = () => {
    const [recipedata, setRecipeData] = useState([]);

    useEffect(() => {
        fetch("/data.json")
        .then(response => response.json())
        .then(data => setRecipeData(data));
    }, []);

return(
    <div>
        {recipedata.map((recipe) => (
            <div className="bg-blue-700 w-60 h-60 border-dotted rounded gap-3" key={recipe.id}>
                <h1>{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.summary}</p>
            </div>
        ))}
    </div>
)
};
export default HomePage;