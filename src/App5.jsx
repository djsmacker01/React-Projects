import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activeTab, setActiveTab] = useState("Text");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    strikethrough: false,
  });

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleFormatting = (type) => {
    setFormatting({ ...formatting, [type]: !formatting[type] });
  };

  const handleSaveDraft = () => {
    alert("Draft saved!");
    // Add logic to save draft
  };

  const handlePost = () => {
    alert("Post submitted!");
    // Add logic to submit the post
  };

  return (
    <div className="container">
      <h2>Create Post</h2>
      <div className="tabs">
        {["Text", "Images & Video", "Link", "Poll", "AMA"].map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => handleTabClick(tab)}>
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Text" && (
        <div className="post-form">
          <input
            type="text"
            placeholder="Title*"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className="tag-section">
            <input
              type="text"
              placeholder="Add tags"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value) {
                  setTags([...tags, e.target.value]);
                  e.target.value = "";
                }
              }}
            />
            <div className="tags">
              {tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="formatting-buttons">
            <button
              onClick={() => toggleFormatting("bold")}
              className={formatting.bold ? "active" : ""}>
              B
            </button>
            <button
              onClick={() => toggleFormatting("italic")}
              className={formatting.italic ? "active" : ""}>
              I
            </button>
            <button
              onClick={() => toggleFormatting("strikethrough")}
              className={formatting.strikethrough ? "active" : ""}>
              S
            </button>
          </div>

          <textarea
            style={{
              fontWeight: formatting.bold ? "bold" : "normal",
              fontStyle: formatting.italic ? "italic" : "normal",
              textDecoration: formatting.strikethrough
                ? "line-through"
                : "none",
            }}
            placeholder="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />

          <div className="buttons">
            <button onClick={handleSaveDraft}>Save Draft</button>
            <button onClick={handlePost}>Post</button>
          </div>
        </div>
      )}

      {/* Add respective sections for other tabs */}
    </div>
  );
};

export default App;
