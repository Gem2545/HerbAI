import React from "react";
import "./HomePage.css";

function HomePage({ setActivePage }) {
  const handleTryNowClick = () => {
    setActivePage("service"); // Navigate to the "Services" page when "Try Now" is clicked
  };

  return (
    <div className="container">
      <main>
        <div className="intro">
          <h1> Welcome to HerbQuest </h1>{" "}
          <p>
            Nurturing Knowledge and Wisdom Through the Power of Visual Insight{" "}
          </p>{" "}
          <button onClick={handleTryNowClick}> Try Now </button>{" "}
        </div>{" "}
        <div className="content">
          <div className="column">
            <h2> Herb Safety </h2>{" "}
            <p>
              {" "}
              Some herbs can be harmful, and not everyone is aware of their
              risks.{" "}
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
              difficult to distinguish between the different available
              varieties.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </main>{" "}
      <footer className="footer">
        {" "}
        © copy; 2023 HerbQuest - Herbal Awareness.All rights reserved.{" "}
      </footer>{" "}
    </div>
  );
}

export default HomePage;
