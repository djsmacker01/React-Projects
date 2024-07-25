import React, { useState } from "react";
// import "./App.css";

const PostPage = ({ onCreatePost }) => {
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = () => {
    onCreatePost(postContent);
    setPostContent("");
  };

  return (
    <div>
      <h1>Create a Post</h1>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Write your post here..."
        style={{ width: "100%", height: "200px" }}
      />
      <button onClick={handlePostSubmit}>Submit Post</button>
    </div>
  );
};

export default PostPage;
