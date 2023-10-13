// EditPost.js

import React, { useState } from 'react';
import {
  EditPostDisplay,
  EditPostContainer,
  Header,
  FormContainer,
} from '../styles/EditPostStyles';

function EditPost({ onClose, postData }) {
  const [descriptionData, setDescription] = useState(postData.description);

  function handleEdit(e) {
    e.preventDefault();
    console.log('Done editing');
  }

  return (
    <EditPostDisplay className="active">
      <EditPostContainer>
        <Header>
          <button onClick={onClose}>cancel</button>
          <h3>Edit info</h3>
          <button type="submit" name="done" onClick={handleEdit}>
            Done
          </button>
        </Header>
        <FormContainer>
          <form onSubmit={(e) => handleEdit(e)}>
            <textarea
              type="text"
              name="description"
              value={descriptionData}
              onChange={(e) => setDescription(e.target.value)}
            />
          </form>
        </FormContainer>
      </EditPostContainer>
    </EditPostDisplay>
  );
}

export default EditPost;
