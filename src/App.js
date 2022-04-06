/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import './styles/App.css';

// eslint-disable-next-line require-jsdoc
function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [colorArray, setColorArray] = useState({
    blockOne: {
      class: 'redBlock',
      scored: false,
    },
    blockTwo: {
      class: 'orangeBlock',
      scored: false,
    },
    blockThree: {
      class: 'yellowBlock',
      scored: false,
    },
    blockFour: {
      class: 'greenBlock',
      scored: false,
    },
    blockFive: {
      class: 'blueBlock',
      scored: false,
    },
    blockSix: {
      class: 'purpleBlock',
      scored: false,
    },
    blockSeven: {
      class: 'blackBlock',
      scored: false,
    },
    blockEight: {
      class: 'whiteBlock',
      scored: false,
    },
  });

  // random 1-8
  const randomNumber = () => {
    const random = Math.floor(Math.random() * 8);
    console.log(random);
  };

  // click box
  const clickedBox = (e) => {
    const boxClass = e.target.className;
    console.log('clicked ' + boxClass + ' box');
    if (boxClass == colorArray.blockOne.class && colorArray.blockOne.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockOne: {
          ...prevState.blockOne,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else if (boxClass == colorArray.blockTwo.class && colorArray.blockTwo.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockTwo: {
          ...prevState.blockTwo,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else if (boxClass == colorArray.blockThree.class && colorArray.blockThree.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockThree: {
          ...prevState.blockThree,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else if (boxClass == colorArray.blockFour.class && colorArray.blockFour.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockFour: {
          ...prevState.blockFour,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else if (boxClass == colorArray.blockFive.class && colorArray.blockFive.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockFive: {
          ...prevState.blockFive,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else if (boxClass == colorArray.blockSix.class && colorArray.blockSix.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockSix: {
          ...prevState.blockSix,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else if (boxClass == colorArray.blockSeven.class && colorArray.blockSeven.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockSeven: {
          ...prevState.blockSeven,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else if (boxClass == colorArray.blockEight.class && colorArray.blockEight.scored === false) {
      setColorArray((prevState) => ({
        ...prevState,
        blockEight: {
          ...prevState.blockEight,
          scored: true,
        },
      }));
      setScore(score + 1);
    } else {
      console.log('game reset');
      if (score > highScore) {
        setHighScore(score);
      }
      setScore(0);
      setColorArray((prevState) => ({
        blockOne: {
          ...prevState.blockOne,
          scored: false,
        },
        blockTwo: {
          ...prevState.blockTwo,
          scored: false,
        },
        blockThree: {
          ...prevState.blockThree,
          scored: false,
        },
        blockFour: {
          ...prevState.blockFour,
          scored: false,
        },
        blockFive: {
          ...prevState.blockFive,
          scored: false,
        },
        blockSix: {
          ...prevState.blockSix,
          scored: false,
        },
        blockSeven: {
          ...prevState.blockSeven,
          scored: false,
        },
        blockEight: {
          ...prevState.blockEight,
          scored: false,
        },
      }));
    }
  };

  return (
    <div className="App">
      <header>Memory Game</header>
      <div className='scoresContainer'>
        <div className='currentScoreBox'>
          Current Score: <div className='currentScore'>{score}</div>
        </div>
        <div className='highScoreBox'>
            High Score: <div className='highScore'>{highScore}</div>
        </div>
      </div>
      <div className='blockContainer'>
        <div
          className={colorArray.blockOne.class}
          onClick={clickedBox}
        ></div>
        <div
          className={colorArray.blockTwo.class}
          onClick={clickedBox}
        ></div>
        <div
          className={colorArray.blockThree.class}
          onClick={clickedBox}
        ></div>
        <div
          className={colorArray.blockFour.class}
          onClick={clickedBox}
        ></div>
        <div
          className={colorArray.blockFive.class}
          onClick={clickedBox}
        ></div>
        <div
          className={colorArray.blockSix.class}
          onClick={clickedBox}
        ></div>
        <div
          className={colorArray.blockSeven.class}
          onClick={clickedBox}
        ></div>
        <div
          className={colorArray.blockEight.class}
          onClick={clickedBox}
        ></div>
      </ div>

    </div>
  );
}

export default App;
