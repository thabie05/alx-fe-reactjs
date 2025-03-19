import { useParams } from 'react-router-dom';

function RecipesDetails() {
  const { id } = useParams();

  return (
    <div>
      <h1>Recipe Details</h1>
      <p>Recipe ID: {id}</p>
    </div>
  );
}

export default RecipesDetails;
