import React, { useEffect, useState } from "react";
import dice1 from "../assets/images/dice_1.png";
import dice2 from "../assets/images/dice_2.png";
import dice3 from "../assets/images/dice_3.png";
import dice4 from "../assets/images/dice_4.png";
import dice5 from "../assets/images/dice_5.png";
import dice6 from "../assets/images/dice_6.png";
import Spinner from "./Spinner";
import Rules from "./Rules";

export default function Play() {
  const motivationalQuotes = [
    "Failure is the stepping stone to success!",
    "Don't give up, try again!",
    "Every loss is a lesson, not a defeat!",
    "Great things take time, keep going!",
    "Believe in yourself and roll again!",
  ];

  const victoryQuotes = [
    "You did it! Hard work pays off! 🎉",
    "Winning is just the beginning, keep going! 🚀",
    "Champions keep playing until they get it right! 🏆",
    "Success is the sum of small efforts, repeated daily! 💪",
    "The only way to do great work is to love what you do! ❤️"
];

  const randomLoosingQuote = () => {
    return motivationalQuotes[
      Math.floor(Math.random() * motivationalQuotes.length)
    ];
  };

  const randomWinningQuote = () => {
    return victoryQuotes[
      Math.floor(Math.random() * victoryQuotes.length)
    ];
  };

  const [score, setScore] = useState(0);

  const [randomImages, setRandomImages] = useState(dice1);

  const [rulesIsClicked, setRulesIsClicked] = useState(false);

  const [numberIsSelect, setNumberIsSelect] = useState(null);

  const [loading, setLoading] = useState(false);

  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  const handleRulesClicked = () => {
    setRulesIsClicked(!rulesIsClicked);
  };

  const randomImagesHandler = () => {
    if (numberIsSelect == null) {
      alert("Please Select a Number First");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * diceImages.length);
      const image = diceImages[randomIndex];
      setRandomImages(image);

      const diceNumber = randomIndex + 1;
      if (diceNumber === numberIsSelect) {
        setScore((prevScore) => prevScore + numberIsSelect);
      } else {
        setScore((prevScore) => prevScore - 2);
      }
      setLoading(false);
      setNumberIsSelect(null);
    }, 500);
  };

  const handleNumberIsSelect = (number) => {
    setNumberIsSelect(number);
  };

  useEffect(() => {
    randomImagesHandler;
  }, []);

  const numbers = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-screen h-screen">
      {score <= -10 && (
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="absolute w-screen h-screen bg-black opacity-50 backdrop-blur-3xl"></div>

          <div className="relative flex flex-col w-[80%] h-[80%] bg-gray-200 items-center justify-center rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Game Over</h1>
            <p className="text-lg  mt-4">Your Total Point: {score}</p>
            <p className="text-xl font-semibold">{randomLoosingQuote()}</p>
            <button
              className="bg-black px-10 cursor-pointer py-1 text-white font-semibold rounded-md mt-10"
              onClick={() => setScore(0)}
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {score >= 20 && (
        <div className="absolute w-full h-full flex items-center justify-center">
          <div className="absolute w-screen h-screen bg-black opacity-50 backdrop-blur-3xl"></div>

          <div className="relative flex flex-col w-[80%] h-[80%] bg-gray-200 items-center justify-center rounded-lg shadow-lg">
            <h1 className="text-4xl font-bold">Game Over</h1>
            <p className="text-lg  mt-4">Your Total Point: {score}</p>
            <p className="md:text-xl font-semibold">{randomWinningQuote()}</p>
            <button
              className="bg-black px-10 cursor-pointer py-1 text-white font-semibold rounded-md mt-10"
              onClick={() => setScore(0)}
            >
              Try Again
            </button>
          </div>
        </div>
      )}
      <div className="w-full">
        <div className="navbar flex flex-col-reverse gap-4 md:gap-0 md:flex-row w-full items-center h-1/4 p-10">
          <div className="score w-1/2 flex flex-col md:items-start items-center">
            <h1 className="text-8xl font-bold text-center">{score}</h1>
            <p className="text-xl font-semibold">Total Score</p>
          </div>
          <div className="numbers w-full md:w-1/2 h-full md:h-1/4 flex flex-col gap-2 items-end">
            <div className="flex justify-center items-center md:gap-6 gap-4">
              {numbers.map((number) => (
                <button
                  className={` md:w-16 md:h-16 w-10 h-10 border-2 flex cursor-pointer items-center justify-center text-xl font-bold border-black ${
                    numberIsSelect === number
                      ? "bg-black text-white"
                      : "hover:bg-gray-300"
                  }`}
                  key={number}
                  onClick={() => handleNumberIsSelect(number)}
                >
                  {number}
                </button>
              ))}
            </div>
            <p className="text-xl font-bold">Select Number</p>
          </div>
        </div>
        <div className="dice flex flex-col w-full gap-6 items-center">
          <div className="flex items-center flex-col">
            <button onClick={randomImagesHandler} className="cursor-pointer">
              {loading ? <Spinner /> : <img src={randomImages} alt="" />}
            </button>
            <p className="text-xl font-bold">Click on Dice to Roll</p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setScore(0)}
              className="bg-white border-2 border-black rounded-md px-12 py-1 font-semibold cursor-pointer"
            >
              Reset Score
            </button>
            <button
              onClick={handleRulesClicked}
              className="bg-black text-white rounded-md px-12 py-1.5 font-semibold"
            >
              {rulesIsClicked ? "Hide Rules" : "Show Rules"}
            </button>
          </div>
          {rulesIsClicked && (
            <div>
              <Rules />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
