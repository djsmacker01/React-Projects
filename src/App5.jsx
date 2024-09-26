// import React, { useState } from "react";
// import "./App.css";



// const App5 = () => {
//   const [activeTab, setActiveTab] = useState("Text");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState([]);
//   const [formatting, setFormatting] = useState({
//     bold: false,
//     italic: false,
//     strikethrough: false,
//   });
//   const [images, setImages] = useState([]);
//   const [link, setLink] = useState("");
//   const [pollOptions, setPollOptions] = useState([""]);
//   const [amaQuestion, setAmaQuestion] = useState("");

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   // Function to handle image upload
//   const handleImageUpload = (e) => {
//     const uploadedImages = Array.from(e.target.files);
//     setImages([...images, ...uploadedImages]);
//   };

//   const handlePollChange = (index, value) => {
//     const updatedOptions = [...pollOptions];
//     updatedOptions[index] = value;
//     setPollOptions(updatedOptions);
//   };

//   const addPollOption = () => {
//     setPollOptions([...pollOptions, ""]);
//   };

//   const handleSaveDraft = () => {
//     const postData = {
//       title,
//       body,
//       tags,
//       images,
//       link,
//       pollOptions,
//       amaQuestion,
//     };
//     console.log("Draft saved:", postData);
//     alert("Draft saved!");
//   };

//   const handlePost = () => {
//     const postData = {
//       title,
//       body,
//       tags,
//       images,
//       link,
//       pollOptions,
//       amaQuestion,
//     };
//     console.log("Post submitted:", postData);
//     alert("Post submitted!");
//   };

//   return (
//     <div className="container">
//       <h2>Create Post</h2>
//       <div className="tabs">
//         {["Text", "Images & Video", "Link", "Poll", "AMA"].map((tab) => (
//           <button
//             key={tab}
//             className={`tab ${activeTab === tab ? "active" : ""}`}
//             onClick={() => handleTabClick(tab)}>
//             {tab}
//           </button>
//         ))}
//       </div>

//       {activeTab === "Text" && (
//         <div className="post-form">
//           <input
//             type="text"
//             placeholder="Title*"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <div className="tag-section">
//             <input
//               type="text"
//               placeholder="Add tags"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" && e.target.value) {
//                   setTags([...tags, e.target.value]);
//                   e.target.value = "";
//                 }
//               }}
//             />
//             <div className="tags">
//               {tags.map((tag, idx) => (
//                 <span key={idx} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
         

//           <div className="formatting-buttons">
//             <button
//               onClick={() => toggleFormatting("bold")}
//               className={formatting.bold ? "active" : ""}>B</button>
//             <button
//               onClick={() => toggleFormatting("italic")}
//               className={formatting.italic ? "active" : ""}>
//               I
//             </button>
//             <button
//               onClick={() => toggleFormatting("strikethrough")}
//               className={formatting.strikethrough ? "active" : ""}>
//               S
//             </button>
//           </div>

