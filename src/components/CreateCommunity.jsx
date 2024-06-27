import React, { useState } from "react";

const CreateCommunity = () => {
  const [title, setTitle] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [rule1, setRule1] = useState("");
  const [rule2, setRule2] = useState("");
  const [rule3, setRule3] = useState("");
  const [thumbnail, setThumbnail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle the form submission
    console.log({
      title,
      creationDate,
      rule1,
      rule2,
      rule3,
      thumbnail,
    });
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
