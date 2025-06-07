import React from 'react';
import RecipeCard from '../components/RecipeCard';

function Fav() {
  const favroute = JSON.parse(localStorage.getItem("fav")) || [];

  return (
    <div className="min-h-screen bg-[#6A2C70] py-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-[#F9ED69] mb-4">
          ⭐ Your Favorite Recipes
        </h1>
        <p className="text-center text-[#F08A5D] text-lg mb-12 italic max-w-xl mx-auto">
          "Good food is the foundation of genuine happiness. Keep your favorites close and your kitchen inspired!" 🍳✨
        </p>

        {favroute.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {favroute.map((recipies) => (
              <RecipeCard key={recipies.id} recipies={recipies} />
            ))}
          </div>
        ) : (
          <p className="text-center text-[#F08A5D] text-xl font-semibold mt-12">
            🤔 No favorites yet! Add some delicious recipes to your collection.
          </p>
        )}
      </div>
    </div>
  );
}

export default Fav;
