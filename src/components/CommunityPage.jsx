// // src/components/CommunityPage.jsx
// import React, { useState } from "react";
// import "./CommunityPage.css";

// const CommunityPage = () => {
//   const [joined, setJoined] = useState(false);
//   const [posts, setPosts] = useState([
//     {
//       id: 1,
//       username: "User1",
//       content: "This is a comment.",
//       time: "1 hour ago",
//       upvotes: 10,
//       downvotes: 2,
//       comments: [],
//     },
//     {
//       id: 2,
//       username: "User3",
//       content: "Another comment here.",
//       time: "2 hours ago",
//       upvotes: 5,
//       downvotes: 1,
//       comments: [],
//     },
//   ]);
//   const [showPostForm, setShowPostForm] = useState(false);

//   const handleJoin = () => {
//     setJoined(!joined);
//   };

//   const handleCreatePost = (content) => {
//     const newPost = {
//       id: posts.length + 1,
//       username: "CurrentUser",
//       content,
//       time: "Just now",
//       upvotes: 0,
//       downvotes: 0,
//       comments: [],
//     };
//     setPosts([...posts, newPost]);
//     setShowPostForm(false); // Hide the form after posting
//   };

//   const handleUpdatePost = (postId, content) => {
//     const updatedPosts = posts.map((post) =>
//       post.id === postId ? { ...post, content } : post
//     );
//     setPosts(updatedPosts);
//   };

//   const handleComment = (postId, comment) => {
//     const updatedPosts = posts.map((post) =>
//       post.id === postId
//         ? { ...post, comments: [...post.comments, { content: comment }] }
//         : post
//     );
//     setPosts(updatedPosts);
//   };

//   return (
//     <div className="community-page-container">
//       <header className="community-header">
//         <h1>Toxicology</h1>
//         <button className="join-button" onClick={handleJoin}>
//           {joined ? "Leave" : "Join"}
//         </button>
//       </header>
//       <div className="posts-container">
//         {posts.map((post) => (
//           <Post
//             key={post.id}
//             post={post}
//             onComment={handleComment}
//             onUpdate={handleUpdatePost}
//           />
//         ))}
//       </div>
//       {showPostForm && joined && <PostForm onSubmit={handleCreatePost} />}
//       <button
//         className="create-post-button"
//         onClick={() => setShowPostForm(!showPostForm)}>
//         {showPostForm ? "x" : "+"}
//       </button>
//     </div>
//   );
// };

// const Post = ({ post, onComment, onUpdate }) => {
//   const [isEditing, setIsEditing] = useState(false);
//   const [editContent, setEditContent] = useState(post.content);
//   const [comment, setComment] = useState("");

//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//     onComment(post.id, comment);
//     setComment("");
//   };

//   const handleUpdateSubmit = (e) => {
//     e.preventDefault();
//     onUpdate(post.id, editContent);
//     setIsEditing(false);
//   };

//   return (
//     <div className="post">
//       <div className="post-header">
//         <h2>{post.username}</h2>
//         {isEditing ? (
//           <form onSubmit={handleUpdateSubmit}>
//             <textarea
//               value={editContent}
//               onChange={(e) => setEditContent(e.target.value)}
//             />
//             <button type="submit">Update</button>
//           </form>
//         ) : (
//           <p>{post.content}</p>
//         )}
//       </div>
//       <div className="post-footer">
//         <span>{post.time}</span>
//         <div className="votes">
//           <span>↑ {post.upvotes}</span>
//           <span>↓ {post.downvotes}</span>
//         </div>
//         <button onClick={() => setIsEditing(!isEditing)}>Edit</button>
//       </div>
//       <div className="comments-section">
//         {post.comments.map((comment, index) => (
//           <p key={index}>{comment.content}</p>
//         ))}
//         <form onSubmit={handleCommentSubmit}>
//           <input
//             type="text"
//             value={comment}
//             onChange={(e) => setComment(e.target.value)}
//             placeholder="Write a comment..."
//           />
//           <button type="submit">Comment</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const PostForm = ({ onSubmit }) => {
//   const [postContent, setPostContent] = useState("");

//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(postContent);
//     setPostContent("");
//   };

//   return (
//     <form className="post-form" onSubmit={handlePostSubmit}>
//       <textarea
//         value={postContent}
//         onChange={(e) => setPostContent(e.target.value)}
//         placeholder="Write your post..."
//       />
//       <button type="submit">Post</button>
//     </form>
//   );
// };

// export default CommunityPage;


// import React, { useState } from "react";
// import "./CommunityPage.css"; // Importing CSS for styling

// const CommunityPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [communityName, setCommunityName] = useState("");

//   const handleOpenModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setCommunityName("");
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Logic to create a community using communityName
//     console.log("Community Created:", communityName);
//     handleCloseModal();
//   };

//   return (
//     <div className="community-page">
//       <button className="add-community-btn" onClick={handleOpenModal}>
//         +
//       </button>

