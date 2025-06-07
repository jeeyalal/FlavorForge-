import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#6A2C70] flex items-center justify-center px-4">
      <div className="text-center p-6 max-w-3xl animate-fadeIn">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#F9ED69] mb-6 leading-tight animate-pulse">
          Welcome to <span className="text-[#F08A5D]">FlavorForge</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white font-medium mb-8 max-w-xl mx-auto">
          Unleash your inner chef — discover, cook & share delicious recipes crafted with love and flavor.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("/create-recipies")}
            className="bg-[#F08A5D] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          >
            Share Your Own 🍲
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
