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
            <div className="
            taxt-white
            bg-green-600 
            w-60 p-3 m-3 
            bg-gradient-to-r 
            from-red-500 h-50 
            border-dotted 
            rounded-xl 
            transition delay-150 duration-300 
            ease-in-out hover:-translate-y-1 
            hover:scale-110 shadow-xl" 
            key={recipe.id}>
                <h1 className="text-white ">{recipe.title}</h1>
                <img src={recipe.image} alt={recipe.title} />
                <p className="text-white">{recipe.summary}</p>
            </div>
        ))}
    </div>
)
};
export default HomePage;