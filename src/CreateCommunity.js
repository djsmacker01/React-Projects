// src/components/CreateCommunity.js
import React from 'react';
import './CreateCommunity.css';

const CreateCommunity = () => {
  return (
    <div className="create-community-container">
      <h1>Create Community</h1>
      <form>
        <div className="form-group">
          <label htmlFor="communityTitle">Community Title</label>
          <input type="text" id="communityTitle" name="communityTitle" />
        </div>
        <div className="form-group">
          <label htmlFor="creationDate">Creation Date</label>
          <input type="date" id="creationDate" name="creationDate" defaultValue="2024-06-14" />
        </div>
        <div className="form-group">
          <label htmlFor="thumbnailPhoto">Thumbnail Photo</label>
          <input type="text" id="thumbnailPhoto" name="thumbnailPhoto" />
        </div>
        <div className="form-group">
          <label htmlFor="rule1">Rule 1</label>
          <input type="text" id="rule1" name="rule1" />
        </div>
        <div className="form-group">
          <label htmlFor="rule2">Rule 2</label>
          <input type="text" id="rule2" name="rule2" />
        </div>
        <div className="form-group">
          <label htmlFor="rule3">Rule 3</label>
          <input type="text" id="rule3" name="rule3" />
        </div>
        <button type="submit" className="create-community-button">Create Community</button>
      </form>
    </div>
  );
};

export default CreateCommunity;
