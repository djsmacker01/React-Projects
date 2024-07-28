import React from "react";
import { Link } from "react-router-dom";
// import "./App.css";

const CommunityPage = ({
  communityName,
  posts,
  onJoin,
  isJoined,
  // onPostClick,
  onLike,
  onDislike,
}) => {
  return (
    <div>
      <h1>{communityName}</h1>
      <button onClick={onJoin}>{isJoined ? "Joined" : "Join"}</button>
      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
            onClick={() => onPostClick(post)}>
            <h3>{post.user}</h3>
            <p>{post.content}</p>
            <p>{post.time}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onLike(post.id);
              }}>
              ↑ {post.likes}
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDislike(post.id);
              }}>
              ↓ {post.dislikes}
            </button>
          </div>
        ))}
      </div>
      {isJoined && (
        <Link to="/post">
          <button>Create New Post</button>
        </Link>
      )}
    </div>
  );
};

export default CommunityPage;
