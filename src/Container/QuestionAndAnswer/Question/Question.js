import React from "react";
import Auxiliary from "../../../Hoc/Auxiliary";
import "./Question.css";

const Question = (props) => {
  let difficulty = "Easy";
  let difficultyClass = "difficultyEasyCss";
  if (props.difficulty === "h") {
    difficulty = "Hard";
    difficultyClass = "difficultyHardCss";
  } else if (props.difficulty === "m") {
    difficulty = "Medium";
    difficultyClass = "difficultyMediumCss";
  }
  return (
    <Auxiliary>
      <div className="questionWithDifficulty">{props.quesData}</div>
      <div className={difficultyClass}>{difficulty}</div>
    </Auxiliary>
  );
};

export default Question;
