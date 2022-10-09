import React from "react";
import "./UserFriendsGrid.scss";
import friendsImage1 from "../../../assets/person/1.jpeg";

const UserFriendsGrid = () => {
  return (
    <div className="UserFriendsGrid">
      <h1> User Friends</h1>
      <div className="UserFriendsContainer">
        <div className="friends-image-name">
          <img className="image-Friend" src={friendsImage1} />
          <h2 className="text">sameer</h2>
        </div>
        <div className="friends-image-name">
          <img className="image-Friend" src={friendsImage1} />
          <h2 className="text">sameer</h2>
        </div>
        <div className="friends-image-name">
          <img className="image-Friend" src={friendsImage1} />
          <h2 className="text">sameer</h2>
        </div>
        <div className="friends-image-name">
          <img className="image-Friend" src={friendsImage1} />
          <h2 className="text">sameer</h2>
        </div>
      </div>
    </div>
  );
};

export default UserFriendsGrid;
