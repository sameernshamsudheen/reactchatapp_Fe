import { useContext } from "react";
import { AuthContext } from "../Context/authContext/authContext";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const loginData = JSON.parse(localStorage.getItem("loginData"));
  console.log(loginData, "inside private Route");
  if (
    loginData?.username === "sameer@gmail.com" &&
    loginData?.password === "sameer@123"
  ) {
    return <Outlet />;
  } else {
    alert("invalid email or password");
    return <Navigate to="/" />;
  }
};

export default PrivateRoute;
