import { Link } from "react-router-dom";

function RecipeCard({ recipies }) {
  const { id, title, image, chefName, description } = recipies;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      <Link to={`/recipes/details/${id}`} className="block h-full">
        {/* Image Container with fixed aspect ratio */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-2xl font-semibold text-[#6A2C70] mb-1">{title}</h2>
          <p className="text-sm text-[#B83B5E] mb-3 font-medium">By Chef {chefName}</p>
          <p className="text-sm text-gray-700 leading-relaxed">
            {description.slice(0, 90)}...
            <span className="text-[#F08A5D] font-semibold ml-1">more</span>
          </p>

          <button className="mt-4 inline-block bg-[#B83B5E] hover:bg-[#F08A5D] text-white py-1.5 px-4 rounded-lg text-sm font-medium transition duration-200">
            View Recipe
          </button>
        </div>
      </Link>
    </div>
  );
}

export default RecipeCard;
