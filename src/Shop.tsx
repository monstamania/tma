import React from 'react';

interface ShopProps {
  score: number;
  setScore: (score: number) => void;
  multiplier: number;
  setMultiplier: (multiplier: number) => void;
}

const Shop: React.FC<ShopProps> = ({ score, setScore, multiplier, setMultiplier }) => {
  const levels = [1, 2, 5, 10]; // Example levels for multiclick
  const cost = [0, 10, 100, 1000]; // Example costs for each level

  const handleBuy = () => {
    const nextLevel = multiplier; // Current level of multiclick
    if (nextLevel < levels.length && score >= cost[nextLevel]) {
      setScore(score - cost[nextLevel]);
      setMultiplier(multiplier + 1);
    }
  };

  return (
    <div className="shop">
      <h2>Shop</h2>
      <button onClick={handleBuy} disabled={multiplier >= levels.length || score < cost[multiplier]}>
        Buy Multiclick (Cost: {multiplier < cost.length ? cost[multiplier] : 'N/A'} points)
      </button>
    </div>
  );
};

export default Shop;
