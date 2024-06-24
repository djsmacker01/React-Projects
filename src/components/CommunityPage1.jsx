import React, { useState } from "react";

const CommunityPage1 = ({ community }) => {
  const [joined, setJoined] = useState(false);
  const [postContent, setPostContent] = useState("");

  const handleJoinClick = () => {
    setJoined(true);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle post submission
    console.log({
      community,
      postContent,
    });
  };

  return (
    <div className="community-page">
      <h1>{community.title}</h1>
      {!joined ? (
        <button onClick={handleJoinClick}>Join</button>
      ) : (
        <form onSubmit={handlePostSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write your post..."
          />
          <button type="submit">Post</button>
        </form>
      )}
      <div className="posts">
        {community.posts.map((post, index) => (
          <div key={index} className="post">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className="post-actions">
              <button>Like</button>
              <button>Comment</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage1;
