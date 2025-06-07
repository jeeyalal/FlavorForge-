import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { recipeContext } from '../context/RecipieContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import '../pages/SingleRecipes.css';

function SingleRecipes() {
    const { data, setdata } = useContext(recipeContext);
    const param = useParams();
    const recipe = data.find((e) => String(param.id) === String(e.id));

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const submitHandler = (formData) => {
        const index = data.findIndex((e) => String(param.id) === String(e.id));
        const copydata = [...data];
        copydata[index] = { ...copydata[index], ...formData };
        setdata(copydata);
        localStorage.setItem("recipes", JSON.stringify(copydata));
        toast.success('Recipe updated successfully!');
    };

    const deleteHandler = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this recipe?");
    if (confirmDelete) {
        // Remove from main recipe list
        const filterData = data.filter((e) => String(e.id) !== String(param.id));
        setdata(filterData);
        localStorage.setItem("recipes", JSON.stringify(filterData));

        // Also remove from favorites list
        const updatedFav = favroute.filter((f) => String(f.id) !== String(param.id));
        setfavroute(updatedFav);
        localStorage.setItem("fav", JSON.stringify(updatedFav));

        toast.success("Recipe deleted successfully!");
        navigate("/recipes");
    }
};


    const [favroute, setfavroute] = useState(JSON.parse(localStorage.getItem("fav")) || []);

    const favHandler = function () {
        const copyfav = [...favroute];
        copyfav.push(recipe);
        setfavroute(copyfav);
        localStorage.setItem("fav", JSON.stringify(copyfav));
        toast.success("Added to favorites!");
    };

    const unfavHandler = function () {
        const filterfav = favroute.filter((f) => f.id !== recipe?.id);
        setfavroute(filterfav);
        localStorage.setItem("fav", JSON.stringify(filterfav));
        toast.info("Removed from favorites!");
    };

    useEffect(() => {}, [favroute]);

    return (
        <div className="single-recipe-container bg-[#6A2C70] min-h-screen p-6 relative">
            <button
                onClick={() => navigate('/recipes')}
                className="absolute top-4 left-4 bg-[#FF6F61] text-white px-4 py-2 rounded-lg shadow hover:bg-[#e4574e] transition duration-200"
            >
                🍽️ ← Back to all recipes 🍲
            </button>

            {recipe ? (
                <div className="recipe-wrapper mt-16 grid md:grid-cols-2 gap-6">
                    <div className="recipe-left bg-white shadow-lg p-6 rounded-xl relative">
                        {/* ❤️ Favorite Icon */}
                        <div className="absolute top-6 right-6 text-3xl cursor-pointer">
                            {favroute.find((f) => f.id === recipe?.id) ? (
                                <i
                                    onClick={unfavHandler}
                                    className="ri-heart-2-fill text-red-500 hover:scale-110 transition duration-200"
                                    title="Unfavorite"
                                ></i>
                            ) : (
                                <i
                                    onClick={favHandler}
                                    className="ri-heart-2-line text-gray-400 hover:text-red-400 hover:scale-110 transition duration-200"
                                    title="Favorite"
                                ></i>
                            )}
                        </div>

                        <h1 className="text-3xl font-bold text-[#6A2C70] mb-4">{recipe.title}</h1>
                        <img
                            src={recipe.image}
                            alt="Recipe"
                            className="w-full h-60 object-cover rounded-lg mb-4"
                        />
                        <h2 className="text-xl font-semibold text-[#B83B5E] mb-2">By: {recipe.chefName}</h2>
                        <p className="text-gray-700 text-base mb-4">{recipe.description}</p>
                        <div className="text-gray-700">
                            <h3 className="font-semibold mb-1">Ingredients:</h3>
                            <ul className="ml-6 list-disc list-inside space-y-1 text-gray-800">
                                {typeof recipe.ingredients === 'string'
                                    ? recipe.ingredients.split(',').map((item, index) => (
                                        <li key={index}>{item.trim()}</li>
                                    ))
                                    : <li>{recipe.ingredients}</li>}
                            </ul>

                            <h3 className="font-semibold mt-4 mb-1">Instructions:</h3>
                            <ol className="ml-6 list-decimal space-y-1 text-gray-800">
                                {Array.isArray(recipe.instruction)
                                    ? recipe.instruction.map((step, i) => <li key={i}>{step.trim?.() || step}</li>)
                                    : typeof recipe.instruction === 'string'
                                        ? recipe.instruction.split(',').map((step, i) => (
                                            <li key={i}>{step.trim()}</li>
                                        ))
                                        : <li>{String(recipe.instruction)}</li>}
                            </ol>
                        </div>
                    </div>

                    <div className="recipe-right bg-white shadow-lg p-6 rounded-xl">
                        <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
                            <h2 className="text-3xl text-center font-bold text-[#B83B5E]">Update Recipe</h2>

                            <label className="block font-semibold text-[#6A2C70]">Image URL</label>
                            <input
                                {...register('image', { required: 'Image URL is required' })}
                                type="url"
                                placeholder="Image URL"
                                defaultValue={recipe.image}
                                className="input-field"
                            />
                            {errors.image && <p className="error-text">{errors.image.message}</p>}

                            <label className="block font-semibold text-[#6A2C70]">Title</label>
                            <input
                                {...register('title', { required: 'Title is required' })}
                                type="text"
                                placeholder="Title"
                                defaultValue={recipe.title}
                                className="input-field"
                            />
                            {errors.title && <p className="error-text">{errors.title.message}</p>}

                            <label className="block font-semibold text-[#6A2C70]">Description</label>
                            <textarea
                                {...register('description', { required: 'Description is required' })}
                                placeholder="Description"
                                defaultValue={recipe.description}
                                rows="3"
                                className="input-field"
                            />
                            {errors.description && <p className="error-text">{errors.description.message}</p>}

                            <label className="block font-semibold text-[#6A2C70]">Ingredients (comma-separated)</label>
                            <textarea
                                {...register('ingredients', { required: 'Ingredients are required' })}
                                placeholder="e.g. Sugar, Flour, Eggs"
                                defaultValue={recipe.ingredients}
                                rows="3"
                                className="input-field"
                            />
                            {errors.ingredients && <p className="error-text">{errors.ingredients.message}</p>}

                            <label className="block font-semibold text-[#6A2C70]">Instructions (comma-separated)</label>
                            <textarea
                                {...register('instruction', { required: 'Instructions are required' })}
                                placeholder="e.g. Mix, Bake, Serve"
                                defaultValue={recipe.instruction}
                                rows="3"
                                className="input-field"
                            />
                            {errors.instruction && <p className="error-text">{errors.instruction.message}</p>}

                            <label className="block font-semibold text-[#6A2C70]">Category</label>
                            <select
                                {...register('category', { required: 'Please select a category' })}
                                defaultValue={recipe.category}
                                className="input-field"
                            >
                                <option value="">Select Category</option>
                                <option value="breakfast">Breakfast</option>
                                <option value="lunch">Lunch</option>
                                <option value="dinner">Dinner</option>
                            </select>
                            {errors.category && <p className="error-text">{errors.category.message}</p>}

                            <label className="block font-semibold text-[#6A2C70]">Chef's Name</label>
                            <input
                                {...register('chefName', { required: "Chef's name is required" })}
                                type="text"
                                placeholder="Chef's Name"
                                defaultValue={recipe.chefName}
                                className="input-field"
                            />
                            {errors.chefName && <p className="error-text">{errors.chefName.message}</p>}

                            <button type="submit" className="btn-submit">
                                Update Recipe
                            </button>

                            <button
                                onClick={deleteHandler}
                                type="button"
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full"
                            >
                                Delete Recipe
                            </button>
                        </form>
                    </div>
                </div>
            ) : (
                <div className="text-center text-2xl font-bold text-[#6A2C70]">Loading...</div>
            )}
        </div>
    );
}

export default SingleRecipes;


