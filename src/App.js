import React from "react";
import "antd/dist/antd.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import PrivateRoute from "./Utils/PrivateRoute";
import DashBoard from "./Pages/dashboard/DashBoard";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/Profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
