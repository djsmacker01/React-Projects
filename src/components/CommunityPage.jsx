// src/components/CommunityPage.jsx
import React, { useState } from "react";
import "./CommunityPage.css";

const CommunityPage = () => {
  const [joined, setJoined] = useState(false);
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "User1",
      content: "This is a comment.",
      time: "1 hour ago",
      upvotes: 10,
      downvotes: 2,
      comments: [],
    },
    {
      id: 2,
      username: "User3",
      content: "Another comment here.",
      time: "2 hours ago",
      upvotes: 5,
      downvotes: 1,
      comments: [],
    },
  ]);
  const [showPostForm, setShowPostForm] = useState(false);

  const handleJoin = () => {
    setJoined(!joined);
  };

  const handleCreatePost = (content) => {
    const newPost = {
      id: posts.length + 1,
      username: "CurrentUser",
      content,
      time: "Just now",
      upvotes: 0,
      downvotes: 0,
      comments: [],
    };
    setPosts([...posts, newPost]);
    setShowPostForm(false); // Hide the form after posting
  };

  const handleUpdatePost = (postId, content) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId ? { ...post, content } : post
    );
    setPosts(updatedPosts);
  };

  const handleComment = (postId, comment) => {
    const updatedPosts = posts.map((post) =>
      post.id === postId
        ? { ...post, comments: [...post.comments, { content: comment }] }
        : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div className="community-page-container">
      <header className="community-header">
        <h1>Toxicology</h1>
        <button className="join-button" onClick={handleJoin}>
          {joined ? "Leave" : "Join"}
        </button>
      </header>
      <div className="posts-container">
        {posts.map((post) => (
          <Post
            key={post.id}
            post={post}
            onComment={handleComment}
            onUpdate={handleUpdatePost}
          />
        ))}
      </div>
      {showPostForm && joined && <PostForm onSubmit={handleCreatePost} />}
      <button
        className="create-post-button"
        onClick={() => setShowPostForm(!showPostForm)}>
        {showPostForm ? "x" : "+"}
      </button>
    </div>
  );
};

const Post = ({ post, onComment, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(post.content);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    onComment(post.id, comment);
    setComment("");
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    onUpdate(post.id, editContent);
    setIsEditing(false);
  };

  return (
    <div className="post">
      <div className="post-header">
        <h2>{post.username}</h2>
        {isEditing ? (
          <form onSubmit={handleUpdateSubmit}>
            <textarea
              value={editContent}
              onChange={(e) => setEditContent(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
        ) : (
          <p>{post.content}</p>
        )}
      </div>
      <div className="post-footer">
        <span>{post.time}</span>
        <div className="votes">
          <span>↑ {post.upvotes}</span>
          <span>↓ {post.downvotes}</span>
        </div>
        <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
      </div>
      <div className="comments-section">
        {post.comments.map((comment, index) => (
          <p key={index}>{comment.content}</p>
        ))}
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
          />
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

const PostForm = ({ onSubmit }) => {
  const [postContent, setPostContent] = useState("");

  const handlePostSubmit = (e) => {
    e.preventDefault();
    onSubmit(postContent);
    setPostContent("");
  };

  return (
    <form className="post-form" onSubmit={handlePostSubmit}>
      <textarea
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
        placeholder="Write your post..."
      />
      <button type="submit">Post</button>
    </form>
  );
};

export default CommunityPage;