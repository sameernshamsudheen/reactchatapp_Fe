import React from "react";
import "./RightSidebar.scss";
import { OnlineChatList } from "./OnlineChatLIst/OnlineChatLIst";
import giftImage from "../../assets/gift.png";
import ad from "../../assets/ad.png";

const RightSideBar = () => {
  return (
    <div className="RightSidebar">
      <div className="top-section">
        <h4 className="birthday-text-image">
          <span>
            <img src={giftImage} />
          </span>
          <h3>pablo escobar and 2 others have birthday</h3>
        </h4>
      </div>
      <img className="image-banner" src={ad} />
      <div className="online-friends">
        <h1>Online friends</h1>
        <div className="online-chat-list">
          {OnlineChatList.map((item) => {
            return (
              <div className="online-chat-container">
                {item.image}
                <div className="online-chat-heads-names">{item.name} </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
