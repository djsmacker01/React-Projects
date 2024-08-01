// // src/components/Post.js
// import React, { useState } from "react";
// import "../components/Post.css";

// function Post({ post, addComment }) {
//   const [commentText, setCommentText] = useState("");

//   const handleAddComment = () => {
//     if (commentText.trim()) {
//       addComment(post.id, commentText);
//       setCommentText("");
//     }
//   };

//   return (
//     <div className="post">
//       <div className="post-header">
//         <img
//           src="https://via.placeholder.com/50"
//           alt="User avatar"
//           className="avatar"
//         />
//         <div className="post-info">
//           <span className="username">username</span>
//           <span className="timestamp">2h ago</span>
//         </div>
//       </div>
//       <div className="post-content">
//         <h3>{post.title}</h3>
//         <p>{post.content}</p>
//       </div>
//       <div className="post-actions">
//         <span>👍</span>
//         <span>💬</span>
//         <span>🔗</span>
//       </div>
//       <div className="comments">
//         {post.comments.map((comment, index) => (
//           <div key={index} className="comment">
//             {comment}
//           </div>
//         ))}
//       </div>
//       <div className="add-comment">
//         <input
//           type="text"
//           value={commentText}
//           onChange={(e) => setCommentText(e.target.value)}
//           placeholder="Add a comment..."
//         />
//         <button onClick={handleAddComment}>Add Comment</button>
//       </div>
//     </div>
//   );
// }

// export default Post;



import React, { useState } from "react";

const Post = ({
  post,
  canComment,
  onLike,
  onComment,
  onCommentUpvote,
  onCommentDelete,
}) => {
  const [comment, setComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      onComment(post.id, comment);
      setComment("");
    }
  };

  return (
    <div style={{ border: "1px solid gray", padding: "5px", margin: "5px" }}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
      <p>
        Likes: {post.likes} | Comments: {post.comments} | Upvote Rate:{" "}
        {post.upvoteRate}%
      </p>
      <button onClick={() => onLike(post.id)}>Like</button>
      {canComment && (
        <form onSubmit={handleCommentSubmit}>
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
          />
          <button type="submit">Comment</button>
        </form>
      )}
      <div>
        {post.commentList &&
          post.commentList.map((c, index) => (
            <div
              key={index}
              style={{
                border: "1px solid lightgray",
                padding: "5px",
                margin: "5px",
              }}>
              <p>
                {c.text} | Upvotes: {c.upvotes}
              </p>
              <button onClick={() => onCommentUpvote(post.id, index)}>
                Upvote
              </button>
              <button onClick={() => onCommentDelete(post.id, index)}>
                Delete
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Post;


