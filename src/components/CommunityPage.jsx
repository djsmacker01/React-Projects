// src/components/CommunityPage.js
import React, { useState } from 'react';
import './CommunityPage.css';

const CommunityPage = () => {
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    setJoined(!joined);
  };

  return (
    <div className="community-page-container">
      <header className="community-header">
        <h1>Toxicology</h1>
        <button className="join-button" onClick={handleJoin}>
          {joined ? 'Leave' : 'Join'}
        </button>
      </header>
      <div className="posts-container">
        <Post
          username="User1"
          content="This is a comment."
          time="1 hour ago"
          upvotes={10}
          downvotes={2}
        />
        <Post
          username="User3"
          content="Another comment here."
          time="2 hours ago"
          upvotes={5}
          downvotes={1}
        />
      </div>
      {joined && <PostForm />}
      <button className="create-post-button">+</button>
    </div>
  );
};

const Post = ({ username, content, time, upvotes, downvotes }) => (
  <div className="post">
    <div className="post-header">
      <h2>{username}</h2>
      <p>{content}</p>
    </div>
    <div className="post-footer">
      <span>{time}</span>
      <div className="votes">
        <span>↑ {upvotes}</span>
        <span>↓ {downvotes}</span>
      </div>
    </div>
  </div>
);

const PostForm = () => {
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Logic to handle post submission
    console.log('Post submitted:', postContent);
    setPostContent('');
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
