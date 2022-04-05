import React from 'react';
import './styles/App.css';

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className="App">
      <header>Memory Game</header>
      <div className='mainContainer'>
        <div className='currentScore'>00</div>
        <div className='highScore'>99</div>

        <div className='blockContainer'>
          <div className='redBlock'></div>
          <div className='orangeBlock'></div>
          <div className='yellowBlock'></div>
          <div className='greenBlock'></div>
          <div className='blueBlock'></div>
          <div className='purpleBlock'></div>
          <div className='blackBlock'></div>
          <div className='whiteBlock'></div>
        </div>
      </div>
    </div>
  );
}

export default App;
