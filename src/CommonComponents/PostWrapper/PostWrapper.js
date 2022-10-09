import React from "react";
import SinglePost from "../SinglePost/SinglePost";

const PostWrapper = ({ item }) => {
  return (
    <div className="PostWrapper">
      <SinglePost item={item} />
    </div>
  );
};

export default PostWrapper;
