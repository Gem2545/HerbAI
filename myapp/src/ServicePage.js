import React, { useState } from "react";

function ServicePage() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState("");
  const [fileSelected, setFileSelected] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleFileUpload = (event) => {
    const formData = new FormData();
    const file = event.target.files[0];
    setSelectedFile(file);
    setFileSelected(true);
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      alert("Please select a file before submitting.");
      return;
    }

    setSubmitted(true); // Set submitted state to true
    const formData = new FormData();
    formData.append("image", selectedFile);
    try {
      const response = await fetch(
        " https://herbprediction-abwy4fgmma-as.a.run.app/image",
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      setPrediction(data[0]);
    } catch (error) {
      console.error("Error:", error);
    }
    setFileSelected(false); // Reset fileSelected state
    setTimeout(() => {
      setSubmitted(false); // Reset submitted state after some time (simulating asynchronous process)
    }, 3000); // Adjust the time as needed (3000ms = 3 seconds)
  };

  return (
    <div>
      <h1 className="page-heading"> Herb Identification </h1>{" "}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileUpload}
            style={{
              color: "black", // Set text color to black
              marginRight: "10px",
            }}
          />{" "}
          <button onClick={handleSubmit} disabled={!fileSelected}>
            {" "}
            {submitted ? "Submitted" : "Submit"}{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Uploaded"
          style={{
            maxWidth: "500px",
            maxHeight: "500px",
            margin: "20px 0",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
      )}{" "}
      {prediction && (
        <p
          style={{
            color: "black",
            textAlign: "center",
          }}
        >
          Prediction: {prediction}{" "}
        </p>
      )}{" "}
      <footer className="footer">
        {" "}
        © copy; 2023 HerbQuest - Herbal Awareness.All rights reserved.{" "}
      </footer>{" "}
    </div>
  );
}

export default ServicePage;
