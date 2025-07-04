import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen bg-cover bg-center flex flex-col items-center justify-center text-white" style={{ backgroundImage: `url('/images/background.jpg')` }}>
      <h1 className="text-5xl font-bold mb-4">Paradise Nursery</h1>
      <p className="text-xl max-w-xl text-center mb-6">Your one-stop shop for beautiful houseplants that make your space green and serene!</p>
      <button onClick={() => navigate('/products')} className="bg-green-600 hover:bg-green-700 px-6 py-2 rounded text-white text-lg">Get Started</button>
    </div>
  );
}

export default LandingPage;

