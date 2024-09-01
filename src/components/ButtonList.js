import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Live",
  "Gaming",
  "Movies",
  "Series",
  "Cricket",
  "Songs",
  "Shopping",
  "Smartphones",
  "Tablets",
  "Fitness",
  "Diet",
  "Cooking",
  "WFH",
  "WFO",
  "Google",
  "Facebook",
  "Microsoft",
  "OpenAI",
];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll w-[90%]">
      {list.map((btn, index) => (
        <Button name={btn} key={index} />
      ))}
    </div>
  );
};

export default ButtonList;
