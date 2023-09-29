import React from "react";
import "./NavBar.css"; // Import your CSS file

function NavBar({ setActivePage }) {
  return (
    <div className="navBarContainer">
      <div className="title"> HerbQuest </div>{" "}
      <div className="buttonContainer">
        <button className="navButton" onClick={() => setActivePage("home")}>
          Home{" "}
        </button>{" "}
        <button className="navButton" onClick={() => setActivePage("service")}>
          Service{" "}
        </button>{" "}
        <button className="navButton" onClick={() => setActivePage("aboutUs")}>
          About Us{" "}
        </button>{" "}
      </div>{" "}
    </div>
  );
}

export default NavBar;
