import React from "react";
import LoginForm from "./components/LoginForm";
import "./Login.scss";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext/authContext";

const Login = () => {
  return (
    <div className="Login">
      <h1 className="text-container">Sameer's Social.....</h1>
      <div className="login-form">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
