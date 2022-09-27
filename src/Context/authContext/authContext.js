import { createContext, useState } from "react";

export const AuthContext = createContext(null);

const Context = ({ children }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const login = (values, Navigate) => {
    localStorage.setItem("loginData", JSON.stringify(values));
    setLoginData({
      ...loginData,
      email: values?.username,
      password: values?.password,
    });
    Navigate("/dashboard");
  };

  const Logout = (Navigate) => {
    localStorage.removeItem("loginData");
    Navigate("/");
  };

  const data = {
    login: login,
    Logout: Logout,
    loginData: loginData,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default Context;
