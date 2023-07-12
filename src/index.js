import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { TaskProvider } from "./components/to-do/contexts/task-context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TaskProvider>
    <App />
  </TaskProvider>
);
