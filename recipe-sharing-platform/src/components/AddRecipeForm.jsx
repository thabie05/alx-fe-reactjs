import { useState } from "react";

const AddRecipeForm = () => {

    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value);
        } else if (e.target.name === 'ingredients') {
            setIngredients(e.target.value);
        } else {
            setInstructions(e.target.value);
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        const title = e.target.elements.title.value;
        const ingredients = e.target.elements.ingredients.value;
        const instructions = e.target.elements.instructions.value;
        console.log(title, ingredients, instructions);
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label className="text-gray-700 text-2xl font-bold mb-3 ">Recipe<input onChange={handleChange} className="bg-gray-300 text-gray-700" type="text" placeholder="Title" name="title"/></label>
                <label>ingredients<textarea onChange={handleChange} placeholder="ingredients" name="ingredients"/></label>
                <label>instructions<textarea onChange={handleChange} placeholder="instructions" name="instructions"/></label>
                <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddRecipeForm;