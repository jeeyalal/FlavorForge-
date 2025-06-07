import React from 'react';

function About() {
  return (
    <div className="min-h-screen bg-[#6A2C70] text-white flex items-center justify-center p-6">
      <div className="max-w-3xl bg-white text-[#6A2C70] rounded-xl shadow-lg p-8 space-y-6 text-center">
        <h1 className="text-4xl font-bold text-[#F9ED69]">About FlavorForge 🍽️</h1>

        <p className="text-lg leading-relaxed text-[#444]">
          Welcome to <span className="font-semibold text-[#F08A5D]">FlavorForge</span> — your ultimate digital cookbook and culinary playground! Whether you’re a home cook or a gourmet chef, our app is designed to help you:
        </p>

        <ul className="list-disc text-left list-inside text-[#333] space-y-2">
          <li><strong>📝 Save Recipes:</strong> Add your own personalized dishes to your recipe vault.</li>
          <li><strong>❤️ Mark Favorites:</strong> Quickly access your go-to meals by favoriting them.</li>
          <li><strong>🧑‍🍳 Share the Craft:</strong> Store chef names and notes for future reference.</li>
          <li><strong>📱 Use Anywhere:</strong> Enjoy a responsive design across all your devices.</li>
        </ul>

        <p className="text-md text-[#6A2C70] font-medium">
          Built with 💜 using React and Tailwind CSS — crafted with love for food and code.
        </p>

        <p className="text-sm text-[#6A2C70] font-semibold mt-4">
          Created by Harsh Anita Mishra
        </p>
      </div>
    </div>
  );
}

export default About;
