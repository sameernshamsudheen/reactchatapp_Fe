import React from "react";
import "./PostCreator.scss";
import peopleImage from "../../assets/person/1.jpeg";
import { Divider } from "antd";

const PostCreator = () => {
  return (
    <>
      <div className="PostCreator">
        <div className="post-writings">
          <div className="profile-image">
            <img
              className=""
              src={peopleImage}
              width="35px"
              height="auto"
              style={{ borderRadius: "50%", objectFit: "contain" }}
            />
          </div>
          <textarea className="text-area" placeholder="Whats on your mind ?" />
        </div>
        <div className="post-creator-helper">
          <div className="photo-video">Photo and video</div>
          <div className="tag">Tag</div>
          <div className="location">Location</div>
          <div className="feelings"> feelings</div>
          <div className="button-container">
            <button className="share-button">Share</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCreator;
