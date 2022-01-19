import Post from "./Post/Post.js";
import React from "react";

const dateConvert = (date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

const PostList = ({ listOfPosts }) => {
  console.log(listOfPosts);
  return (
    <div>
      {listOfPosts.map((post) => {
        return (
          <Post
            mood={post.mood}
            date={dateConvert(post.post_date)}
            codeSnippet={post.snippet}
            reflectionText={post.reflection_text}
            key={post.post_id}
          />
        );
      })}
    </div>
  );
};

export default PostList;
