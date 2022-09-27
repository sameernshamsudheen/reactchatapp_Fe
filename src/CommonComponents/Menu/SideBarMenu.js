import { WechatOutlined } from "@ant-design/icons";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsQuestionLg } from "react-icons/bs";
import { BsBookmarkDash } from "react-icons/bs";

export const SideBarMenu = [
  {
    label: <div>Feed</div>,
    icons: <BsFillChatLeftTextFill />,
    key: "0",
  },
  {
    label: <div>Chats</div>,
    key: "1",
    icons: <WechatOutlined />,
  },
  {
    label: <div>Videos</div>,
    key: "2",
    icons: <BsYoutube />,
  },
  {
    label: <div>Groups</div>,
    key: "3",
    icons: <BsFillPeopleFill />,
  },
  {
    label: <div>BookMarks</div>,
    key: "4",
    icons: <BsBookmarkDash />,
  },

  {
    label: <div>Questions</div>,
    key: "5",
    icons: <BsQuestionLg />,
  },
];
