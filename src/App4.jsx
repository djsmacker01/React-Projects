// src/App.js
import React, { useState } from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";
import Sidebar from "./components/Siderbar.jsx";
import "./App.css";

function App4() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Post title 1",
      content: "Content of post 1",
      comments: [],
    },
    {
      id: 2,
      title: "Post title 2",
      content: "Content of post 2",
      comments: [],
    },
  ]);

  const addComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="app">
      <Header />
      <div className="content">
        <PostList posts={posts} addComment={addComment} />
        <Sidebar />
      </div>
    </div>
  );
}

export default App4;
