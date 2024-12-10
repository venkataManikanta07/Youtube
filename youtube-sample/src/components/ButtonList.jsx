import React from "react";
import ButtonComponent from "./ButtonComponent";

const ButtonList = () => {
  const buttonList = [
    "All",
    "Cricket",
    "Big Boss",
    "Music",
    "Trailers",
    "Games",
    "Chess",
    "Football",
    "Martial Arts",
    "Baseball",
    "Wickets",
    "Live",
    "Lofi",
    "Mixes",
  ];
  return (
    <div className="flex overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
      {buttonList.map((button) => (
        <ButtonComponent name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
