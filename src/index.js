import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Context from "./Context/authContext/authContext";
import PostDataContext from "./Context/PostContext/PostContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <PostDataContext>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PostDataContext>
    </Context>
  </React.StrictMode>
);
