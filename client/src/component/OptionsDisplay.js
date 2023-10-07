import { 
    OptionsDisplayContainer,
    OptionsContent,
    CloseButton,
    Option
 } from "../styles/OptionsDisplayStyles";

 import { useDispatch } from "react-redux"
 import { deleteComment } from "../redux/features/commentsSlice";

function OptionsDisplay({ commentData, onClose }) {
    const dispatch = useDispatch()
    function handleDeleteComment(){
        dispatch(deleteComment(commentData))
        onClose()
    }

    return (
      <OptionsDisplayContainer className="active">
        <CloseButton onClick={onClose}>x</CloseButton>
        <OptionsContent>
          <Option onClick={handleDeleteComment} className="delete">Delete</Option>
          <Option onClick={onClose} className="cancel">Cancel</Option>
        </OptionsContent>
      </OptionsDisplayContainer>
    );
  }
  
  export default OptionsDisplay