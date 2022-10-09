import React, { useContext } from "react";
import { PostData } from "../PostData/PostData";
import peopleImage from "../../assets/person/1.jpeg";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PostDataContext } from "../../Context/PostContext/PostContext";
import like from "../../assets/like.png";
import love from "../../assets/heart.png";

import "./SinglePost.scss";

const SinglePost = ({ item }) => {
  return (
    <div className="SinglePost">
      <div className="section-one">
        <div className="image_name">
          <div className="image-name-section">
            <img className="image" src={peopleImage} />
            <h6 className="name">{item.name}</h6>
            <h6 className="name">{item.time}</h6>
          </div>
          <div className="">
            <BsThreeDotsVertical />
          </div>
        </div>
      </div>
      <div className="section-two">
        <div className="post-description">{item.description}</div>
        <img className="post-image" src={peopleImage} />
      </div>
      <div className="section-three">
        <div className="section-three-container">
          <img src={like} className="icon" />
          <img src={love} className="icon" />

          <div className="text"> 32 people liked it</div>
        </div>
        <div className="comments "> 9 comments </div>
      </div>
    </div>
  );
};

export default SinglePost;
