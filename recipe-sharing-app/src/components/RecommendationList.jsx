import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom';

const RecommendationList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations || []);

  if (recommendations.length === 0) {
    return (
      <div>
        <h2>Recommendations</h2>
        <p>No recommendations yet.</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Recommendations</h2>
      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: '10px' }}>
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationList;
