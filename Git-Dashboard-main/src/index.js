import React from "react";
import ReactDOM from "react-dom/client"; // Import from "react-dom/client" for React 18
import App from "./App";

import './index.css'; // Optional CSS file for styling

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
