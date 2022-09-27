import React from "react";
import { SideBarMenu } from "../Menu/SideBarMenu";
import "./SideBar.scss";
import { Toggle } from "../../Utils/ToggleFunction";
import ChatListComponent from "../ChatList/ChatListComponent";

const Sidebar = () => {
  const { toggle, SetToggle } = Toggle();
  return (
    <div className="sideBar">
      {SideBarMenu.map((item, key) => {
        return (
          <div
            key={item.key}
            style={{ border: "none" }}
            className="sidebar-menu"
          >
            <div className="menu-icons">{item.icons}</div>
            <h3 className="menu-label">{item.label}</h3>
          </div>
        );
      })}
      <button
        onClick={() => SetToggle(!toggle)}
        className="sidebar-show-more-btn"
      >
        showmore
      </button>
      {toggle && <ChatListComponent />}
    </div>
  );
};

export default Sidebar;
