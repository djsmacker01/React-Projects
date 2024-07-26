// import React, { useState } from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Link,
//   useNavigate,
// } from "react-router-dom";
// import CommunityPage from "././components/Community/CommunityPage";
// import CommentPage from "././components/Community/CommentPage";
// import PostPage from "././components/Community/PostPage";
// import CreateCommunityPage from "././components/Community/CreateCommunityPage";
// import "./App.css";
// const App3 = () => {
//     const [isJoined, setIsJoined] = useState(false);
//     const [communities, setCommunities] = useState([]);
//     const [posts, setPosts] = useState([]);
//     const [selectedPost, setSelectedPost] = useState(null);

//     const handleJoin = () => {
//         setIsJoined(true);
//     };

//     const handleCreatePost = (content) => {
//         const newPost = {
//             id: posts.length + 1,
//             user: 'CurrentUser',
//             content,
//             time: 'Just now',
//             likes: 0,
//             dislikes: 0,
//             comments: [],
//         };
//         setPosts([newPost, ...posts]);
//     };

//     const handleLike = (postId) => {
//         setPosts(posts.map(post => post.id === postId ? { ...post, likes: post.likes + 1 } : post));
//     };

//     const handleDislike = (postId) => {
//         setPosts(posts.map(post => post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post));
//     };

//     const handleCreateComment = (postId, content) => {
//         const newComment = {
//             user: 'CurrentUser',
//             content,
//             time: 'Just now',
//         };
//         setPosts(posts.map(post => post.id === postId ? { ...post, comments: [newComment, ...post.comments] } : post));
//     };

//     const handlePostClick = (post) => {
//         setSelectedPost(post);
//         navigate('/comment');
//     };

//     const handleCreateCommunity = (communityName) => {
//         setCommunities([...communities, { name: communityName, posts: [] }]);
//     };

//     const navigate = useNavigate();

//     return (
//         <Router>
//             <div className="container">
//                 <Routes>
//                     <Route path="/create-community" element={<CreateCommunityPage onCreateCommunity={handleCreateCommunity} />} />
//                     <Route path="/community" element={
//                         <CommunityPage
//                             communityName="Toxicology"
//                             posts={posts}
//                             onJoin={handleJoin}
//                             onCreatePost={handleCreatePost}
//                             onLike={handleLike}
//                             onDislike={handleDislike}
//                             onCreateComment={handleCreateComment}
//                             isJoined={isJoined}
//                             onPostClick={handlePostClick}
//                         />
//                     } />
//                     {isJoined && (
//                         <Route path="/post" element={<PostPage onCreatePost={handleCreatePost} />} />
//                     )}
//                     {selectedPost && (
//                         <Route path="/comment" element={
//                             <CommentPage
//                                 post={selectedPost}
//                                 onComment={handleCreateComment}
//                                 onLike={handleLike}
//                                 onDislike={handleDislike}
//                             />
//                         } />
//                     )}
//                     <Route path="/" element={
//                         <div className="create-community-button">
//                             <Link to="/create-community">
//                                 <button>Create Community</button>
//                             </Link>
//                         </div>
//                     } />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };



// export default App3;

import React from "react";
import CommunityPage from "./";

function App() {
  return (
    <div className="App">
      <CommunityPage />
    </div>
  );
}

export default App;
