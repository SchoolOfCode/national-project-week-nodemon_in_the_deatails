//dashboard page with PostList
// -> PostList -> with individual Post
import { useEffect, useState } from "react";
import PostList from "./PostList/PostList.js";
import React from "react";
import './Dashboard.css';

const Dashboard = () => {
  const [listOfPosts, setListOfPosts] = useState([]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = new Request(
        "https://desolate-ridge-07270.herokuapp.com/posts/3"
      );
      const response = await fetch(request);
      const data = await response.json();
      setListOfPosts(data);
      return data;
    }

    fetchData();
  }, []);

  useEffect(()=>{
    async function fetchUserName() {
      const request = new Request("https://desolate-ridge-07270.herokuapp.com/users/1");
      const response = await fetch(request);
      const data = await response.json();
      setUserName(data[0].first_name);
      return data;
    }

    fetchUserName();
  }, [])


  return (
    <div className="dashboard-wrapper">
    <div className="sidebar">
      <img src="Scissors-Logo.svg" alt="scissors-logo" />
      <p> <button className="sidebar-button">Home</button>      
      </p>
      <p><button className="sidebar-button">Snips</button> </p>
      <p><button className="sidebar-button">Snip</button></p>
    </div>

    <div className="dashboard">
         <header>Welcome Back {userName}✨</header>
      <PostList listOfPosts={listOfPosts} />
    </div>
    </div>
  );
};

export default Dashboard;
