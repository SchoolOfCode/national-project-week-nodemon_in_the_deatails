//dashboard page with PostList
// -> PostList -> with individual Post
import { useEffect, useState } from "react";
import PostList from "./PostList/PostList.js";
import React from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";

const Dashboard = ({ userId }) => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchData() {
      console.log("user id is " + userId);
      const request = new Request(
        `https://desolate-ridge-07270.herokuapp.com/posts/${userId}`
      );
      const response = await fetch(request);
      const data = await response.json();
      setListOfPosts(data);
      return data;
    }

    fetchData();
  }, [userId]);

  useEffect(() => {
    async function fetchUserName() {
      const request = new Request(
        `https://desolate-ridge-07270.herokuapp.com/users/${userId}`
      );
      const response = await fetch(request);
      const data = await response.json();
      setUserName(data[0].first_name);
      return data;
    }

    fetchUserName();
  }, [userId]);

  return (
    <div className="dashboard-wrapper">
      <div className="sidebar">
        <img src="Scissors-Logo.svg" alt="scissors-logo" />
        <p>
          <Link to="/dashboard">
            <button className="sidebar-button">Home</button>
          </Link>
        </p>
        {/* <p>
          <button className="sidebar-button">Snips</button>{" "}
        </p> */}
        <p>
          <Link to="/">
            <button className="sidebar-button">Snip</button>
          </Link>
        </p>
      </div>

      <div className="dashboard">
        <header>Welcome Back {userName}✨</header>
        <PostList listOfPosts={listOfPosts} />
      </div>
    </div>
  );
};

export default Dashboard;
