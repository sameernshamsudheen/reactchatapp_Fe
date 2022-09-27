import React, { useContext } from "react";
import "./Header.scss";
import { Input } from "antd";
import { AntDesignOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space } from "antd";

import { Avatar } from "antd";
import { AuthContext } from "../../Context/authContext/authContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { Logout } = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleLogout = () => {
    Logout(Navigate);
  };

  const menu = (
    <Menu
      items={[
        {
          label: <div className="">Timeline</div>,
          key: "0",
        },
        {
          label: <div>Messages</div>,
          key: "1",
        },
        {
          label: <div>Profile</div>,
          key: "1",
        },
        {
          label: <div onClick={handleLogout}>Logout</div>,
          key: "2",
        },
      ]}
    />
  );

  const { Search } = Input;
  return (
    <div className="Header">
      <div className="Logo">
        <h2 onClick={() => Navigate("/dashboard")} className="logo-text">
          Be Social
        </h2>
      </div>
      <input
        className="search-controls"
        style={{ width: "45%", borderRadius: "20px" }}
        type="search"
        placeholder="search here"
      />
      <div className="profile-block">
        <Avatar
          size={{ xs: 24, sm: 32, md: 40, lg: 10, xl: 36, xxl: 100 }}
          icon={<AntDesignOutlined />}
        />
        <span className="drop-down">
          <Dropdown overlay={menu} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <DownOutlined style={{ fontSize: "125%" }} />
            </a>
          </Dropdown>
        </span>
      </div>
    </div>
  );
};

export default Header;