//       {isModalOpen && (
//         <div className="modal">
//           <h2>Create a Community</h2>
//           <form onSubmit={handleSubmit}>
//             <input
//               type="text"
//               value={communityName}
//               onChange={(e) => setCommunityName(e.target.value)}
//               placeholder="Enter community name"
//               required
//             />
//             <button type="submit">Create</button>
//             <button type="button" onClick={handleCloseModal}>
//               Cancel
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CommunityPage;







// import React, { useState, useEffect } from "react";
// import CommunityList from "../components/CommunityList";
// import { initialCommunities, initialPosts } from "../components/data";

// const CommunityPage = () => {
//   const [communities, setCommunities] = useState([]);
//   const [posts, setPosts] = useState([]);

//   // Simulate fetching data
//   useEffect(() => {
//     setCommunities(initialCommunities);
//     setPosts(initialPosts);
//   }, []);

//   const handleJoin = (id) => {
//     setCommunities(
//       communities.map((community) =>
//         community.id === id ? { ...community, joined: true } : community
//       )
//     );
//   };

//   const handleLike = (postId) => {
//     setPosts(
//       posts.map((post) =>
//         post.id === postId ? { ...post, likes: post.likes + 1 } : post
//       )
//     );
//   };
//   const handleComment = (postId, comment) => {
//     setPosts(
//       posts.map((post) =>
//         post.id === postId
//           ? {
//               ...post,
//               comments: post.comments + 1,
//               commentList: [
//                 ...(post.commentList || []),
//                 { text: comment, upvotes: 0 },
//               ],
//             }
//           : post
//       )
//     );
//   };

//    const handleCommentUpvote = (postId, commentIndex) => {
//      setPosts(
//        posts.map((post) =>
//          post.id === postId
//            ? {
//                ...post,
//                commentList: post.commentList.map((comment, index) =>
//                  index === commentIndex
//                    ? { ...comment, upvotes: comment.upvotes + 1 }
//                    : comment
//                ),
//              }
//            : post
//        )
//      );
//    };

//    const handleCommentDelete = (postId, commentIndex) => {
//      setPosts(
//        posts.map((post) =>
//          post.id === postId
//            ? {
//                ...post,
//                comments: post.comments - 1,
//                commentList: post.commentList.filter(
//                  (_, index) => index !== commentIndex
//                ),
//              }
//            : post
//        )
//      );
//    };

//   return (
//     <div>
//       <h1>Communities</h1>
//       <CommunityList
//         communities={communities}
//         onJoin={handleJoin}
//         posts={posts}
//         onLike={handleLike}
//         onComment={handleComment}
//         onCommentUpvote={handleCommentUpvote}
//         onCommentDelete={handleCommentDelete}
//       />
//     </div>
//   );
// };

// export default CommunityPage;


import React, { useState } from "react";
import CommunityList from "./CommunityList";

const CommunityPage = () => {
  const [communities, setCommunities] = useState([
    { id: 1, name: "askphilosophy", joined: false },
    // { id: 2, name: "askscience", joined: false },
  ]);

  const [posts, setPosts] = useState([
    {
      id: 1,
      communityId: 1,
      title:
        "What pieces of philosophy would you recommend to a beginner on the meaning of true love?",
      content:
        "Lately I've been reflecting a lot on this topic and I've really resonated with Alan Watts talks about love and falling in love...",
      likes: 10,
      comments: 0,
      upvoteRate: 100,
      commentList: [],
    },
    {
      id: 2,
      communityId: 2,
      title:
        "Can quantum entanglement be used for faster-than-light communication?",
      content:
        "I've been reading about quantum entanglement and I am curious about its practical applications...",
      likes: 15,
      comments: 2,
      upvoteRate: 95,
      commentList: [
        { text: "This is interesting!", upvotes: 2 },
        { text: "Can you explain more?", upvotes: 1 },
      ],
    },
  ]);

  const handleJoin = (id) => {
    setCommunities(
      communities.map((community) =>
        community.id === id ? { ...community, joined: true } : community
      )
    );
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments + 1,
              commentList: [
                ...(post.commentList || []),
                { text: comment, upvotes: 0 },
              ],
            }
          : post
      )
    );
  };

  const handleCommentUpvote = (postId, commentIndex) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              commentList: post.commentList.map((comment, index) =>
                index === commentIndex
                  ? { ...comment, upvotes: comment.upvotes + 1 }
                  : comment
              ),
            }
          : post
      )
    );
  };

  const handleCommentDelete = (postId, commentIndex) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: post.comments - 1,
              commentList: post.commentList.filter(
                (_, index) => index !== commentIndex
              ),
            }
          : post
      )
    );
  };

  return (
    <div>
      <h1>Communities</h1>
      <CommunityList
        communities={communities}
        onJoin={handleJoin}
        posts={posts}
        onLike={handleLike}
        onComment={handleComment}
        onCommentUpvote={handleCommentUpvote}
        onCommentDelete={handleCommentDelete}
      />
    </div>
  );
};

export default CommunityPage;
