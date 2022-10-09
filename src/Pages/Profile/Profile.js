import React, { useContext } from "react";
import Header from "../../CommonComponents/Header/Header";
import PostCreator from "../../CommonComponents/PostCreater/PostCreator";
import PostWrapper from "../../CommonComponents/PostWrapper/PostWrapper";
import Sidebar from "../../CommonComponents/SideBar/Sidebar";
import { PostDataContext } from "../../Context/PostContext/PostContext";
import "./ProfileStyle.scss";
import coverPicture from "../../assets/post/3.jpeg";
import profilePicture from "../../assets/post/10.jpeg";
import UserInfoGrid from "./UserInformationGrid/UserInfoGrid";
import UserFriendsGrid from "./UserFriends/UserFriendsGrid";

const Profile = () => {
  const { PostData, setPostData } = useContext(PostDataContext);
  return (
    <div className="Profile">
      <Header />
      <div className="profile-container">
        <div className="left-sidebar">
          {" "}
          <Sidebar />
        </div>

        <div className="feed-profile">
          <div
            style={{
              backgroundImage: `url(${coverPicture})`,
              backgroundRepeat: "none",
              backgroundSize: "cover",

              minHeight: "200px",
              width: "100%",
            }}
            className="profile-cover"
          >
            <div
              style={{
                width: "100%",

                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "300px",
              }}
            >
              <img
                style={{
                  zIndex: "10",
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                src={profilePicture}
                width="100px"
                height="100px"
              />

              <h1 style={{ color: "black" }}>Sameer Shamsudheen</h1>
            </div>
          </div>
          <div className="section-one-profile">
            <PostCreator />
          </div>
          <div className="section-two-profile">
            {PostData.map((item) => {
              return <PostWrapper item={item} />;
            })}
          </div>
        </div>
        <div className="right-sidebar">
          <UserInfoGrid />
          <UserFriendsGrid />
        </div>
      </div>
    </div>
  );
};

export default Profile;
