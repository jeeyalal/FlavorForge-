import { nanoid } from 'nanoid';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { recipeContext } from '../context/RecipieContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Create() {
    const { data, setdata } = useContext(recipeContext);
    const navigate = useNavigate()


    const {
        register,
        reset,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const submitHandler = (e) => {
        const newRecipe = { ...e, id: nanoid() };
        const updatedData = [...data, newRecipe];
        setdata(updatedData);
        localStorage.setItem("recipes", JSON.stringify(updatedData))
        toast.success('Recipe created succefully')
        navigate('/recipes')
        reset();
        // console.log('Saved Recipe:', newRecipe);
    };

    console.log(data)
    return (
        <div className="min-h-screen bg-[#6A2C70] py-10 px-5 flex items-center justify-center">
            <form
                onSubmit={handleSubmit(submitHandler)}
                className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md space-y-5"
            >
                <h2 className="text-3xl text-center font-bold text-[#B83B5E]">Create a Recipe</h2>

                {/* Image */}
                {/* <div>
                    <input
                        {...register('image', { required: 'Image URL is required' })}
                        type="url"
                        placeholder="Image URL"
                        className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                    />
                    {errors.image && <p className="text-red-600 text-sm mt-1">{errors.image.message}</p>}
                </div> */}
                <input
                    {...register('image', { required: 'Image URL is required' })}
                    type="text"  // use text here to accept any URL string
                    placeholder="Image URL"
                    className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                />


                {/* Title */}
                <div>
                    <input
                        {...register('title', { required: 'Title is required' })}
                        type="text"
                        placeholder="Title"
                        className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                    />
                    {errors.title && <p className="text-red-600 text-sm mt-1">{errors.title.message}</p>}
                </div>

                {/* Description */}
                <div>
                    <textarea
                        {...register('description', { required: 'Description is required' })}
                        placeholder="Description"
                        rows="3"
                        className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                    />
                    {errors.description && <p className="text-red-600 text-sm mt-1">{errors.description.message}</p>}
                </div>

                {/* Ingredients */}
                <div>
                    <textarea
                        {...register('ingredients', { required: 'Ingredients are required' })}
                        placeholder="Enter ingredients separated by commas (e.g., Tomato sauce, Cheese, Basil)"
                        rows="3"
                        className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                    />
                    {errors.ingredients && <p className="text-red-600 text-sm mt-1">{errors.ingredients.message}</p>}
                </div>


                {/* Instructions */}
                <div>
                    <textarea
                        {...register('instruction', { required: 'Instructions are required' })}
                        placeholder="Enter instructions separated by commas (e.g., Preheat oven, Spread sauce, Bake for 10 mins)"
                        rows="3"

                        className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                    />
                    {errors.instruction && <p className="text-red-600 text-sm mt-1">{errors.instruction.message}</p>}
                </div>


                {/* Category */}
                <div>
                    <select
                        {...register('category', { required: 'Please select a category' })}
                        className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                    >
                        <option value="">Select Category</option>
                        <option value="breakfast">Break-fast</option>
                        <option value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                    {errors.category && <p className="text-red-600 text-sm mt-1">{errors.category.message}</p>}
                </div>

                {/* Chef Name */}
                <div>
                    <input
                        {...register('chefName', { required: "Chef's name is required" })}
                        type="text"
                        placeholder="Chef's Name"
                        className="w-full border border-[#B83B5E] p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#F08A5D]"
                    />
                    {errors.chefName && <p className="text-red-600 text-sm mt-1">{errors.chefName.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#F08A5D] hover:bg-[#B83B5E] text-white font-bold py-3 rounded transition-colors duration-300"
                >
                    Save Recipe
                </button>
            </form>
        </div>
    );
}

export default Create;
