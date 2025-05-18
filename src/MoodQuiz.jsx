import React, { useState } from "react";
import { moodQuestions } from "./moodQuestions";
import QuizStep from "./QuizStep";
import ResultCard from "./ResultCard";
import "./MoodQuiz.css";

const MoodQuiz = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (option) => {
    const updatedAnswers = [...answers, option];
    setAnswers(updatedAnswers);
    if (currentStep < moodQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep("result");
    }
  };

  const getDishMatch = () => {
  const [mood, flavor, time, texture] = answers;

  // Match based on flavor first
  if (flavor.includes("Spicy")) return "ramen";
  if (flavor.includes("Umami")) return "biriyani";
  if (flavor.includes("Fresh")) return "mojito";
  if (flavor.includes("Drink")) return "mojito"; // handle typo/spaces

  // Mood based matching
  if (mood.includes("Excited")) return "pizza";
  if (mood.includes("Calm")) return "pasta";
  if (mood.includes("Bold")) return "lamb";
  if (mood.includes("Cozy")) return "lasagna";

  // Texture based
  if (texture.includes("Creamy")) return "mousse";
  if (texture.includes("Crunchy")) return "cheesecake";
  if (texture.includes("Juicy")) return "salmon";
  if (texture.includes("Cheesy")) return "ravioli";

  // Time based
  if (time.includes("Midnight")) return "noodles";
  if (time.includes("Breakfast")) return "cheesecake";

  return "sushi"; // fallback
};

  return (
    <div className="quiz-container">
    <h2 className="quiz-title">What Dish Matches Your Mood?</h2>
    {currentStep === "result" ? (
      <ResultCard
        dish={getDishMatch()}
        onRestart={() => {
          setAnswers([]);
          setCurrentStep(0);
        }}
      />
    ) : (
      <QuizStep data={moodQuestions[currentStep]} onAnswer={handleAnswer} />
    )}
  </div>

  );
};

export default MoodQuiz;