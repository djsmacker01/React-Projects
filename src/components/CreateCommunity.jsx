// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// const CommunityPage = ({ communities }) => {
//   const { title } = useParams();
//   const community = communities.find((c) => c.title === title);
//   const [joined, setJoined] = useState(false);
//   const [posts, setPosts] = useState([]);
//   const [newPost, setNewPost] = useState("");

//   const handleJoin = () => {
//     setJoined(true);
//   };

//   const handlePostSubmit = (e) => {
//     e.preventDefault();
//     setPosts([
//       ...posts,
//       {
//         content: newPost,
//         user: "CurrentUser",
//         time: new Date().toLocaleString(),
//       },
//     ]);
//     setNewPost("");
//   };

//   if (!community) {
//     return <div>Community not found</div>;
//   }

//   return (
//     <div style={styles.container}>
//       <div style={styles.header}>
//         <h1>{community.title}</h1>
//         {!joined && (
//           <button onClick={handleJoin} style={styles.joinButton}>
//             Join
//           </button>
//         )}
//       </div>
//       <div>
//         {posts.map((post, index) => (
//           <div key={index} style={styles.post}>
//             <div style={styles.postHeader}>
//               <strong>{post.user}</strong> <span>{post.time}</span>
//             </div>
//             <p>{post.content}</p>
//           </div>
//         ))}
//       </div>
//       {joined && (
//         <form onSubmit={handlePostSubmit} style={styles.form}>
//           <textarea
//             value={newPost}
//             onChange={(e) => setNewPost(e.target.value)}
//             style={styles.textarea}
//             required
//           />
//           <button type="submit" style={styles.postButton}>
//             Post
//           </button>
//         </form>
//       )}
//     </div>
//   );
// };

// const styles = {
//   container: {
//     padding: "20px",
//     maxWidth: "600px",
//     margin: "0 auto",
//   },
//   header: {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   joinButton: {
//     padding: "10px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
//   post: {
//     padding: "10px",
//     borderBottom: "1px solid #ccc",
//     marginBottom: "10px",
//   },
//   postHeader: {
//     display: "flex",
//     justifyContent: "space-between",
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//   },
//   textarea: {
//     padding: "10px",
//     marginBottom: "10px",
//     borderRadius: "4px",
//     border: "1px solid #ccc",
//   },
//   postButton: {
//     padding: "10px",
//     backgroundColor: "#4CAF50",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//   },
// };

// export default CommunityPage;

// CreateCommunity.js
import React, { useState } from "react";
import '../components/communityToggle.css'
const CreateCommunity = ({ onCreate }) => {
  const [title, setTitle] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [rule1, setRule1] = useState("");
  const [rule2, setRule2] = useState("");
  const [rule3, setRule3] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommunity = {
      title,
      creationDate,
      rule1,
      rule2,
      rule3,
      thumbnail,
    };
    onCreate(newCommunity);
  };

  const handleFileChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  return (
    <div style={styles.container}>
      <h1>Create Community</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>
          Community Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Creation Date
          <input
            type="date"
            value={creationDate}
            onChange={(e) => setCreationDate(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Thumbnail Photo
          <input
            type="file"
            onChange={handleFileChange}
            style={styles.input}
            accept="image/*"
          />
        </label>
        <label style={styles.label}>
          Rule 1
          <input
            type="text"
            value={rule1}
            onChange={(e) => setRule1(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Rule 2
          <input
            type="text"
            value={rule2}
            onChange={(e) => setRule2(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <label style={styles.label}>
          Rule 3
          <input
            type="text"
            value={rule3}
            onChange={(e) => setRule3(e.target.value)}
            style={styles.input}
            required
          />
        </label>
        <button type="submit" style={styles.button}>
          Create Community
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "10px",
  },
  input: {
    padding: "8px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CreateCommunity;
