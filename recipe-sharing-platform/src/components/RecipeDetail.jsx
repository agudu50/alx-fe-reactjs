import {useParams} from 'react-router-dom';
import data from '../data.json';
import {useState, useEffect} from 'react';



const RecipeDetail = () => {
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch ("/data.json")
        .then((res) => res.json())
        .then((data) => {
            const found = data.find((item) => item.id === parseInt (id));
            setRecipe(found);
        });
        
    }, [id]);

    if (!recipe) {
        return <p className = "text-center text-gray-500">Loading...</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            {/* Recipe Title */}
            <h1 
            className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}
            </h1>

            {/* Recipe Image */}
            <img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full rounded-lg shadow-md mb-6"/>

            {/* Ingredients */}
            <div className= "bg-white p-6 rounded-lg shadow mb-6">
                <h2 className= "text-2xl font-semibold text-gray-700 mb-2">Ingredients</h2>
                <ul className = "list-disc ml-6 text-gray-600">
                    {recipe.ingredients?.map((item, i) =>(
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>

            {/* Instructions */}
            <div className = "bg-white p-6 rounded-lg shadow">
                <h2 className = "text-2xl font-semibold text-gray-700">Instructions</h2>
                <ol className = "list-decimal ml-6 text-gray-600 space-y-2">
                    {recipe.instructions?.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>

            </div>

        </div>
    );
}

export default RecipeDetail;