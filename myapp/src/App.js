import React, { useState } from "react";
import HomePage from "./HomePage";

function NavBar({ setActivePage }) {
  const buttonStyle = {
    border: "none",
    background: "none",
    fontSize: "24px",
    margin: "0 10px",
    cursor: "pointer",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
  };

  const serviceStyle = {
    border: "none",
    background: "none",
    fontSize: "24px",
    margin: "0 10px",
    cursor: "pointer",
    color: "white",
    padding: "10px",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        width: "100%",
        height: "8%",
        background: "none",
      }}
    >
      <button style={buttonStyle} onClick={() => setActivePage("home")}>
        {" "}
        Home{" "}
      </button>{" "}
      <button style={serviceStyle} onClick={() => setActivePage("service")}>
        {" "}
        Service{" "}
      </button>{" "}
    </div>
  );
}

function App() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [activePage, setActivePage] = useState("home");

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch("http://localhost:8000/image", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setPrediction(data[0]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <NavBar setActivePage={setActivePage} />{" "}
      {activePage === "home" && (
        <p>
          {" "}
          <HomePage />{" "}
        </p>
      )}{" "}
      {activePage === "service" && (
        <div>
          <h1> Herb Identification </h1>{" "}
          <input type="file" accept="image/*" onChange={handleFileUpload} />{" "}
          <button onClick={handleSubmit}> Submit </button>{" "}
          {prediction && <p> Prediction: {prediction} </p>}{" "}
        </div>
      )}{" "}
    </div>
  );
}

export default App;
