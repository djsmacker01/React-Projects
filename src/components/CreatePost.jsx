import React, { useState, useEffect } from "react";
// import './CreatePost'

const CreatePost = () => {
  const [activeTab, setActiveTab] = useState("Text");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [file, setFile] = useState(null);
  const [posts, setPosts] = useState([]);
  const [drafts, setDrafts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  // Load posts and drafts from localStorage on component mount
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const savedDrafts = JSON.parse(localStorage.getItem("drafts")) || [];
    setPosts(savedPosts);
    setDrafts(savedDrafts);
  }, []);

  // Save posts and drafts to localStorage whenever they are updated
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
    localStorage.setItem("drafts", JSON.stringify(drafts));
  }, [posts, drafts]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const applyFormatting = (format) => {
    document.execCommand(format, false, null);
  };

  const handleSaveDraft = () => {
    const newDraft = { title, body, file, id: Date.now() };
    setDrafts([...drafts, newDraft]);
    resetForm();
  };

  const handlePost = () => {
    if (editingPost) {
      // If editing, update the existing post
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

  const handleEditPost = (post) => {
    setEditingPost(post);
    setTitle(post.title);
    setBody(post.body);
    setFile(post.file);
  };

  const handleDeletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleEditDraft = (draft) => {
    setEditingPost(draft);
    setTitle(draft.title);
    setBody(draft.body);
    setFile(draft.file);
  };

  const resetForm = () => {
    setTitle("");
    setBody("");
    setFile(null);
  };

  return (
    <div className="create-post">
      <h2>Create post</h2>

      <div className="tabs">
        <button onClick={() => handleTabClick("Text")}>Text</button>
        <button onClick={() => handleTabClick("Images & Video")}>
          Images & Video
        </button>
        <button onClick={() => handleTabClick("Link")}>Link</button>
        <button onClick={() => handleTabClick("Poll")}>Poll</button>
        <button onClick={() => handleTabClick("AMA")}>AMA</button>
      </div>

      {/* Conditional rendering based on the active tab */}
      {activeTab === "Text" && (
        <div>
          <input
            type="text"
            placeholder="Title*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div className="editor-controls">
            <button onClick={() => applyFormatting("bold")}>B</button>
            <button onClick={() => applyFormatting("italic")}>I</button>
            <button onClick={() => applyFormatting("underline")}>U</button>
          </div>
          <div
            className="body-editor"
            contentEditable
            onInput={(e) => setBody(e.currentTarget.innerHTML)}
            placeholder="Body"
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              minHeight: "100px",
            }}></div>
        </div>
      )}

      {activeTab === "Images & Video" && (
        <div>
          <input type="file" onChange={handleFileUpload} />
          {file && <p>Uploaded file: {file.name}</p>}
        </div>
      )}

      {/* Form action buttons */}
      <div className="form-actions">
        <button onClick={handleSaveDraft}>Save Draft</button>
        <button onClick={handlePost}>
          {editingPost ? "Update Post" : "Post"}
        </button>
      </div>

      {/* Display drafts */}
      <h3>Drafts</h3>
      <ul>
        {drafts.map((draft) => (
          <li key={draft.id}>
            <h4>{draft.title}</h4>
            <button onClick={() => handleEditDraft(draft)}>Edit Draft</button>
          </li>
        ))}
      </ul>

      {/* Display posts */}
      <h3>Posts</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h4>{post.title}</h4>
            <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
            <button onClick={() => handleEditPost(post)}>Edit Post</button>
            <button onClick={() => handleDeletePost(post.id)}>
              Delete Post
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreatePost;