//           <textarea
//             style={{
//               fontWeight: formatting.bold ? "bold" : "normal",
//               fontStyle: formatting.italic ? "italic" : "normal",
//               textDecoration: formatting.strikethrough
//                 ? "line-through"
//                 : "none",
//             }}
//             placeholder="Body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//           />

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {activeTab === "Images & Video" && (
//         <div className="post-form">
//           <input
//             type="file"
//             accept="image/*,video/*"
//             multiple
//             onChange={handleImageUpload}
//           />
//           <div className="image-preview">
//             {images.length > 0 &&
//               images.map((image, idx) => (
//                 <div key={idx}>
//                   <p>{image.name}</p>
//                 </div>
//               ))}
//           </div>

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {activeTab === "Link" && (
//         <div className="post-form">
//           <input
//             type="text"
//             placeholder="Add a link"
//             value={link}
//             onChange={(e) => setLink(e.target.value)}
//           />

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {activeTab === "Poll" && (
//         <div className="post-form">
//           {pollOptions.map((option, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={`Option ${idx + 1}`}
//               value={option}
//               onChange={(e) => handlePollChange(idx, e.target.value)}
//             />
//           ))}
//           <button onClick={addPollOption}>Add another option</button>

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {activeTab === "AMA" && (
//         <div className="post-form">
//           <input
//             type="text"
//             placeholder="Ask me anything"
//             value={amaQuestion}
//             onChange={(e) => setAmaQuestion(e.target.value)}
//           />

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App5;


// import React, { useState } from "react";
// import "./App.css";

// const App5 = () => {
//   const [activeTab, setActiveTab] = useState("Text");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState([]);
//   const [formatting, setFormatting] = useState({
//     bold: false,
//     italic: false,
//     strikethrough: false,
//   });
//   const [images, setImages] = useState([]);
//   const [link, setLink] = useState("");
//   const [pollOptions, setPollOptions] = useState([""]);
//   const [amaQuestion, setAmaQuestion] = useState("");

//   // Toggle the formatting (bold, italic, strikethrough)
//   const toggleFormatting = (style) => {
//     setFormatting((prev) => ({
//       ...prev,
//       [style]: !prev[style],
//     }));
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   // Function to handle image upload
//   const handleImageUpload = (e) => {
//     const uploadedImages = Array.from(e.target.files);
//     setImages([...images, ...uploadedImages]);
//   };

//   const handlePollChange = (index, value) => {
//     const updatedOptions = [...pollOptions];
//     updatedOptions[index] = value;
//     setPollOptions(updatedOptions);
//   };

//   const addPollOption = () => {
//     setPollOptions([...pollOptions, ""]);
//   };

//   const handleSaveDraft = () => {
//     const postData = {
//       title,
//       body,
//       tags,
//       images,
//       link,
//       pollOptions,
//       amaQuestion,
//     };
//     console.log("Draft saved:", postData);
//     alert("Draft saved!");
//   };

//   const handlePost = () => {
//     const postData = {
//       title,
//       body,
//       tags,
//       images,
//       link,
//       pollOptions,
//       amaQuestion,
//     };
//     console.log("Post submitted:", postData);
//     alert("Post submitted!");
//   };

//   return (
//     <div className="container">
//       <h2>Create Post</h2>
//       <div className="tabs">
//         {["Text", "Images & Video", "Link", "Poll", "AMA"].map((tab) => (
//           <button
//             key={tab}
//             className={`tab ${activeTab === tab ? "active" : ""}`}
//             onClick={() => handleTabClick(tab)}>
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Text Tab */}
//       {activeTab === "Text" && (
//         <div className="post-form">
//           <input
//             type="text"
//             placeholder="Title*"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//           />

//           <div className="tag-section">
//             <input
//               type="text"
//               placeholder="Add tags"
//               onKeyDown={(e) => {
//                 if (e.key === "Enter" && e.target.value) {
//                   setTags([...tags, e.target.value]);
//                   e.target.value = "";
//                 }
//               }}
//             />
//             <div className="tags">
//               {tags.map((tag, idx) => (
//                 <span key={idx} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>

//           <div className="formatting-buttons">
//             <button
//               onClick={() => toggleFormatting("bold")}
//               className={formatting.bold ? "active" : ""}>
//               B
//             </button>
//             <button
//               onClick={() => toggleFormatting("italic")}
//               className={formatting.italic ? "active" : ""}>
//               I
//             </button>
//             <button
//               onClick={() => toggleFormatting("strikethrough")}
//               className={formatting.strikethrough ? "active" : ""}>
//               S
//             </button>
//           </div>

//           <textarea
//             style={{
//               fontWeight: formatting.bold ? "bold" : "normal",
//               fontStyle: formatting.italic ? "italic" : "normal",
//               textDecoration: formatting.strikethrough
//                 ? "line-through"
//                 : "none",
//             }}
//             placeholder="Body"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//           />

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {/* Images & Video Tab */}
//       {activeTab === "Images & Video" && (
//         <div className="post-form">
//           <input
//             type="file"
//             accept="image/*,video/*"
//             multiple
//             onChange={handleImageUpload}
//           />
//           <div className="image-preview">
//             {images.length > 0 &&
//               images.map((image, idx) => (
//                 <div key={idx}>
//                   <p>{image.name}</p>
//                 </div>
//               ))}
//           </div>

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {/* Link Tab */}
//       {activeTab === "Link" && (
//         <div className="post-form">
//           <input
//             type="text"
//             placeholder="Add a link"
//             value={link}
//             onChange={(e) => setLink(e.target.value)}
//           />

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {/* Poll Tab */}
//       {activeTab === "Poll" && (
//         <div className="post-form">
//           {pollOptions.map((option, idx) => (
//             <input
//               key={idx}
//               type="text"
//               placeholder={`Option ${idx + 1}`}
//               value={option}
//               onChange={(e) => handlePollChange(idx, e.target.value)}
//             />
//           ))}
//           <button onClick={addPollOption}>Add another option</button>

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}

//       {/* AMA Tab */}
//       {activeTab === "AMA" && (
//         <div className="post-form">
//           <input
//             type="text"
//             placeholder="Ask me anything"
//             value={amaQuestion}
//             onChange={(e) => setAmaQuestion(e.target.value)}
//           />

//           <div className="buttons">
//             <button onClick={handleSaveDraft}>Save Draft</button>
//             <button onClick={handlePost}>Post</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default App5;


// import React, { useState } from "react";
// import "./App.css";

// const App5 = () => {
//   const [activeTab, setActiveTab] = useState("Text");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState([]);
//   const [formatting, setFormatting] = useState({
//     bold: false,
//     italic: false,
//     strikethrough: false,
//   });
//   const [images, setImages] = useState([]);
//   const [link, setLink] = useState("");
//   const [pollOptions, setPollOptions] = useState([""]);
//   const [amaQuestion, setAmaQuestion] = useState("");
//   const [showForm, setShowForm] = useState(false); // New state for toggling the form

//   // Toggle the formatting (bold, italic, strikethrough)
//   const toggleFormatting = (style) => {
//     setFormatting((prev) => ({
//       ...prev,
//       [style]: !prev[style],
//     }));
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   // Function to handle image upload
//   const handleImageUpload = (e) => {
//     const uploadedImages = Array.from(e.target.files);
//     setImages([...images, ...uploadedImages]);
//   };

//   const handlePollChange = (index, value) => {
//     const updatedOptions = [...pollOptions];
//     updatedOptions[index] = value;
//     setPollOptions(updatedOptions);
//   };

//   const addPollOption = () => {
//     setPollOptions([...pollOptions, ""]);
//   };

//   const handleSaveDraft = () => {
//     const postData = {
//       title,
//       body,
//       tags,
//       images,
//       link,
//       pollOptions,
//       amaQuestion,
//     };
//     console.log("Draft saved:", postData);
//     alert("Draft saved!");
//   };

//   const handlePost = () => {
//     const postData = {
//       title,
//       body,
//       tags,
//       images,
//       link,
//       pollOptions,
//       amaQuestion,
//     };
//     console.log("Post submitted:", postData);
//     alert("Post submitted!");
//   };

//   return (
//     <div className="container">
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="create-post-button">
//         {showForm ? "Close Post Form" : "Create Post"}
//       </button>

//       {showForm && (
//         <div className="create-post-form">
//           <h2>Create Post</h2>
//           <div className="tabs">
//             {["Text", "Images & Video", "Link", "Poll", "AMA"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`tab ${activeTab === tab ? "active" : ""}`}
//                 onClick={() => handleTabClick(tab)}>
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Text Tab */}
//           {activeTab === "Text" && (
//             <div className="post-form">
//               <input
//                 type="text"
//                 placeholder="Title*"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />

//               <div className="tag-section">
//                 <input
//                   type="text"
//                   placeholder="Add tags"
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" && e.target.value) {
//                       setTags([...tags, e.target.value]);
//                       e.target.value = "";
//                     }
//                   }}
//                 />
//                 <div className="tags">
//                   {tags.map((tag, idx) => (
//                     <span key={idx} className="tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="formatting-buttons">
//                 <button
//                   onClick={() => toggleFormatting("bold")}
//                   className={formatting.bold ? "active" : ""}>
//                   B
//                 </button>
//                 <button
//                   onClick={() => toggleFormatting("italic")}
//                   className={formatting.italic ? "active" : ""}>
//                   I
//                 </button>
//                 <button
//                   onClick={() => toggleFormatting("strikethrough")}
//                   className={formatting.strikethrough ? "active" : ""}>
//                   S
//                 </button>
//               </div>

//               <textarea
//                 style={{
//                   fontWeight: formatting.bold ? "bold" : "normal",
//                   fontStyle: formatting.italic ? "italic" : "normal",
//                   textDecoration: formatting.strikethrough
//                     ? "line-through"
//                     : "none",
//                 }}
//                 placeholder="Body"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//               />

//               <div className="buttons">
//                 <button onClick={handleSaveDraft}>Save Draft</button>
//                 <button onClick={handlePost}>Post</button>
//               </div>
//             </div>
//           )}

//           {/* Images & Video Tab */}
//           {activeTab === "Images & Video" && (
//             <div className="post-form">
//               <input
//                 type="file"
//                 accept="image/*,video/*"
//                 multiple
//                 onChange={handleImageUpload}
//               />
//               <div className="image-preview">
//                 {images.length > 0 &&
//                   images.map((image, idx) => (
//                     <div key={idx}>
//                       <p>{image.name}</p>
//                     </div>
//                   ))}
//               </div>

//               <div className="buttons">
//                 <button onClick={handleSaveDraft}>Save Draft</button>
//                 <button onClick={handlePost}>Post</button>
//               </div>
//             </div>
//           )}

//           {/* Link Tab */}
//           {activeTab === "Link" && (
//             <div className="post-form">
//               <input
//                 type="text"
//                 placeholder="Add a link"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//               />

//               <div className="buttons">
//                 <button onClick={handleSaveDraft}>Save Draft</button>
//                 <button onClick={handlePost}>Post</button>
//               </div>
//             </div>
//           )}

//           {/* Poll Tab */}
//           {activeTab === "Poll" && (
//             <div className="post-form">
//               {pollOptions.map((option, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={`Option ${idx + 1}`}
//                   value={option}
//                   onChange={(e) => handlePollChange(idx, e.target.value)}
//                 />
//               ))}
//               <button onClick={addPollOption}>Add another option</button>

//               <div className="buttons">
//                 <button onClick={handleSaveDraft}>Save Draft</button>
//                 <button onClick={handlePost}>Post</button>
//               </div>
//             </div>
//           )}

//           {/* AMA Tab */}
//           {activeTab === "AMA" && (
//             <div className="post-form">
//               <input
//                 type="text"
//                 placeholder="Ask me anything"
//                 value={amaQuestion}
//                 onChange={(e) => setAmaQuestion(e.target.value)}
//               />

//               <div className="buttons">
//                 <button onClick={handleSaveDraft}>Save Draft</button>
//                 <button onClick={handlePost}>Post</button>
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default App5;

import React, { useState } from "react";
import "./App.css";

const App5 = () => {
  const [activeTab, setActiveTab] = useState("Text");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formatting, setFormatting] = useState({
    bold: false,
    italic: false,
    strikethrough: false,
  });
  const [images, setImages] = useState([]);
  const [link, setLink] = useState("");
  const [pollOptions, setPollOptions] = useState([""]);
  const [amaQuestion, setAmaQuestion] = useState("");
  const [showForm, setShowForm] = useState(false); // State for toggling the form
  const [posts, setPosts] = useState([]); // State to store posts
  const [editingPostIndex, setEditingPostIndex] = useState(null); // State to track which post is being edited

  // Toggle the formatting (bold, italic, strikethrough)
  const toggleFormatting = (style) => {
    setFormatting((prev) => ({
      ...prev,
      [style]: !prev[style],
    }));
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const uploadedImages = Array.from(e.target.files);
    setImages([...images, ...uploadedImages]);
  };

  const handlePollChange = (index, value) => {
    const updatedOptions = [...pollOptions];
    updatedOptions[index] = value;
    setPollOptions(updatedOptions);
  };

  const addPollOption = () => {
    setPollOptions([...pollOptions, ""]);
  };

  const handleSaveDraft = () => {
    const postData = {
      title,
      body,
      tags,
      images,
      link,
      pollOptions,
      amaQuestion,
    };

    // If editing, update the post; otherwise, create a new post
    if (editingPostIndex !== null) {
      const updatedPosts = posts.map((post, index) =>
        index === editingPostIndex ? postData : post
      );
      setPosts(updatedPosts);
      setEditingPostIndex(null);
    } else {
      setPosts([...posts, postData]);
    }

    // Reset the form
    resetForm();
    alert(editingPostIndex !== null ? "Post updated!" : "Post created!");
  };

  const handleEditPost = (index) => {
    const post = posts[index];
    setTitle(post.title);
    setBody(post.body);
    setTags(post.tags);
    setImages(post.images);
    setLink(post.link);
    setPollOptions(post.pollOptions);
    setAmaQuestion(post.amaQuestion);
    setEditingPostIndex(index);
    setShowForm(true);
  };

  const handleDeletePost = (index) => {
    const updatedPosts = posts.filter((_, idx) => idx !== index);
    setPosts(updatedPosts);
  };

  const resetForm = () => {
    setTitle("");
    setBody("");
    setTags([]);
    setImages([]);
    setLink("");
    setPollOptions([""]);
    setAmaQuestion("");
    setFormatting({
      bold: false,
      italic: false,
      strikethrough: false,
    });
  };

  return (
    <div className="container">
      <button
        onClick={() => setShowForm(!showForm)}
        className="create-post-button">
        {showForm ? "Close Post Form" : "Create Post"}
      </button>

      {showForm && (
        <div className="create-post-form">
          <h2>{editingPostIndex !== null ? "Edit Post" : "Create Post"}</h2>
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

          {/* Text Tab */}
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
              </div>
            </div>
          )}

          {/* Images & Video Tab */}
          {activeTab === "Images & Video" && (
            <div className="post-form">
              <input
                type="file"
                accept="image/*,video/*"
                multiple
                onChange={handleImageUpload}
              />
              <div className="image-preview">
                {images.length > 0 &&
                  images.map((image, idx) => (
                    <div key={idx}>
                      <p>{image.name}</p>
                    </div>
                  ))}
              </div>

              <div className="buttons">
                <button onClick={handleSaveDraft}>Save Draft</button>
              </div>
            </div>
          )}

          {/* Link Tab */}
          {activeTab === "Link" && (
            <div className="post-form">
              <input
                type="text"
                placeholder="Add a link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />

              <div className="buttons">
                <button onClick={handleSaveDraft}>Save Draft</button>
              </div>
            </div>
          )}

          {/* Poll Tab */}
          {activeTab === "Poll" && (
            <div className="post-form">
              {pollOptions.map((option, idx) => (
                <input
                  key={idx}
                  type="text"
                  placeholder={`Option ${idx + 1}`}
                  value={option}
                  onChange={(e) => handlePollChange(idx, e.target.value)}
                />
              ))}
              <button onClick={addPollOption}>Add another option</button>

              <div className="buttons">
                <button onClick={handleSaveDraft}>Save Draft</button>
              </div>
            </div>
          )}

          {/* AMA Tab */}
          {activeTab === "AMA" && (
            <div className="post-form">
              <input
                type="text"
                placeholder="Ask me anything"
                value={amaQuestion}
                onChange={(e) => setAmaQuestion(e.target.value)}
              />

              <div className="buttons">
                <button onClick={handleSaveDraft}>Save Draft</button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Display Posts */}
      <div className="posts-section">
        <h2>Posts</h2>
        {posts.length === 0 && <p>No posts available.</p>}
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <div className="post-tags">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="tag">
                  {tag}
                </span>
              ))}
            </div>
            <div className="buttons">
              <button onClick={() => handleEditPost(index)}>Edit</button>
              <button onClick={() => handleDeletePost(index)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App5;




// import React, { useState } from "react";
// import "./App.css";

// const App5 = () => {
//   const [activeTab, setActiveTab] = useState("Text");
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [tags, setTags] = useState([]);
//   const [formatting, setFormatting] = useState({
//     bold: false,
//     italic: false,
//     strikethrough: false,
//   });
//   const [mediaFiles, setMediaFiles] = useState([]); // Will contain both images and videos
//   const [link, setLink] = useState("");
//   const [pollOptions, setPollOptions] = useState([""]);
//   const [amaQuestion, setAmaQuestion] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [editingPostIndex, setEditingPostIndex] = useState(null);

//   const toggleFormatting = (style) => {
//     setFormatting((prev) => ({
//       ...prev,
//       [style]: !prev[style],
//     }));
//   };

//   const handleTabClick = (tab) => {
//     setActiveTab(tab);
//   };

//   const handleMediaUpload = (e) => {
//     const uploadedFiles = Array.from(e.target.files);
//     const validMedia = uploadedFiles.filter(
//       (file) => file.type.startsWith("image/") || file.type.startsWith("video/")
//     );
//     setMediaFiles([...mediaFiles, ...validMedia]);
//   };

//   const handleRemoveMedia = (index) => {
//     setMediaFiles(mediaFiles.filter((_, idx) => idx !== index));
//   };

//   const handlePollChange = (index, value) => {
//     const updatedOptions = [...pollOptions];
//     updatedOptions[index] = value;
//     setPollOptions(updatedOptions);
//   };

//   const addPollOption = () => {
//     setPollOptions([...pollOptions, ""]);
//   };

//   const handleSaveDraft = () => {
//     const postData = {
//       title,
//       body,
//       tags,
//       mediaFiles,
//       link,
//       pollOptions,
//       amaQuestion,
//     };

//     if (editingPostIndex !== null) {
//       const updatedPosts = posts.map((post, index) =>
//         index === editingPostIndex ? postData : post
//       );
//       setPosts(updatedPosts);
//       setEditingPostIndex(null);
//     } else {
//       setPosts([...posts, postData]);
//     }

//     resetForm();
//     alert(editingPostIndex !== null ? "Post updated!" : "Post created!");
//   };

//   const handleEditPost = (index) => {
//     const post = posts[index];
//     setTitle(post.title);
//     setBody(post.body);
//     setTags(post.tags);
//     setMediaFiles(post.mediaFiles);
//     setLink(post.link);
//     setPollOptions(post.pollOptions);
//     setAmaQuestion(post.amaQuestion);
//     setEditingPostIndex(index);
//     setShowForm(true);
//   };

//   const handleDeletePost = (index) => {
//     const updatedPosts = posts.filter((_, idx) => idx !== index);
//     setPosts(updatedPosts);
//   };

//   const resetForm = () => {
//     setTitle("");
//     setBody("");
//     setTags([]);
//     setMediaFiles([]);
//     setLink("");
//     setPollOptions([""]);
//     setAmaQuestion("");
//     setFormatting({
//       bold: false,
//       italic: false,
//       strikethrough: false,
//     });
//     setActiveTab("Text"); // Reset to Text tab
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleSaveDraft();
//   };

//   return (
//     <div className="container">
//       <button
//         onClick={() => setShowForm(!showForm)}
//         className="create-post-button">
//         {showForm ? "Close Post Form" : "Create Post"}
//       </button>

//       {showForm && (
//         <form onSubmit={handleSubmit}>
//           <h2>{editingPostIndex !== null ? "Edit Post" : "Create Post"}</h2>
//           <div className="tabs">
//             {["Text", "Images & Video", "Link", "Poll", "AMA"].map((tab) => (
//               <button
//                 key={tab}
//                 className={`tab ${activeTab === tab ? "active" : ""}`}
//                 onClick={() => handleTabClick(tab)}>
//                 {tab}
//               </button>
//             ))}
//           </div>

//           {/* Text Tab */}
//           {activeTab === "Text" && (
//             <div className="post-form">
//               <input
//                 type="text"
//                 placeholder="Title*"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//                 required
//               />

//               <div className="tag-section">
//                 <input
//                   type="text"
//                   placeholder="Add tags"
//                   onKeyDown={(e) => {
//                     if (e.key === "Enter" && e.target.value) {
//                       setTags([...tags, e.target.value]);
//                       e.target.value = "";
//                     }
//                   }}
//                 />
//                 <div className="tags">
//                   {tags.map((tag, idx) => (
//                     <span key={idx} className="tag">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div className="formatting-buttons">
//                 <button
//                   type="button"
//                   onClick={() => toggleFormatting("bold")}
//                   className={formatting.bold ? "active" : ""}>
//                   B
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => toggleFormatting("italic")}
//                   className={formatting.italic ? "active" : ""}>
//                   I
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => toggleFormatting("strikethrough")}
//                   className={formatting.strikethrough ? "active" : ""}>
//                   S
//                 </button>
//               </div>

//               <textarea
//                 style={{
//                   fontWeight: formatting.bold ? "bold" : "normal",
//                   fontStyle: formatting.italic ? "italic" : "normal",
//                   textDecoration: formatting.strikethrough
//                     ? "line-through"
//                     : "none",
//                 }}
//                 placeholder="Body"
//                 value={body}
//                 onChange={(e) => setBody(e.target.value)}
//                 required
//               />

//               <div className="buttons">
//                 <button type="submit">Save Draft</button>
//               </div>
//             </div>
//           )}

//           {/* Images & Video Tab */}
//           {activeTab === "Images & Video" && (
//             <div className="post-form">
//               <input
//                 type="file"
//                 accept="image/*,video/*"
//                 multiple
//                 onChange={handleMediaUpload}
//               />
//               <div className="media-preview">
//                 {mediaFiles.length > 0 &&
//                   mediaFiles.map((file, idx) => (
//                     <div key={idx} className="media-preview-item">
//                       {file.type.startsWith("image/") && (
//                         <img
//                           src={URL.createObjectURL(file)}
//                           alt={file.name}
//                           width="100"
//                         />
//                       )}
//                       {file.type.startsWith("video/") && (
//                         <video width="100" controls>
//                           <source src={URL.createObjectURL(file)} />
//                         </video>
//                       )}
//                       <button onClick={() => handleRemoveMedia(idx)}>
//                         Remove
//                       </button>
//                     </div>
//                   ))}
//               </div>

//               <div className="buttons">
//                 <button type="submit">Submit Post</button>
//               </div>
//             </div>
//           )}

//           {/* Link Tab */}
//           {activeTab === "Link" && (
//             <div className="post-form">
//               <input
//                 type="text"
//                 placeholder="Add a link"
//                 value={link}
//                 onChange={(e) => setLink(e.target.value)}
//                 required
//               />

//               <div className="buttons">
//                 <button type="submit">Submit Post</button>
//               </div>
//             </div>
//           )}

//           {/* Poll Tab */}
//           {activeTab === "Poll" && (
//             <div className="post-form">
//               {pollOptions.map((option, idx) => (
//                 <input
//                   key={idx}
//                   type="text"
//                   placeholder={`Option ${idx + 1}`}
//                   value={option}
//                   onChange={(e) => handlePollChange(idx, e.target.value)}
//                   required
//                 />
//               ))}
//               <button type="button" onClick={addPollOption}>
//                 Add another option
//               </button>

//               <div className="buttons">
//                 <button type="submit">Submit Post</button>
//               </div>
//             </div>
//           )}

//           {/* AMA Tab */}
//           {activeTab === "AMA" && (
//             <div className="post-form">
//               <input
//                 type="text"
//                 placeholder="Ask me anything"
//                 value={amaQuestion}
//                 onChange={(e) => setAmaQuestion(e.target.value)}
//                 required
//               />

//               <div className="buttons">
//                 <button type="submit">Submit Post</button>
//               </div>
//             </div>
//           )}
//         </form>
//       )}

//       {/* Display Posts */}
//       <div className="posts-section">
//         <h2>Posts</h2>
//         {posts.length === 0 && <p>No posts available.</p>}
//         {posts.map((post, index) => (
//           <div key={index} className="post">
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//             <div className="post-tags">
//               {post.tags.map((tag, idx) => (
//                 <span key={idx} className="tag">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             {post.mediaFiles.length > 0 && (
//               <div className="media-preview">
//                 {post.mediaFiles.map((file, idx) => (
//                   <div key={idx}>
//                     {file.type.startsWith("image/") && (
//                       <img src={URL.createObjectURL(file)} alt={file.name} />
//                     )}
//                     {file.type.startsWith("video/") && (
//                       <video width="100" controls>
//                         <source src={URL.createObjectURL(file)} />
//                       </video>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             )}
//             {post.link && (
//               <div className="post-link">
//                 <a href={post.link} target="_blank" rel="noopener noreferrer">
//                   {post.link}
//                 </a>
//               </div>
//             )}
//             {post.pollOptions.length > 0 && (
//               <div className="post-poll">
//                 {post.pollOptions.map((option, idx) => (
//                   <p key={idx}>{option}</p>
//                 ))}
//               </div>
//             )}
//             {post.amaQuestion && (
//               <div className="post-ama">
//                 <p>AMA Question: {post.amaQuestion}</p>
//               </div>
//             )}
//             <div className="buttons">
//               <button onClick={() => handleEditPost(index)}>Edit</button>
//               <button onClick={() => handleDeletePost(index)}>Delete</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App5;
