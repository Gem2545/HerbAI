// src/HomePage.js

import React from "react";
import "./HomePage.css";

function HomePage() {
  return (
    <div>
      <header className="welcome-header">
        <h1> Welcome to HerbQuest </h1>{" "}
        <p>
          {" "}
          Nurturing Knowledge and Wisdom Through the Power of Visual Insight{" "}
        </p>{" "}
      </header>{" "}
      <div className="container">
        <div className="column">
          <h2> Herb Safety </h2>{" "}
          <p>
            {" "}
            Some herbs possess the potential to be harmful, and unfortunately,
            not everyone is fully cognizant of the inherent risks associated
            with their usage.{" "}
          </p>{" "}
        </div>{" "}
        <div className="column">
          <h2> Herb Identification </h2>{" "}
          <p>
            {" "}
            Many individuals express an interest in cultivating herbs but
            struggle with precise herb identification.{" "}
          </p>{" "}
        </div>{" "}
        <div className="column">
          <h2> Herb Variants </h2>{" "}
          <p>
            {" "}
            Even if you 're familiar with a particular herb, it' s often
            difficult to distinguish between the different available varieties.{" "}
          </p>{" "}
        </div>{" "}
      </div>{" "}
      <footer className="footer">
        {" "}
        🍆 copy; 2023 HerbQuest - Herbal Awareness.All rights reserved.{" "}
      </footer>{" "}
    </div>
  );
}

export default HomePage;
