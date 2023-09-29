// import React, { useState } from "react";
// import HomePage from "./HomePage";
// import NavBar from "./NavBar";
// import AboutUs from "./AboutUs";
// import "./HomePage.css";

// function App() {
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [prediction, setPrediction] = useState("");
//   const [activePage, setActivePage] = useState("home");
//   const [fileSelected, setFileSelected] = useState(false);

//   const handleFileUpload = (event) => {
//     const formData = new FormData();
//     const file = event.target.files[0];
//     setSelectedFile(file);
//     setFileSelected(true); // Set fileSelected to true when a file is selected
//   };

//   const handleSubmit = async () => {
//     if (!selectedFile) {
//       alert("Please select a file before submitting.");
//       return;
//     }

//     console.log("Handle Submit Clicked");
//     const formData = new FormData();
//     formData.append("image", selectedFile);
//     console.log("Submitting...");
//     try {
//       const response = await fetch("http://localhost:8000/image", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       console.log("Received data:", data);
//       setPrediction(data[0]); // Assuming the label is the first element in the response data
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <NavBar setActivePage={setActivePage} />{" "}
//       {activePage === "home" && <HomePage />}{" "}
//       {activePage === "service" && (
//         <div>
//           <h1 className="page-heading"> Herb Identification </h1>{" "}
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 style={{
//                   color: "black", // Set text color to black
//                   marginRight: "10px",
//                 }}
//               />{" "}
//               <button onClick={handleSubmit} disabled={!fileSelected}>
//                 Submit{" "}
//               </button>{" "}
//             </div>{" "}
//           </div>{" "}
//           {selectedFile && (
//             <img
//               src={URL.createObjectURL(selectedFile)}
//               alt="Uploaded"
//               style={{
//                 maxWidth: "500px",
//                 maxHeight: "500px",
//                 margin: "20px 0",
//                 display: "block",
//                 marginLeft: "auto",
//                 marginRight: "auto",
//               }}
//             />
//           )}{" "}
//           {prediction && (
//             <p
//               style={{
//                 color: "black",
//                 textAlign: "center",
//               }}
//             >
//               {" "}
//               Prediction: {prediction}{" "}
//             </p>
//           )}{" "}
//           <footer className="footer">
//             {" "}
//             © copy; 2023 HerbQuest - Herbal Awareness.All rights reserved.{" "}
//           </footer>{" "}
//         </div>
//       )}{" "}
//       {activePage === "aboutUs" && <AboutUs />}{" "}
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import HomePage from "./HomePage";
import NavBar from "./NavBar";
import AboutUs from "./AboutUs";
import ServicePage from "./ServicePage"; // Import the ServicesPage component
// import "./HomePage.css";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    setActivePage(page);
  };

  return (
    <div>
      <NavBar setActivePage={handleNavClick} />{" "}
      {activePage === "home" && <HomePage setActivePage={handleNavClick} />}{" "}
      {activePage === "service" && <ServicePage />}{" "}
      {activePage === "aboutUs" && <AboutUs />}{" "}
    </div>
  );
}

export default App;
