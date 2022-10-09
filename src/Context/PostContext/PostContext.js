import { createContext, useState } from "react";
import { CreatPostAPI } from "../../Api/postApi";

export const PostDataContext = createContext(null);

const PostContext = ({ children }) => {
  const [PostData, setPostData] = useState([
    {
      description: "sameer is good boy",
      username: "sameer shmausheen",
      time: "5mins ago",
    },
    {
      description: "sameer is good boy",
      username: "sameer shmausheen",
      time: "5mins ago",
    },
    {
      description: "sameer is good boy",
      username: "sameer shmausheen",
      time: "5mins ago",
    },
    {
      description: "sameer is good boy",
      username: "sameer shmausheen",
      time: "5mins ago",
    },
  ]);

  const postData = {
    PostData: PostData,
    setPostData: setPostData,
  };

  return (
    <PostDataContext.Provider value={postData}>
      {children}
    </PostDataContext.Provider>
  );
};

export default PostContext;
