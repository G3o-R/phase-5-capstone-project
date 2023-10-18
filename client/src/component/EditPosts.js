import React, { useState } from 'react';
import {
  EditPostDisplay,
  EditPostContainer,
  Header,
  FormContainer,
} from '../styles/EditPostStyles';
import { useDispatch } from 'react-redux';
import { editDescriptionOnPost } from '../redux/features/allPostsSlice';

function EditPost({ onClose, postData }) {
  const [descriptionData, setDescription] = useState(postData.description);
  const dispatch = useDispatch()

  function handleEdit(e) {
    e.preventDefault();
    const descriptionToUpdateData = {
        postId: postData.id,
        descriptionData: descriptionData
    }
    dispatch(editDescriptionOnPost(descriptionToUpdateData))
    onClose()
  }

  return (
    <EditPostDisplay className="active">
      <EditPostContainer onSubmit={(e) => handleEdit(e)}>
        <Header>
          <button onClick={onClose}>cancel</button>
          <h3>Edit Description</h3>
          <button type="submit" name="done">
            Done
          </button>
        </Header>
        <FormContainer>
            <textarea
              type="text"
              name="description"
              value={descriptionData}
              placeholder='description...'
              onChange={(e) => setDescription(e.target.value)}
            />
        </FormContainer>
      </EditPostContainer>
    </EditPostDisplay>
  );
}

export default EditPost;
