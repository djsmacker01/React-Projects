import React, { useState } from "react";
// import "./App.css";
const CommentPage = ({ post, onComment, onLike, onDislike }) => {
  const [commentContent, setCommentContent] = useState("");

  const handleCommentSubmit = () => {
    onComment(post.id, commentContent);
    setCommentContent("");
  };

  return (
    <div>
      <h1>Discussion</h1>
      <div>
        <h3>{post.user}</h3>
        <p>{post.content}</p>
        <p>{post.time}</p>
        <button onClick={() => onLike(post.id)}>↑ {post.likes}</button>
        <button onClick={() => onDislike(post.id)}>↓ {post.dislikes}</button>
      </div>
      <div>
        {post.comments.map((comment, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}>
            <h4>{comment.user}</h4>
            <p>{comment.content}</p>
            <p>{comment.time}</p>
          </div>
        ))}
      </div>
      <div>
        <textarea
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add a comment..."
        />
        <button onClick={handleCommentSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default CommentPage;
