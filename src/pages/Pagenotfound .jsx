import React from 'react';
import './Pagenotfound.css'; // Import the CSS animation

function Pagenotfound() {
  return (
    <div className="min-h-screen bg-[#6A2C70] flex items-center justify-center text-white">
      <div className="text-center p-6">
        <h1 className="text-5xl font-bold text-[#F9ED69] mb-4">Oops!</h1>
        <p className="typing-animation text-2xl text-[#F08A5D] font-medium whitespace-nowrap overflow-hidden border-r-4 border-[#F08A5D]">
          Page Not Found...
        </p>
      </div>
    </div>
  );
}

export default Pagenotfound;
