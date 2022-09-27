import React from "react";
import Header from "../../CommonComponents/Header/Header";
import Sidebar from "../../CommonComponents/SideBar/Sidebar";
import "./Dasboard.scss";

const DashBoard = () => {
  return (
    <div className="DashBoard">
      <Header />
      <div className="main-page">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="feed">feed</div>
        <div className="rightBar">rightBa</div>
      </div>
    </div>
  );
};

export default DashBoard;
