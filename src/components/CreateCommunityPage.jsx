
// import React, { useState } from "react";

// const CreateCommunityPage = () => {
//   const [communityTitle, setCommunityTitle] = useState("");
//   const [creationDate, setCreationDate] = useState("");
//   const [rules, setRules] = useState(["", "", ""]);
//   const [thumbnail, setThumbnail] = useState(null);

//   const handleRuleChange = (index, value) => {
//     const newRules = [...rules];
//     newRules[index] = value;
//     setRules(newRules);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission
//     console.log({
//       communityTitle,
//       creationDate,
//       rules,
//       thumbnail,
//     });
//   };

//   const handleThumbnailChange = (e) => {
//     setThumbnail(e.target.files[0]);
//   };

//   return (
//     <div className="create-community">
//       <h1>Create Community</h1>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Community Title</label>
//           <input
//             type="text"
//             value={communityTitle}
//             onChange={(e) => setCommunityTitle(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Creation Date</label>
//           <input
//             type="date"
//             value={creationDate}
//             onChange={(e) => setCreationDate(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>Thumbnail Photo</label>
//           <input type="file" onChange={handleThumbnailChange} />
//         </div>
//         {rules.map((rule, index) => (
//           <div key={index}>
//             <label>Rule {index + 1}</label>
//             <input
//               type="text"
//               value={rule}
//               onChange={(e) => handleRuleChange(index, e.target.value)}
//             />
//           </div>
//         ))}
//         <button type="submit">Create Community</button>
//       </form>
//     </div>
//   );
// };

// export default CreateCommunityPage;


import React, { useState } from "react";
import { useCommunity } from "../../CommunityContext";

const CreateCommunityPage = () => {
  const [communityTitle, setCommunityTitle] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [rules, setRules] = useState(["", "", ""]);
  const [thumbnail, setThumbnail] = useState(null);

  const { addCommunity } = useCommunity();

  const handleRuleChange = (index, value) => {
    const newRules = [...rules];
    newRules[index] = value;
    setRules(newRules);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCommunity = {
      title: communityTitle,
      creationDate,
      rules,
      thumbnail,
      posts: [],
    };
    addCommunity(newCommunity);
    setCommunityTitle("");
    setCreationDate("");
    setRules(["", "", ""]);
    setThumbnail(null);
  };

  const handleThumbnailChange = (e) => {
    setThumbnail(e.target.files[0]);
  };

  return (
    <div className="create-community">
      <h1>Create Community</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Community Title</label>
          <input
            type="text"
            value={communityTitle}
            onChange={(e) => setCommunityTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Creation Date</label>
          <input
            type="date"
            value={creationDate}
            onChange={(e) => setCreationDate(e.target.value)}
          />
        </div>
        <div>
          <label>Thumbnail Photo</label>
          <input type="file" onChange={handleThumbnailChange} />
        </div>
        {rules.map((rule, index) => (
          <div key={index}>
            <label>Rule {index + 1}</label>
            <input
              type="text"
              value={rule}
              onChange={(e) => handleRuleChange(index, e.target.value)}
            />
          </div>
        ))}
        <button type="submit">Create Community</button>
      </form>
    </div>
  );
};

export default CreateCommunityPage;
