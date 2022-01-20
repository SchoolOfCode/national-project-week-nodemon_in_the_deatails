import { useState } from "react";

const useUserId = () => {
  const getUserId = () => {
    const userIdString = sessionStorage.getItem("user_id");
    const userId = JSON.parse(userIdString);
    return userId?.user_id;
  };
  const [userId, setUserId] = useState(getUserId());
  const saveUserId = (userId) => {
    sessionStorage.setItem("user_id", JSON.stringify(userId));
    setUserId(userId.user_id);
  };
  console.log("user id is " + userId);
  return {
    setUserId: saveUserId,
    userId,
  };
};
export default useUserId;
