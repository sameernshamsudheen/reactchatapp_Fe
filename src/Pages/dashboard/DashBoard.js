import React from "react";
import Header from "../../CommonComponents/Header/Header";
import PostCreator from "../../CommonComponents/PostCreater/PostCreator";
import Sidebar from "../../CommonComponents/SideBar/Sidebar";
import PostWrapper from "../../CommonComponents/PostWrapper/PostWrapper";
import "./Dasboard.scss";

const DashBoard = () => {
  return (
    <div className="DashBoard">
      <Header />
      <div className="main-page">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="feed">
          <div className="section-one">
            {" "}
            <PostCreator />
          </div>
          <div className="section-two">
            <PostWrapper />
          </div>
        </div>
        <div className="rightBar">rightBa</div>
      </div>
    </div>
  );
};

export default DashBoard;
