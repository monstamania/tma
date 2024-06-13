import React, { useState } from 'react';
import './App.css';
import background from './assets/background.png';
import coin from './assets/coin.png';
import monstaMania from './assets/monsta_mania.png';
import Shop from './Shop';

const App: React.FC = () => {
  const [score, setScore] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const handleClick = () => {
    setScore(score + multiplier);
  };

  return (
    <div className="app-container" style={{ backgroundImage: `url(${background})` }}>
      <div className="header">
        <img src={monstaMania} alt="Monsta Mania" />
      </div>
      <div className="powered-by">Powered by TON on Telegram</div>
      <div className="score">Score: {score}</div>
      <div className="coin-container">
        <div className="pulse"></div>
        <img src={coin} alt="Coin" className="coin" onClick={handleClick} />
      </div>
      <Shop score={score} setScore={setScore} multiplier={multiplier} setMultiplier={setMultiplier} />
    </div>
  );
};

export default App;
