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
    console.log("Draft saved:", postData);
    alert("Draft saved!");
  };

  const handlePost = () => {
    const postData = {
      title,
      body,
      tags,
      images,
      link,
      pollOptions,
      amaQuestion,
    };
    console.log("Post submitted:", postData);
    alert("Post submitted!");
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
            <button onClick={handlePost}>Post</button>
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
            <button onClick={handlePost}>Post</button>
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
            <button onClick={handlePost}>Post</button>
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
            <button onClick={handlePost}>Post</button>
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
            <button onClick={handlePost}>Post</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App5;
