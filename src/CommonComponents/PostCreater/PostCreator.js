import React, { useContext } from "react";
import "./PostCreator.scss";
import peopleImage from "../../assets/person/1.jpeg";
import { Divider } from "antd";
import { PostDataContext } from "../../Context/PostContext/PostContext";
import ModalComponent from "../ModalComponent/ModalComponent";
import { CreatPostAPI } from "../../Api/postApi";
import { BsFillPlayBtnFill } from "react-icons/bs";
import { BsBookmarkHeart } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
import { BiCool } from "react-icons/bi";

const PostCreator = () => {
  const { PostData, setPostData } = useContext(PostDataContext);
  // const { myModal, showModal, isModalOpen } = ModalComponent();

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
          <textarea
            // onChange={(e) =>
            //   setPostData({ ...PostData, description: e.target.value })
            // }
            className="text-area"
            placeholder="Whats on your mind ?"
          />
        </div>
        <div className="post-creator-helper">
          <div className="photo-video">
            <span style={{ padding: "1rem" }} className="post-creater-icon">
              <BsFillPlayBtnFill />
            </span>
            Photo and video{" "}
          </div>
          <div className="tag">
            <span style={{ padding: "1rem" }} className="post-creater-icon">
              <BsBookmarkHeart />
            </span>
            Tag
          </div>
          <div className="location">
            <span style={{ padding: "1rem" }} className="post-creater-icon">
              <BiMap />
            </span>
            Location
          </div>
          <div className="feelings">
            <span style={{ padding: "1rem" }} className="post-creater-icon">
              <BiCool />
            </span>
            feelings
          </div>
          <div className="button-container">
            <button className="share-button">Share</button>
          </div>
        </div>
        {/* {isModalOpen && myModal} */}
      </div>
    </>
  );
};

export default PostCreator;
