import React, { useState } from 'react';
import Select from 'react-select';
import './App.css';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    tags: [],
    content: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const maxContentLength = 300; // Set a character limit for the content field

  // Options for tags
  const tagOptions = [
    { value: 'physics', label: 'Physics' },
    { value: 'philosophy', label: 'Philosophy' },
    { value: 'love', label: 'Love' },
    { value: 'science', label: 'Science' },
    { value: 'psychology', label: 'Psychology' }
  ];

  // Toggle the form visibility
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle tag changes from react-select
  const handleTagChange = (selectedOptions) => {
    setFormData({ ...formData, tags: selectedOptions });
  };

  // Validate form fields
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.title) tempErrors.title = 'Title is required';
    if (!formData.content) tempErrors.content = 'Content is required';
    else if (formData.content.length > maxContentLength) {
      tempErrors.content = `Content cannot exceed ${maxContentLength} characters`;
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        // Simulate an API call using fetch
        const response = await fetch('https://api.example.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            title: formData.title,
            tags: formData.tags.map(tag => tag.value), // Send tag values, not label
            content: formData.content,
          }),
        });
        
        if (response.ok) {
          console.log('Post submitted successfully');
          alert('Post submitted successfully!');
          // Reset form after submission
          setFormData({ title: '', tags: [], content: '' });
          setErrors({});
        } else {
          alert('Failed to submit post. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting post:', error);
        alert('Failed to submit post. Please check your network.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="App">
      <button onClick={toggleForm} className="toggle-button">
        {showForm ? 'Close' : 'Create a Post'}
      </button>

      {showForm && (
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={errors.title ? 'input-error' : ''}
              placeholder="Enter title..."
            />
            {errors.title && <span className="error-message">{errors.title}</span>}
          </div>

          <div className="form-group">
            <label>Tags</label>
            <Select
              isMulti
              name="tags"
              options={tagOptions}
              value={formData.tags}
              onChange={handleTagChange}
              placeholder="Select tags..."
              className={errors.tags ? 'input-error' : ''}
            />
          </div>

          <div className="form-group">
            <label>Content</label>
            <textarea
              name="content"
              value={formData.content}
              onChange={handleChange}
              className={errors.content ? 'input-error' : ''}
              placeholder="Enter content..."
            ></textarea>
            <div className="word-count">{formData.content.length}/{maxContentLength} characters</div>
            {errors.content && <span className="error-message">{errors.content}</span>}
          </div>

          <div className="form-buttons">
            <button type="submit" className="submit-button" disabled={isSubmitting}>
              {isSubmitting ? 'Posting...' : 'Post'}
            </button>
            <button
              type="button"
              className="save-draft-button"
              onClick={() => setFormData({ title: '', tags: [], content: '' })}
            >
              Save Draft
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default App;
