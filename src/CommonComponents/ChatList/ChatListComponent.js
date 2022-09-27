import React from "react";
import { ChatList } from "../ChatList/ChatList";
import "./ChatList.scss";

const ChatListComponent = () => {
  return (
    <div className="chatListComponent">
      {ChatList.map((item) => {
        return (
          <>
            <div className="chat-heads">
              <div className="chat-image">{item.image}</div>
              <div className="chat-name">{item.name}</div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ChatListComponent;
