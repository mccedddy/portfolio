import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

document.addEventListener("mousemove", (event) => {
  const light = document.querySelector(".light");
  const x = event.clientX - light.offsetWidth / 2;
  const y = event.clientY - light.offsetHeight / 2;
  light.style.transform = `translate(${x}px, ${y}px)`;
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
