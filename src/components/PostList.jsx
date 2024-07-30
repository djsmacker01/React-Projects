// src/components/PostList.js
import React from "react";
import Post from "./Post";
import "../components/PostList.jsx";

function PostList({ posts, addComment }) {
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} addComment={addComment} />
      ))}
    </div>
  );
}

export default PostList;
