const AddRecipeForm = () => {
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
                <label className="text-gray-700 text-2xl font-bold mb-3 ">Recipe<input className="bg-gray-300 text-gray-700" type="text" placeholder="Title" name="title"/></label>
                <label>ingredients<textarea placeholder="ingredients" name="ingredients"/></label>
                <label>instructions<textarea placeholder="instructions" name="instructions"/></label>
                <button className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300" type="submit">Submit</button>
            </form>
        </div>
    )
}
export default AddRecipeForm;