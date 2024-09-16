import React from "react";
import Post from "../components/Post";
import JoinButton from "../components/JoinButton";

const Community = ({
  community,
  onJoin,
  posts,
  onLike,
  onComment,
  onCommentUpvote,
  onCommentDelete,
}) => (
  <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
    <h2>
      {community.name}
      {!community.joined && <JoinButton onJoin={() => onJoin(community.id)} />}
    </h2>
    {community.joined && <button>Post</button>}
    {posts.map((post) => (
      <Post
        key={post.id}
        post={post}
        canComment={!community.joined}
        onLike={onLike}
        onComment={onComment}
        onCommentUpvote={onCommentUpvote}
        // onCommentDelete={onCommentDelete}
      />
    ))}
  </div>
);

export default Community;
