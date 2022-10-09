import React, { useContext } from "react";
import Header from "../../CommonComponents/Header/Header";
import PostCreator from "../../CommonComponents/PostCreater/PostCreator";
import Sidebar from "../../CommonComponents/SideBar/Sidebar";
import PostWrapper from "../../CommonComponents/PostWrapper/PostWrapper";
import "./Dasboard.scss";
import { PostDataContext } from "../../Context/PostContext/PostContext";
import RightSideBar from "../../CommonComponents/RightSideBar/RightSideBar";

const DashBoard = () => {
  const { PostData, setPostData } = useContext(PostDataContext);
  return (
    <div className="DashBoard">
      <Header />
      <div className="main-page">
        <div className="sideBar">
          <Sidebar />
        </div>
        <div className="feed">
          <div className="section-one-Dashboard">
            {" "}
            <PostCreator />
          </div>
          <div className="section-two-Dashboard">
            {PostData.map((item) => {
              return <PostWrapper item={item} />;
            })}
          </div>
        </div>
        <div className="rightBar">
          <RightSideBar />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
