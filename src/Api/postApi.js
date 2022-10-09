import axios from "axios";

export const CreatPostAPI = async (data) => {
  console.log("inside createPost Api", data);
  try {
    const response = await axios.post({
      url: `http://localhost:8800/api/post/createpost`,
      method: "post",
      data: data,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
