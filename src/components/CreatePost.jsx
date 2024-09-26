import React, { useState, useEffect } from "react";
// import "./App.css"; // You can style this as needed

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    // Load saved posts from localStorage on component mount
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  useEffect(() => {
    // Save posts to localStorage whenever they change
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const handleFileChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  const handlePost = () => {
    if (!title || !body) {
      alert("Title and Body are required to post!");
      return;
    }
    if (editingPost) {
      const updatedPosts = posts.map((post) =>
        post.id === editingPost.id
          ? { ...editingPost, title, body, file }
          : post
      );
      setPosts(updatedPosts);
      setEditingPost(null);
    } else {
      const newPost = { title, body, file, id: Date.now() };
      setPosts([...posts, newPost]);
    }
    resetForm();
  };

  const handleDelete = (id) => {
    const filteredPosts = posts.filter((post) => post.id !== id);
    setPosts(filteredPosts);
  };

  const resetForm = () => {
    setTitle("");
    setBody("");
    setFile(null);
    setEditingPost(null);
  };

  return (
    <div className="container">
      <div className="post-creator">
        <h2>Create Post</h2>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Write your post here..."></textarea>

        <div className="file-input">
          <label htmlFor="file">Upload Image/Video</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>

        <button onClick={handlePost}>
          {editingPost ? "Update Post" : "Post"}
        </button>
      </div>

      <div className="posts-list">
        <h2>Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post.id} className="post">
              <h3>{post.title}</h3>
              <p>{post.body}</p>
              {post.file && (
                <img src={post.file} alt="uploaded content" width="200px" />
              )}
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              <button onClick={() => setEditingPost(post)}>Edit</button>
            </div>
          ))
        ) : (
          <p>No posts available.</p>
        )}
      </div>
    </div>
  );
};

export default CreatePost;
