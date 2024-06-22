// // CreateCommunity.jsx
// import React, { useState } from "react";

// const CreateCommunity = () => {
//   const [title, setTitle] = useState("");
//   const [date, setDate] = useState("");
//   const [rule1, setRule1] = useState("");
//   const [rule2, setRule2] = useState("");
//   const [rule3, setRule3] = useState("");
//   const [thumbnail, setThumbnail] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log({
//       title,
//       date,
//       rule1,
//       rule2,
//       rule3,
//       thumbnail,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     setThumbnail(e.target.files[0]);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Community Title:</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Creation Date:</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Thumbnail Photo:</label>
//         <input type="file" onChange={handleThumbnailChange} accept="image/*" />
//       </div>
//       <div>
//         <label>Rule 1:</label>
//         <input
//           type="text"
//           value={rule1}
//           onChange={(e) => setRule1(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Rule 2:</label>
//         <input
//           type="text"
//           value={rule2}
//           onChange={(e) => setRule2(e.target.value)}
//           required
//         />
//       </div>
//       <div>
//         <label>Rule 3:</label>
//         <input
//           type="text"
//           value={rule3}
//           onChange={(e) => setRule3(e.target.value)}
//           required
//         />
//       </div>
//       <button type="submit">Create Community</button>
//     </form>
//   );
// };

// export default CreateCommunity;
// CreateCommunityModal.jsx
import React, { useState } from 'react';

const CreateCommunityModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [rule1, setRule1] = useState('');
  const [rule2, setRule2] = useState('');
  const [rule3, setRule3] = useState('');
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      title,
      date,
      rule1,
      rule2,
      rule3,
      thumbnail
    });
    onClose();
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>×</button>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Community Title:</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Creation Date:</label>
            <input 
              type="date" 
              value={date} 
              onChange={(e) => setDate(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Thumbnail Photo:</label>
            <input 
              type="file" 
              onChange={handleThumbnailChange} 
              accept="image/*"
            />
          </div>
          <div>
            <label>Rule 1:</label>
            <input 
              type="text" 
              value={rule1} 
              onChange={(e) => setRule1(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Rule 2:</label>
            <input 
              type="text" 
              value={rule2} 
              onChange={(e) => setRule2(e.target.value)} 
              required 
            />
          </div>
          <div>
            <label>Rule 3:</label>
            <input 
              type="text" 
              value={rule3} 
              onChange={(e) => setRule3(e.target.value)} 
              required 
            />
          </div>
          <button type="submit">Create Community</button>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunityModal;
