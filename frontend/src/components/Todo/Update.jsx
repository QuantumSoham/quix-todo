import React, { useState } from 'react';
import './Update.css';
import { toast } from 'react-toastify';

const Update = ({ show, onClose, onUpdate, initialTitle, initialBody }) => {
  const [title, setTitle] = useState(initialTitle || '');
  const [body, setBody] = useState(initialBody || '');

  if (!show) return null;

  const handleUpdate = () => {
    if (title.trim() === '' || body.trim() === '') {
      toast.error('Please fill all fields');
      return;
    }
    onUpdate({ title, body });
    toast.success('Todo updated successfully!');
    onClose();
  };

  return (
    <div className="update-modal-overlay">
      <div className="update-modal">
        <h3>Update Todo</h3>
        <input
          type="text"
          className="update-input"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="update-textarea"
          placeholder="Body"
          value={body}
          onChange={e => setBody(e.target.value)}
        />
        <div className="update-modal-actions">
          <button className="update-btn" onClick={handleUpdate}>Update</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Update;
