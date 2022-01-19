//dashboard page with PostList
// -> PostList -> with individual Post
import { useEffect, useState } from "react";
import PostList from "./PostList/PostList.js";
import React from "react";

const Dashboard = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = new Request(
        "https://desolate-ridge-07270.herokuapp.com/posts/5"
      );
      const response = await fetch(request);
      const data = await response.json();
      setListOfPosts(data);
      return data;
    }

    fetchData();
  }, []);
  return (
    <div>
      <PostList listOfPosts={listOfPosts} />
    </div>
  );
};

export default Dashboard;
