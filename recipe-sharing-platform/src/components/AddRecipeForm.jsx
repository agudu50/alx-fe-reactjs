import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  // -----------------------------
  // VALIDATION FUNCTION (required)
  // -----------------------------
  const validate = () => {
    let formErrors = {};

    if (!title.trim()) formErrors.title = "Title is required.";

    if (!ingredients.trim())
      formErrors.ingredients = "Ingredients are required.";
    else if (ingredients.split(",").length < 2)
      formErrors.ingredients =
        "Please list at least 2 ingredients separated by commas.";

    if (!steps.trim()) formErrors.steps = "Preparation steps are required.";

    return formErrors;
  };

  // -----------------------------
  // FORM SUBMISSION
  // -----------------------------
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(); // 👈 using the validate function

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    console.log({ title, ingredients, steps });

    // Clear after submit
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center text-cyan-800">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title */}
        <div>
          <label className="block mb-1 font-semibold">Recipe Title</label>
          <input
            type="text"
            className="w-full border rounded-md p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block mb-1 font-semibold">
            Ingredients (comma separated)
          </label>
          <textarea
            className="w-full border rounded-md p-2"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block mb-1 font-semibold">Preparation Steps</label>
          <textarea
            className="w-full border rounded-md p-2"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-2 rounded-lg hover:bg-cyan-700"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
