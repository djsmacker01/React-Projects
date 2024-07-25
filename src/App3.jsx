import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory,
} from "react-router-dom";
import CommunityPage from "./CommunityPage";
import CommentPage from "./CommentPage";
import PostPage from "./PostPage";
import CreateCommunityPage from "./CreateCommunityPage";

const App3 = () => {
  const [isJoined, setIsJoined] = useState(false);
  const [communities, setCommunities] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const handleJoin = () => {
    setIsJoined(true);
  };

  const handleCreatePost = (content) => {
    const newPost = {
      id: posts.length + 1,
      user: "CurrentUser",
      content,
      time: "Just now",
      likes: 0,
      dislikes: 0,
      comments: [],
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleDislike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, dislikes: post.dislikes + 1 } : post
      )
    );
  };

  const handleCreateComment = (postId, content) => {
    const newComment = {
      user: "CurrentUser",
      content,
      time: "Just now",
    };
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [newComment, ...post.comments] }
          : post
      )
    );
  };

  const handlePostClick = (post) => {
    setSelectedPost(post);
    history.push("/comment");
  };

  const handleCreateCommunity = (communityName) => {
    setCommunities([...communities, { name: communityName, posts: [] }]);
  };

  const history = useHistory();

  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create-community">
            <CreateCommunityPage onCreateCommunity={handleCreateCommunity} />
          </Route>
          <Route path="/community">
            <CommunityPage
              communityName="Toxicology"
              posts={posts}
              onJoin={handleJoin}
              onCreatePost={handleCreatePost}
              onLike={handleLike}
              onDislike={handleDislike}
              onCreateComment={handleCreateComment}
              isJoined={isJoined}
              onPostClick={handlePostClick}
            />
            {isJoined && (
              <Link to="/post">
                <button>Create New Post</button>
              </Link>
            )}
          </Route>
          <Route path="/comment">
            {selectedPost && (
              <CommentPage
                post={selectedPost}
                onComment={handleCreateComment}
                onLike={handleLike}
                onDislike={handleDislike}
              />
            )}
          </Route>
          <Route path="/post">
            <PostPage onCreatePost={handleCreatePost} />
          </Route>
          <Route path="/">
            <Link to="/create-community">
              <button>Create Community</button>
            </Link>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App3;
