import { useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import { recipeContext } from "../context/RecipieContext";

function Recipes() {
  const { data } = useContext(recipeContext);

  return (
    <div className="min-h-screen bg-[#6A2C70] py-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#F9ED69] mb-12 leading-snug">
          🍽️ Your Delicious Creations
        </h1>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {data.map((recipe) => (
              <RecipeCard key={recipe.id} recipies={recipe} />
            ))}
          </div>
        ) : (
          <div className="text-center text-[#F08A5D] text-xl font-semibold mt-12">
            🤔 No recipes yet! Start sharing your culinary masterpieces 🍳✨
          </div>
        )}
      </div>
    </div>
  );
}

export default Recipes;
