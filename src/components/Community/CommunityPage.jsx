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

// CommunityPage.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const CommunityPage = ({ communities }) => {
  const { title } = useParams();
  const community = communities.find((c) => c.title === title);
  const [joined, setJoined] = useState(false);
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handleJoin = () => {
    setJoined(true);
  };

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        content: newPost,
        user: "CurrentUser",
        time: new Date().toLocaleString(),
      },
    ]);
    setNewPost("");
  };

  if (!community) {
    return <div>Community not found</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1>{community.title}</h1>
        {!joined && (
          <button onClick={handleJoin} style={styles.joinButton}>
            Join
          </button>
        )}
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index} style={styles.post}>
            <div style={styles.postHeader}>
              <strong>{post.user}</strong> <span>{post.time}</span>
            </div>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      {joined && (
        <form onSubmit={handlePostSubmit} style={styles.form}>
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            style={styles.textarea}
            required
          />
          <button type="submit" style={styles.postButton}>
            Post
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  joinButton: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  post: {
    padding: "10px",
    borderBottom: "1px solid #ccc",
    marginBottom: "10px",
  },
  postHeader: {
    display: "flex",
    justifyContent: "space-between",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  postButton: {
    padding: "10px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default CommunityPage;
