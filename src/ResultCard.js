import React from "react";
import "./MoodQuiz.css";

const ResultCard = ({ dish, onRestart }) => {
  // Mapping dish names to exact filenames in public/
  const dishImageMap = {
    cheesecake: "/cheesecake.jpg",
    mojito: "/mojito.jpg",
    mousse: "/mousse.jpg",
    noodles: "/noodles.jpg",
    ravioli: "/ravioli.jpg",
    salmon: "/Salmon.png",
    sushi: "/sushi.jpg",
    biriyani: "/biriyani.jpeg",
    lasagna: "/lasagna.jpeg",
    ramen: "/ramen.jpeg",
    lamb: "/lamb.jpeg",
    pasta: "/pasta-primavera.jpeg",
    pizza: "/pizza.jpeg",
  };

  // Fallback image if no match is found
  const imageSrc = dishImageMap[dish.toLowerCase()] || "/default-dish.jpg";

  return (
    <div className="result-card">
      <h2>Your Perfect Match!</h2>
      <img
        src={imageSrc}
        alt={dish}
        className="result-image"
      />
      <p className="dish-name">{dish}</p>
      <span className="recommendation-badge">🔥 Hot Pick!</span>
      <button className="restart-btn" onClick={onRestart}>
        Try Again
      </button>
    </div>
  );
};

export default ResultCard;

