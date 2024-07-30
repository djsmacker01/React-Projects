// src/components/Post.js
import React, { useState } from "react";
import "./Post.css";

function Post({ post, addComment }) {
  const [commentText, setCommentText] = useState("");

  const handleAddComment = () => {
    if (commentText.trim()) {
      addComment(post.id, commentText);
      setCommentText("");
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <img
          src="https://via.placeholder.com/50"
          alt="User avatar"
          className="avatar"
        />
        <div className="post-info">
          <span className="username">username</span>
          <span className="timestamp">2h ago</span>
        </div>
      </div>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
      <div className="post-actions">
        <span>👍</span>
        <span>💬</span>
        <span>🔗</span>
      </div>
      <div className="comments">
        {post.comments.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
      <div className="add-comment">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}

export default Post;
