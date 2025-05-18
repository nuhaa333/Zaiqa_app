import React from "react";
import "./MoodQuiz.css";

const QuizStep = ({ data, onAnswer }) => {
  return (
    <div className="quiz-card scale-in">
      <h3>{data.question}</h3>
      <div className="options">
        {data.options.map((opt, i) => (
          <button key={i} className="option-btn" onClick={() => onAnswer(opt)}>
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizStep;