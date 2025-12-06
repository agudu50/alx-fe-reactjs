import { useState, useEffect } from "react";
import data from "../data.json";
import chickenImage from "../assets/chicken.jpg";
import pastaImage from "../assets/pasta.jpg";

const HomePage = () => {
    const [recipes, setRecipies] = useState([]);

    useEffect(() => {
        setRecipies(data);
    }, []);

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>

            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {recipes.map((recipe) =>(
                    <div 
                    key={recipe.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    role = "article"
                    aria-label= {recipe.title}
                    >
                     <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />

                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                                <p className="text-gray-600 text-sm">{recipe.summary}</p>
                                     <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                                     View Recipe
                                      </button>
                         </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;